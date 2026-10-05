import type { Hass } from "./types";

type RegistryRecord = Record<string, unknown>;

function records(value: unknown): RegistryRecord[] {
  if (!Array.isArray(value))
    throw new Error("Home Assistant registry data is unavailable.");
  return value.filter(
    (entry): entry is RegistryRecord =>
      typeof entry === "object" && entry !== null && !Array.isArray(entry),
  );
}

export function playerIdsInArea(
  areaId: string,
  entityRegistry: unknown,
  deviceRegistry: unknown,
  states: Hass["states"],
): string[] {
  const deviceAreas = new Map<string, string>();
  for (const device of records(deviceRegistry)) {
    if (typeof device.id === "string" && typeof device.area_id === "string")
      deviceAreas.set(device.id, device.area_id);
  }

  const players: string[] = [];
  for (const entity of records(entityRegistry)) {
    if (
      typeof entity.entity_id !== "string" ||
      !entity.entity_id.startsWith("media_player.")
    )
      continue;
    if (entity.disabled_by || !states[entity.entity_id]) continue;
    const assignedArea =
      typeof entity.area_id === "string"
        ? entity.area_id
        : typeof entity.device_id === "string"
          ? deviceAreas.get(entity.device_id)
          : undefined;
    if (assignedArea === areaId) players.push(entity.entity_id);
  }
  return players.sort((a, b) => a.localeCompare(b));
}
