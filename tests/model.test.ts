import { describe, it, expect } from "vitest";
import { buildConfig, gridOptions } from "../src/config";
import {
  normalizeItem,
  normalizeItems,
  playerState,
  safeImage,
  volumeLevel,
} from "../src/model";
import { fixture } from "./fixtures";
describe("configuration and media normalization", () => {
  it("validates IDs, defaults, duplicate players, volume limits and presets", () => {
    const config = buildConfig({
      type: "x",
      entities: ["media_player.living"],
    });
    expect(config.layout).toBe("auto");
    expect(gridOptions(config)).toMatchObject({ columns: 12, rows: 6 });
    for (const entities of [
      [],
      ["light.wrong"],
      ["media_player.a", "media_player.a"],
      [{ entity_id: "media_player.a", max_volume: 101 }],
    ])
      expect(() => buildConfig({ type: "x", entities })).toThrow();
    expect(() =>
      buildConfig({
        type: "x",
        entities: ["media_player.a"],
        room_presets: [
          {
            name: "Bad",
            leader: "media_player.b",
            members: ["media_player.a"],
          },
        ],
      }),
    ).toThrow();
  });
  it("normalizes native nested items and extension queue fields", () => {
    const native = normalizeItem({
      queue_item_id: "q",
      media_item: {
        uri: "library://track/1",
        name: "Track",
        artists: [{ name: "Artist" }],
        album: { name: "Album" },
        image: "/api/image",
      },
      stream_details: {
        content_type: "flac",
        sample_rate: 96000,
        bit_depth: 24,
      },
    });
    expect(native).toMatchObject({
      name: "Track",
      artist: "Artist",
      album: "Album",
      queueId: "q",
      quality: "flac · 96 kHz · 24-bit",
    });
    expect(
      normalizeItem({
        media_title: "Ext",
        media_artist: "Singer",
        media_album_name: "Record",
        media_content_id: "library://track/1",
        media_image: "/cover",
      }),
    ).toMatchObject({
      name: "Ext",
      artist: "Singer",
      album: "Record",
      image: "/cover",
    });
    expect(() => normalizeItems({})).toThrow();
  });
  it("rejects dangerous image URLs and clamps volume and progress", () => {
    for (const value of [
      "javascript:alert(1)",
      "//evil.com/x",
      "/\\evil.com",
      "https://user:secret@example.com/x",
      "data:image/svg+xml,bad",
    ])
      expect(safeImage(value)).toBeUndefined();
    expect(safeImage("/api/image")).toBe("/api/image");
    expect(
      volumeLevel(99, { entity_id: "media_player.a", max_volume: 35 }),
    ).toBe(0.35);
    const { hass } = fixture();
    hass.states["media_player.living"]!.attributes = {
      media_duration: 100,
      media_position: 90,
      media_position_updated_at: new Date(0).toISOString(),
    };
    expect(
      playerState(hass, { entity_id: "media_player.living" }, 20000).position,
    ).toBe(100);
    expect(
      playerState(hass, { entity_id: "media_player.missing" }).available,
    ).toBe(false);
  });
});
