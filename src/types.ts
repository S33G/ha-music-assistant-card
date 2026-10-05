export type Data = Record<string, unknown>;
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Data;
  last_updated?: string;
}
export interface RegistryEntry {
  entity_id: string;
  config_entry_id: string | null;
  platform?: string;
  device_id?: string | null;
  area_id?: string | null;
  disabled_by?: string | null;
  translation_key?: string;
  unique_id?: string;
}
export interface Hass {
  states: Record<string, HassEntity | undefined>;
  services: Record<string, Record<string, unknown> | undefined>;
  connection?: {
    connected?: boolean;
    subscribeEvents?: (
      callback: (event: { data: Data }) => void,
      type: string,
    ) => Promise<() => void>;
  };
  callService(
    domain: string,
    service: string,
    data?: Data,
    target?: { entity_id: string | string[] },
  ): Promise<unknown>;
  callWS<T = unknown>(message: Data): Promise<T>;
  hassUrl?: (path: string) => string;
  language?: string;
}
export interface EntityConfig {
  entity_id: string;
  name?: string;
  volume_entity?: string;
  max_volume?: number;
  config_entry_id?: string;
  favorite_entity?: string;
  [key: string]: unknown;
}
export interface RoomPreset {
  name: string;
  leader: string;
  members: string[];
  [key: string]: unknown;
}
export type Section = "browse" | "queue" | "rooms";
export interface CardConfig {
  type: string;
  entities: (string | EntityConfig)[];
  default_player?: string;
  layout?: "auto" | "compact" | "standard" | "expanded";
  sections?: Section[];
  artwork_size?: "small" | "medium" | "large";
  metadata?: boolean;
  artwork_accent?: boolean;
  room_presets?: RoomPreset[];
  extension?: "auto" | "off";
  config_entry_id?: string;
  [key: string]: unknown;
}
export interface Config extends CardConfig {
  entities: EntityConfig[];
  layout: NonNullable<CardConfig["layout"]>;
  sections: Section[];
  artwork_size: NonNullable<CardConfig["artwork_size"]>;
  metadata: boolean;
  artwork_accent: boolean;
  room_presets: RoomPreset[];
  extension: "auto" | "off";
}
export const mediaTypes = [
  "track",
  "artist",
  "album",
  "playlist",
  "radio",
  "podcast",
  "audiobook",
] as const;
export type MediaType = (typeof mediaTypes)[number];
export interface MediaItem {
  id: string;
  uri: string;
  name: string;
  type: string;
  artist: string;
  album: string;
  image?: string;
  provider?: string;
  duration?: number;
  description?: string;
  quality?: string;
  favorite?: boolean;
  queueId?: string;
  raw: Data;
}
export interface QueueSnapshot {
  kind: "partial" | "complete";
  items: MediaItem[];
  hasMore: boolean;
  offset: number;
}
export interface Capabilities {
  search: boolean;
  library: boolean;
  queue: boolean;
  extensionEntry?: string;
  queueActions: string[];
  details: string[];
  favoriteEntity?: string;
}
export interface PlayerState {
  id: string;
  name: string;
  available: boolean;
  state: string;
  features: number;
  title: string;
  artist: string;
  album: string;
  image?: string;
  position: number;
  duration: number;
  volume: number;
  muted: boolean;
  members: string[];
  shuffle: boolean;
  repeat: string;
}
export type Enqueue = "play" | "next" | "add" | "replace" | "radio";
export interface BrowseQuery {
  text: string;
  type: MediaType;
  source: "all" | "library" | "favorites" | "recent";
  offset: number;
}
