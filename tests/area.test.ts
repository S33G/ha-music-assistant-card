import { describe, expect, it } from "vitest";
import { playerIdsInArea } from "../src/area";
import type { Hass } from "../src/types";

describe("area player selection", () => {
  it("uses direct entity areas before device areas and omits disabled or missing players", () => {
    const states: Hass["states"] = Object.fromEntries(
      ["living", "kitchen", "moved", "disabled"].map((name) => [
        `media_player.${name}`,
        { entity_id: `media_player.${name}`, state: "idle", attributes: {} },
      ]),
    );
    const entities = [
      {
        entity_id: "media_player.living",
        device_id: "device-living",
        area_id: null,
      },
      {
        entity_id: "media_player.kitchen",
        device_id: "device-kitchen",
        area_id: "living",
      },
      {
        entity_id: "media_player.moved",
        device_id: "device-living",
        area_id: "other",
      },
      {
        entity_id: "media_player.disabled",
        device_id: "device-living",
        disabled_by: "user",
      },
      { entity_id: "media_player.missing", device_id: "device-living" },
      { entity_id: "light.living", device_id: "device-living" },
    ];
    const devices = [
      { id: "device-living", area_id: "living" },
      { id: "device-kitchen", area_id: "kitchen" },
    ];
    expect(playerIdsInArea("living", entities, devices, states)).toEqual([
      "media_player.kitchen",
      "media_player.living",
    ]);
  });

  it("rejects unavailable registry data", () => {
    expect(() => playerIdsInArea("living", null, [], {})).toThrow(
      "registry data is unavailable",
    );
  });
});
