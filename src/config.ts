import type { CardConfig, Config, EntityConfig, Section } from "./types";
export const CARD_TYPE = "custom:ha-music-assistant-card";
const entityPattern = /^media_player\.[a-z0-9_]+$/;
export function buildConfig(input: CardConfig): Config {
  if (!input || !Array.isArray(input.entities) || !input.entities.length)
    throw new Error("Configure at least one Music Assistant player.");
  const entities: EntityConfig[] = input.entities.map((value) =>
    typeof value === "string" ? { entity_id: value } : { ...value },
  );
  const ids = new Set<string>();
  for (const entity of entities) {
    if (!entityPattern.test(entity.entity_id))
      throw new Error("Players must use media_player entity IDs.");
    if (ids.has(entity.entity_id))
      throw new Error("Each player must appear only once.");
    ids.add(entity.entity_id);
    if (entity.volume_entity && !entityPattern.test(entity.volume_entity))
      throw new Error("Volume entity must be a media_player.");
    if (
      entity.favorite_entity &&
      !/^button\.[a-z0-9_]+$/.test(entity.favorite_entity)
    )
      throw new Error("Favorite entity must be a button.");
    if (
      entity.max_volume !== undefined &&
      (!Number.isFinite(entity.max_volume) ||
        entity.max_volume < 0 ||
        entity.max_volume > 100)
    )
      throw new Error("Volume ceilings must be between 0 and 100.");
  }
  if (input.default_player && !ids.has(input.default_player))
    throw new Error("Default player must be in the player list.");
  const layout = input.layout ?? "auto";
  if (!["auto", "compact", "standard", "expanded"].includes(layout))
    throw new Error("Unknown layout.");
  const sections = input.sections ?? ["browse", "queue", "rooms"];
  if (
    !Array.isArray(sections) ||
    sections.some((s) => !["browse", "queue", "rooms"].includes(s)) ||
    new Set(sections).size !== sections.length
  )
    throw new Error(
      "Sections must contain unique browse, queue, or rooms values.",
    );
  if (input.extension && !["auto", "off"].includes(input.extension))
    throw new Error("Extension must be auto or off.");
  if (
    input.artwork_size &&
    !["small", "medium", "large"].includes(input.artwork_size)
  )
    throw new Error("Unknown artwork size.");
  for (const key of ["metadata", "artwork_accent"] as const)
    if (input[key] !== undefined && typeof input[key] !== "boolean")
      throw new Error(`${key} must be a boolean.`);
  const presets = input.room_presets ?? [];
  if (!Array.isArray(presets)) throw new Error("Room presets must be a list.");
  for (const preset of presets)
    if (
      !preset ||
      typeof preset.name !== "string" ||
      !preset.name.trim() ||
      !ids.has(preset.leader) ||
      !Array.isArray(preset.members) ||
      !preset.members.length ||
      preset.members.some((id) => !ids.has(id))
    )
      throw new Error(
        "Room presets require a name, configured leader, and configured members.",
      );
  return {
    ...input,
    type: CARD_TYPE,
    entities,
    layout,
    sections: sections as Section[],
    artwork_size: input.artwork_size ?? "medium",
    metadata: input.metadata ?? true,
    artwork_accent: input.artwork_accent ?? false,
    extension: input.extension ?? "auto",
    room_presets: presets.map((p) => ({
      ...p,
      members: [...new Set(p.members)],
    })),
  };
}
export function gridOptions(config?: Config) {
  return config?.layout === "compact"
    ? { columns: 6, rows: 2, min_columns: 6, min_rows: 2 }
    : {
        columns: 12,
        rows: config?.layout === "expanded" ? 8 : 6,
        min_columns: 6,
        min_rows: 4,
      };
}
