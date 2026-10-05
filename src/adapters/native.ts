import type {
  BrowseQuery,
  Config,
  Data,
  Enqueue,
  EntityConfig,
  Hass,
  MediaItem,
  QueueSnapshot,
  RegistryEntry,
} from "../types";
import {
  Feature,
  normalizeItem,
  normalizeItems,
  number,
  playerState,
  record,
  strings,
  supports,
  text,
  volumeLevel,
} from "../model";
export class NativeAdapter {
  private entries = new Map<string, string>();
  constructor(
    public hass: Hass,
    public config: Config,
  ) {}
  has(domain: string, service: string) {
    return !!this.hass.services[domain]?.[service];
  }
  async response(
    domain: string,
    service: string,
    data: Data,
    entity?: string,
  ): Promise<Data> {
    const result = record(
      await this.hass.callWS({
        type: "call_service",
        domain,
        service,
        service_data: data,
        ...(entity ? { target: { entity_id: entity } } : {}),
        return_response: true,
      }),
    );
    if (
      !("response" in result) ||
      result.response === null ||
      typeof result.response !== "object"
    )
      throw new Error(`${service} returned no response.`);
    return record(result.response);
  }
  entity(id: string): EntityConfig {
    return (
      this.config.entities.find((e) => e.entity_id === id) ?? { entity_id: id }
    );
  }
  async entry(id: string) {
    const override =
      this.entity(id).config_entry_id || this.config.config_entry_id;
    if (override) return override;
    const cached = this.entries.get(id);
    if (cached) return cached;
    const result = record(
      await this.hass.callWS({
        type: "config/entity_registry/get",
        entity_id: id,
      }),
    );
    const entry = text(result.config_entry_id);
    if (!entry || (result.platform && result.platform !== "music_assistant"))
      throw new Error(
        "Select a Music Assistant player or set its integration entry ID.",
      );
    this.entries.set(id, entry);
    return entry;
  }
  assertAvailable(id: string) {
    if (!playerState(this.hass, this.entity(id)).available)
      throw new Error("This room is unavailable.");
  }
  async media(id: string, service: string, data: Data = {}) {
    this.assertAvailable(id);
    if (!this.has("media_player", service))
      throw new Error("This action is unavailable.");
    const required: Record<string, number> = {
      media_play: Feature.play,
      media_pause: Feature.pause,
      media_seek: Feature.seek,
      media_previous_track: Feature.previous,
      media_next_track: Feature.next,
      volume_set: Feature.volume,
      volume_mute: Feature.mute,
      shuffle_set: Feature.shuffle,
      repeat_set: Feature.repeat,
      clear_playlist: Feature.clear,
      join: Feature.group,
      unjoin: Feature.group,
    };
    if (
      required[service] &&
      !supports(
        number(this.hass.states[id]?.attributes.supported_features),
        required[service],
      )
    )
      throw new Error("This player does not support that action.");
    return this.hass.callService("media_player", service, data, {
      entity_id: id,
    });
  }
  async browse(
    id: string,
    query: BrowseQuery,
  ): Promise<{ items: MediaItem[]; hasMore: boolean }> {
    const config_entry_id = await this.entry(id);
    if (query.text.trim() && ["all", "library"].includes(query.source)) {
      const result = await this.response("music_assistant", "search", {
        config_entry_id,
        name: query.text.trim(),
        media_type: [query.type],
        limit: 50,
        library_only: query.source !== "all",
      });
      const key = query.type === "radio" ? "radio" : `${query.type}s`;
      return { items: normalizeItems(result[key]), hasMore: false };
    }
    const result = await this.response("music_assistant", "get_library", {
      config_entry_id,
      media_type: query.type,
      limit: 25,
      offset: query.offset,
      ...(query.source === "favorites" ? { favorite: true } : {}),
      ...(query.text.trim() ? { search: query.text.trim() } : {}),
      order_by: query.source === "recent" ? "last_played_desc" : "name",
    });
    const items = normalizeItems(result.items);
    return { items, hasMore: items.length === 25 };
  }
  async queue(id: string): Promise<QueueSnapshot> {
    const result = await this.response("music_assistant", "get_queue", {}, id);
    const queue = record(result[id]);
    if (!("current_item" in queue))
      throw new Error("Queue details were not returned for this room.");
    return {
      kind: "partial",
      items: [queue.current_item, queue.next_item]
        .filter(Boolean)
        .map(normalizeItem),
      hasMore: false,
      offset: 0,
    };
  }
  async play(id: string, item: MediaItem, mode: Enqueue) {
    this.assertAvailable(id);
    if (!item.uri) throw new Error("This item has no playable URI.");
    if (
      !this.has("music_assistant", "play_media") ||
      !supports(
        number(this.hass.states[id]?.attributes.supported_features),
        Feature.playMedia,
      )
    )
      throw new Error("This player cannot play selected media.");
    return this.hass.callService(
      "music_assistant",
      "play_media",
      {
        media_id: item.uri,
        media_type: item.type,
        ...(mode === "radio" ? { radio_mode: true } : { enqueue: mode }),
      },
      { entity_id: id },
    );
  }
  async volume(id: string, percent: number) {
    const config = this.entity(id);
    const target = config.volume_entity || id;
    if (
      !supports(
        number(this.hass.states[target]?.attributes.supported_features),
        Feature.volume,
      )
    )
      throw new Error("Volume control is unavailable.");
    return this.media(target, "volume_set", {
      volume_level: volumeLevel(percent, {
        ...config,
        max_volume: Math.min(
          config.max_volume ?? 100,
          ...this.config.entities
            .filter(
              (entity) => (entity.volume_entity || entity.entity_id) === target,
            )
            .map((entity) => entity.max_volume ?? 100),
        ),
      }),
    });
  }
  async groupVolume(id: string, percent: number) {
    const members = [
      ...new Set([
        id,
        ...strings(this.hass.states[id]?.attributes.group_members),
      ]),
    ];
    const seen = new Set<string>();
    const failures: string[] = [];
    for (const member of members) {
      const target = this.entity(member).volume_entity || member;
      if (seen.has(target)) continue;
      seen.add(target);
      try {
        await this.volume(member, percent);
      } catch (e) {
        failures.push(
          `${this.entity(member).name || member}: ${errorMessage(e)}`,
        );
      }
    }
    if (failures.length) throw new Error(failures.join("; "));
  }
  async join(leader: string, members: string[]) {
    this.assertAvailable(leader);
    if (
      !supports(
        number(this.hass.states[leader]?.attributes.supported_features),
        Feature.group,
      )
    )
      throw new Error("This player does not support grouping.");
    const current = strings(this.hass.states[leader]?.attributes.group_members);
    const combined = [...new Set([...current, ...members])].filter(
      (id) => id !== leader,
    );
    const entry = await this.entry(leader);
    for (const member of members) {
      this.assertAvailable(member);
      if ((await this.entry(member)) !== entry)
        throw new Error(
          "Grouping requires rooms on the same Music Assistant server.",
        );
    }
    return this.media(leader, "join", { group_members: combined });
  }
  async preset(leader: string, members: string[]) {
    // Accumulate successful joins even if state updates arrive after the service response.
    const joined = strings(this.hass.states[leader]?.attributes.group_members);
    const errors: string[] = [];
    for (const member of [...new Set(members)].filter((m) => m !== leader)) {
      try {
        await this.join(leader, [...joined, member]);
        joined.push(member);
      } catch (e) {
        errors.push(
          `${this.entity(member).name || member}: ${errorMessage(e)}`,
        );
      }
    }
    if (errors.length) throw new Error(errors.join("; "));
  }
  async transfer(source: string, target: string) {
    this.assertAvailable(source);
    this.assertAvailable(target);
    if ((await this.entry(source)) !== (await this.entry(target)))
      throw new Error(
        "Queue transfer requires rooms on the same Music Assistant server.",
      );
    return this.hass.callService(
      "music_assistant",
      "transfer_queue",
      { source_player: source, auto_play: true },
      { entity_id: target },
    );
  }
  async favoriteEntity(id: string): Promise<string | undefined> {
    const override = this.entity(id).favorite_entity;
    if (override) return override;
    const player = record(
      await this.hass.callWS({
        type: "config/entity_registry/get",
        entity_id: id,
      }),
    );
    const entries = await this.hass.callWS<RegistryEntry[]>({
      type: "config/entity_registry/list",
    });
    if (!Array.isArray(entries) || !player.device_id) return;
    return entries.find(
      (e) =>
        e.entity_id.startsWith("button.") &&
        e.device_id === player.device_id &&
        e.config_entry_id === player.config_entry_id &&
        (e.translation_key === "favorite_now_playing" ||
          e.unique_id?.endsWith("_favorite_now_playing")),
    )?.entity_id;
  }
  async children(id: string, item: MediaItem): Promise<MediaItem[]> {
    const result = record(
      await this.hass.callWS({
        type: "media_player/browse_media",
        entity_id: id,
        media_content_id: item.uri,
        media_content_type: item.type,
      }),
    );
    return normalizeItems(result.children);
  }
}
export function errorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : text(record(error).message) || "The request failed. Please try again.";
}
