import { describe, it, expect, vi } from "vitest";
import { NativeAdapter } from "../src/adapters/native";
import { ExtensionAdapter } from "../src/adapters/extension";
import { buildConfig } from "../src/config";
import { normalizeItem } from "../src/model";
import { fixture } from "./fixtures";
const config = () =>
  buildConfig({
    type: "x",
    entities: [
      { entity_id: "media_player.living", max_volume: 30 },
      "media_player.kitchen",
      "media_player.bedroom",
    ],
  });
describe("native adapter", () => {
  it("uses flat search fields, resolves and caches integration entries", async () => {
    const { hass, calls } = fixture();
    const adapter = new NativeAdapter(hass, config());
    await adapter.browse("media_player.living", {
      text: "song",
      type: "track",
      source: "all",
      offset: 0,
    });
    await adapter.entry("media_player.living");
    expect(
      calls.filter((c) => c.type === "config/entity_registry/get"),
    ).toHaveLength(1);
    expect(calls.at(-1)).toMatchObject({
      return_response: true,
      service_data: {
        config_entry_id: "native-entry",
        limit: 50,
        name: "song",
        library_only: false,
      },
    });
  });
  it("paginates library and represents native queue as partial", async () => {
    const { hass, calls } = fixture();
    const adapter = new NativeAdapter(hass, config());
    await adapter.browse("media_player.living", {
      text: "",
      type: "album",
      source: "recent",
      offset: 25,
    });
    expect(calls.at(-1)).toMatchObject({
      service_data: { offset: 25, limit: 25, order_by: "last_played_desc" },
    });
    expect(await adapter.queue("media_player.living")).toMatchObject({
      kind: "partial",
      hasMore: false,
      items: [{ name: "First track" }],
    });
    expect(await adapter.favoriteEntity("media_player.living")).toBe(
      "button.favorite",
    );
  });
  it("preserves existing members and reports per-room preset failures", async () => {
    const { hass, calls } = fixture();
    hass.states["media_player.living"]!.attributes.group_members = [
      "media_player.living",
      "media_player.kitchen",
    ];
    const adapter = new NativeAdapter(hass, config());
    await adapter.join("media_player.living", ["media_player.bedroom"]);
    expect(calls.at(-1)).toMatchObject({
      data: { group_members: ["media_player.kitchen", "media_player.bedroom"] },
    });
    hass.states["media_player.bedroom"]!.state = "unavailable";
    await expect(
      adapter.preset("media_player.living", [
        "media_player.kitchen",
        "media_player.bedroom",
      ]),
    ).rejects.toThrow("media_player.bedroom");
  });
  it("limits per-room volume, including alternate entities", async () => {
    const { hass, calls } = fixture();
    const cfg = config();
    cfg.entities[0].volume_entity = "media_player.kitchen";
    await new NativeAdapter(hass, cfg).volume("media_player.living", 95);
    expect(calls.at(-1)).toMatchObject({
      target: { entity_id: "media_player.kitchen" },
      data: { volume_level: 0.3 },
    });
  });
  it("does not swallow service failures or retry mutations", async () => {
    const { hass } = fixture();
    hass.callService = vi.fn().mockRejectedValue(new Error("Rejected"));
    const adapter = new NativeAdapter(hass, config());
    await expect(
      adapter.play(
        "media_player.living",
        normalizeItem({ uri: "library://track/1" }),
        "next",
      ),
    ).rejects.toThrow("Rejected");
    expect(hass.callService).toHaveBeenCalledTimes(1);
  });
});
describe("optional extension", () => {
  it("requires mapped instance and supports off policy", async () => {
    const { hass } = fixture();
    const cfg = config();
    const native = new NativeAdapter(hass, cfg);
    const ext = new ExtensionAdapter(native);
    expect(await ext.entry("media_player.living")).toBeUndefined();
    hass.services.mass_queue = { get_queue_items: {} };
    expect(await ext.entry("media_player.living")).toBe("extension-entry");
    cfg.extension = "off";
    expect(await ext.entry("media_player.living")).toBeUndefined();
  });
  it("uses queue offsets including zero and queue item IDs", async () => {
    const { hass, calls } = fixture();
    hass.services.mass_queue = { get_queue_items: {}, remove_queue_item: {} };
    const ext = new ExtensionAdapter(new NativeAdapter(hass, config()));
    const queue = await ext.queue("media_player.living");
    expect(queue.kind).toBe("complete");
    expect(calls.at(-1)).toMatchObject({
      service_data: { entity: "media_player.living", offset: 0, limit: 50 },
    });
    await ext.action(
      "media_player.living",
      "remove_queue_item",
      queue.items[0],
    );
    expect(calls.at(-1)).toMatchObject({
      data: { entity: "media_player.living", queue_item_id: "q1" },
    });
  });
});

it("searches favorites without dropping its collection filter", async () => {
  const { hass, calls } = fixture();
  const adapter = new NativeAdapter(hass, config());
  await adapter.browse("media_player.living", {
    text: "ambient",
    source: "favorites",
    type: "track",
    offset: 0,
  });
  expect(calls.at(-1)).toMatchObject({
    service: "get_library",
    service_data: { search: "ambient", favorite: true },
  });
});

it("uses extension track and episode response envelopes", async () => {
  const { hass } = fixture();
  const native = new NativeAdapter(hass, config());
  const ext = new ExtensionAdapter(native);
  native.response = vi
    .fn()
    .mockResolvedValueOnce({
      tracks: [{ media_title: "Song", media_content_id: "library://track/1" }],
    })
    .mockResolvedValueOnce({
      episodes: [
        {
          media_title: "Episode",
          media_content_id: "library://podcast_episode/1",
        },
      ],
    });
  expect(
    (
      await ext.children(
        "extension",
        normalizeItem({ media_type: "album", uri: "library://album/1" }),
      )
    )[0].name,
  ).toBe("Song");
  expect(
    (
      await ext.children(
        "extension",
        normalizeItem({ media_type: "podcast", uri: "library://podcast/1" }),
      )
    )[0].name,
  ).toBe("Episode");
});
