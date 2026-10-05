// Service and instance-mapping behavior adapted from droans/mass-player-card (MIT).
import type { MediaItem, QueueSnapshot } from "../types";
import { normalizeItem, normalizeItems, record, text } from "../model";
import { NativeAdapter } from "./native";
export const queueServices = [
  "play_queue_item",
  "move_queue_item_up",
  "move_queue_item_down",
  "move_queue_item_next",
  "remove_queue_item",
] as const;
export class ExtensionAdapter {
  constructor(private native: NativeAdapter) {}
  async entry(id: string): Promise<string | undefined> {
    if (
      this.native.config.extension === "off" ||
      !this.native.has("mass_queue", "get_queue_items")
    )
      return;
    const info = record(
      await this.native.hass.callWS({
        type: "mass_queue/get_info",
        entity_id: id,
      }),
    );
    return text(record(info.entries).mass_queue) || undefined;
  }
  async queue(id: string, offset = 0): Promise<QueueSnapshot> {
    const response = await this.native.response(
      "mass_queue",
      "get_queue_items",
      { entity: id, offset, limit: 50 },
    );
    const items = normalizeItems(response[id]);
    return { kind: "complete", items, hasMore: items.length === 50, offset };
  }
  async action(id: string, service: string, item: MediaItem) {
    if (
      !queueServices.some((s) => s === service) ||
      !this.native.has("mass_queue", service) ||
      !item.queueId
    )
      throw new Error("This queue action is unavailable.");
    this.native.assertAvailable(id);
    return this.native.hass.callService("mass_queue", service, {
      entity: id,
      queue_item_id: item.queueId,
    });
  }
  async details(entry: string, item: MediaItem) {
    const response = await this.native.response(
      "mass_queue",
      `get_${item.type}`,
      { config_entry_id: entry, uri: item.uri },
    );
    return normalizeItem(response);
  }
  async children(entry: string, item: MediaItem, page = 0) {
    const service =
      item.type === "podcast"
        ? "get_podcast_episodes"
        : `get_${item.type}_tracks`;
    const response = await this.native.response("mass_queue", service, {
      config_entry_id: entry,
      uri: item.uri,
      ...(item.type === "podcast" ? {} : { page }),
    });
    return normalizeItems(
      item.type === "podcast" ? response.episodes : response.tracks,
    );
  }
}
