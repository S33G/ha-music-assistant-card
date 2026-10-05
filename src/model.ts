import type { Data, EntityConfig, Hass, MediaItem, PlayerState } from "./types";
export function record(value: unknown): Data {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Data)
    : {};
}
export function text(value: unknown): string {
  return typeof value === "string" ? value : "";
}
export function number(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
export function strings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string")
    : [];
}
export function safeImage(value: unknown): string | undefined {
  const url = text(value).trim();
  if (
    !url ||
    [...url].some((char) => char.charCodeAt(0) <= 32 || char === "\\")
  )
    return;
  if (url.startsWith("/") && !url.startsWith("//")) return url;
  try {
    const parsed = new URL(url);
    if (
      ["http:", "https:"].includes(parsed.protocol) &&
      !parsed.username &&
      !parsed.password
    )
      return parsed.href;
  } catch {
    /* Missing artwork is normal. */
  }
}
export function normalizeItem(value: unknown): MediaItem {
  const wrapper = record(value);
  const item = { ...wrapper, ...record(wrapper.media_item) };
  const metadata = record(item.metadata);
  const album = record(item.album);
  const artists = Array.isArray(item.artists)
    ? item.artists
        .map((v) => text(record(v).name) || text(v))
        .filter(Boolean)
        .join(", ")
    : text(item.artist) || text(item.media_artist);
  const images = Array.isArray(metadata.images) ? metadata.images : [];
  const image =
    safeImage(item.media_image) ??
    safeImage(item.image) ??
    safeImage(item.image_url) ??
    safeImage(record(item.image).path) ??
    safeImage(item.thumbnail) ??
    safeImage(record(images[0]).path);
  const format = record(item.audio_format);
  const stream = record(wrapper.streamdetails);
  const quality = {
    ...record(stream.audio_format),
    ...record(wrapper.stream_details),
  };
  const codec = text(format.content_type) || text(quality.content_type);
  const rate = number(format.sample_rate) || number(quality.sample_rate);
  const depth = number(format.bit_depth) || number(quality.bit_depth);
  const uri = text(item.uri) || text(item.media_content_id);
  return {
    id: text(wrapper.queue_item_id) || uri || text(item.item_id),
    uri,
    name:
      text(item.name) ||
      text(item.title) ||
      text(item.media_title) ||
      "Unknown title",
    type: text(item.media_type) || text(item.media_content_type) || "track",
    artist: artists,
    album: text(album.name) || text(item.album) || text(item.media_album_name),
    image,
    provider:
      text(item.provider) || text(quality.provider) || uri.split("://")[0],
    duration: number(item.duration),
    description: text(metadata.description) || text(item.description),
    quality: [
      codec,
      rate ? `${rate / 1000} kHz` : "",
      depth ? `${depth}-bit` : "",
    ]
      .filter(Boolean)
      .join(" · "),
    favorite: typeof item.favorite === "boolean" ? item.favorite : undefined,
    queueId: text(wrapper.queue_item_id) || undefined,
    raw: item,
  };
}
export function normalizeItems(value: unknown): MediaItem[] {
  if (
    !Array.isArray(value) ||
    value.some(
      (item) =>
        item === null || typeof item !== "object" || Array.isArray(item),
    )
  )
    throw new Error("Music Assistant returned an invalid item list.");
  return value.map(normalizeItem);
}
export const Feature = {
  pause: 1,
  seek: 2,
  volume: 4,
  mute: 8,
  previous: 16,
  next: 32,
  playMedia: 512,
  clear: 8192,
  play: 16384,
  shuffle: 32768,
  group: 524288,
  repeat: 262144,
} as const;
export function supports(features: number, feature: number) {
  return (features & feature) === feature;
}
export function playerState(
  hass: Hass | undefined,
  config: EntityConfig,
  now = Date.now(),
): PlayerState {
  const entity = hass?.states[config.entity_id];
  const a = entity?.attributes ?? {};
  const volume =
    hass?.states[config.volume_entity || config.entity_id]?.attributes ?? {};
  const duration = number(a.media_duration);
  const updated = Date.parse(text(a.media_position_updated_at));
  const elapsed =
    entity?.state === "playing" && Number.isFinite(updated)
      ? Math.max(0, (now - updated) / 1000)
      : 0;
  return {
    id: config.entity_id,
    name: config.name || text(a.friendly_name) || config.entity_id,
    available:
      !!entity &&
      !["unavailable", "unknown"].includes(entity.state) &&
      hass?.connection?.connected !== false,
    state: entity?.state ?? "unavailable",
    features: number(a.supported_features),
    title: text(a.media_title),
    artist: text(a.media_artist),
    album: text(a.media_album_name),
    image: safeImage(a.entity_picture),
    position: Math.min(
      duration || Infinity,
      Math.max(0, number(a.media_position) + elapsed),
    ),
    duration,
    volume: number(volume.volume_level),
    muted: volume.is_volume_muted === true,
    members: strings(a.group_members),
    shuffle: a.shuffle === true,
    repeat: text(a.repeat) || "off",
  };
}
export function volumeLevel(percent: number, config: EntityConfig): number {
  return Math.max(0, Math.min(number(percent), config.max_volume ?? 100)) / 100;
}
export function formatTime(seconds: number): string {
  const n = Math.max(0, Math.floor(seconds));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
