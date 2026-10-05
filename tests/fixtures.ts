import { vi } from "vitest";
import type { Data, Hass } from "../src/types";
import { Feature } from "../src/model";
export const allFeatures = Object.values(Feature).reduce((a, b) => a | b, 0);
export function fixture() {
  const calls: Data[] = [];
  const hass: Hass = {
    states: Object.fromEntries(
      ["living", "kitchen", "bedroom"].map((name) => [
        `media_player.${name}`,
        {
          entity_id: `media_player.${name}`,
          state: "playing",
          attributes: {
            friendly_name: name,
            supported_features: allFeatures,
            media_title: "First track",
            volume_level: 0.4,
            group_members: [],
          },
        },
      ]),
    ),
    services: {
      music_assistant: {
        search: {},
        get_library: {},
        get_queue: {},
        play_media: {},
        transfer_queue: {},
      },
      media_player: Object.fromEntries(
        [
          "join",
          "unjoin",
          "volume_set",
          "volume_mute",
          "media_play",
          "media_pause",
          "clear_playlist",
        ].map((s) => [s, {}]),
      ),
    },
    connection: { connected: true },
    callService: vi.fn(async (domain, service, data, target) => {
      calls.push({ domain, service, data, target });
    }),
    callWS: vi.fn(async <T>(message: Data): Promise<T> => {
      calls.push(message);
      let response: unknown;
      if (message.type === "config/entity_registry/get")
        response = {
          entity_id: message.entity_id,
          platform: "music_assistant",
          config_entry_id: "native-entry",
          device_id: "device",
        };
      else if (message.type === "config/entity_registry/list")
        response = [
          {
            entity_id: "button.favorite",
            device_id: "device",
            config_entry_id: "native-entry",
            translation_key: "favorite_now_playing",
          },
        ];
      else if (message.type === "mass_queue/get_info")
        response = {
          entries: {
            music_assistant: "native-entry",
            mass_queue: "extension-entry",
          },
        };
      else if (message.service === "get_queue")
        response = {
          response: {
            [String((message.target as Data).entity_id)]: {
              current_item: {
                queue_item_id: "q1",
                media_item: { name: "First track", uri: "library://track/1" },
              },
              next_item: null,
            },
          },
        };
      else if (message.service === "get_queue_items")
        response = {
          response: {
            [(message.service_data as Data).entity as string]: [
              {
                queue_item_id: "q1",
                media_title: "Extension track",
                media_content_id: "library://track/1",
                media_artist: "Artist",
                media_image: "/art.png",
              },
            ],
          },
        };
      else if (message.service === "search")
        response = {
          response: {
            tracks: [{ name: "Found track", uri: "library://track/2" }],
          },
        };
      else if (message.service === "get_library")
        response = { response: { items: [] } };
      else response = { response: {} };
      return response as T;
    }),
  };
  return { hass, calls };
}
