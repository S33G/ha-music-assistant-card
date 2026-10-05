import { LitElement, css, html } from "lit";
import { playerIdsInArea } from "./area";
import { buildConfig, CARD_TYPE } from "./config";
import type {
  CardConfig,
  EntityConfig,
  Hass,
  RoomPreset,
  Section,
} from "./types";
export class MusicAssistantEditor extends LitElement {
  static properties = { hass: { attribute: false } };
  hass?: Hass;
  private config: CardConfig = { type: CARD_TYPE, entities: [] };
  private error = "";
  private selectedArea = "";
  private selectedPlayers: string[] = [];
  private addingPlayers = false;
  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
      font-family: inherit;
    }
    * {
      box-sizing: border-box;
    }
    fieldset {
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 8px;
      margin: 12px 0;
      padding: 12px;
      min-width: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
      align-items: start;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 8px 0;
      font-size: 0.9rem;
    }
    input,
    select,
    button {
      font: inherit;
      color: inherit;
      min-height: 44px;
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      padding: 8px;
      width: 100%;
    }
    ha-entity-picker,
    ha-selector {
      display: block;
      min-width: 0;
      width: 100%;
    }
    .selector-field > span {
      display: block;
      line-height: 1.5;
    }
    button {
      cursor: pointer;
      width: auto;
      margin: 4px;
    }
    input[type="checkbox"] {
      min-height: 24px;
      width: 24px;
    }
    input[type="range"] {
      border: 0;
      padding: 0;
    }
    .player-id {
      font-weight: 600;
      overflow-wrap: anywhere;
    }
    .check {
      flex-direction: row;
      align-items: center;
    }
    .error {
      color: var(--error-color, #b00020);
    }
    p {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    :focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
    }
  `;
  setConfig(config: CardConfig) {
    this.config = { ...config, entities: [...(config.entities ?? [])] };
    this.requestUpdate();
  }
  private updateConfig(patch: Partial<CardConfig>) {
    this.config = { ...this.config, ...patch };
    try {
      buildConfig(this.config);
      this.error = "";
      this.dispatchEvent(
        new CustomEvent("config-changed", {
          detail: { config: { ...this.config } },
          bubbles: true,
          composed: true,
        }),
      );
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Invalid configuration";
    }
    this.requestUpdate();
  }
  private entities() {
    return this.config.entities.map((e) =>
      typeof e === "string" ? { entity_id: e } : e,
    );
  }
  private entity(index: number, patch: Partial<EntityConfig>) {
    const entities = this.entities().map((e, i) =>
      i === index ? { ...e, ...patch } : e,
    );
    this.updateConfig({ entities });
  }
  private textField(
    label: string,
    value: string,
    onChange: (s: string) => void,
  ) {
    return html`<label
      >${label}<input
        aria-label=${label}
        .value=${value}
        @change=${(e: Event) => onChange((e.target as HTMLInputElement).value)}
    /></label>`;
  }
  private entityPicker(
    label: string,
    value: string | undefined,
    domains: string[],
    onChange: (entityId: string) => void,
    allowedEntities?: string[],
  ) {
    return html`<label class="entity-picker"
      >${label}<ha-entity-picker
        .hass=${this.hass}
        .label=${""}
        aria-label=${label}
        .value=${value || undefined}
        .includeDomains=${domains}
        .includeEntities=${allowedEntities}
        @value-changed=${(e: CustomEvent<{ value?: string }>) =>
          onChange(e.detail.value ?? "")}
      ></ha-entity-picker
    ></label>`;
  }
  private select(
    label: string,
    value: string,
    values: string[],
    change: (s: string) => void,
  ) {
    return html`<label
      >${label}<select
        aria-label=${label}
        .value=${value}
        @change=${(e: Event) => change((e.target as HTMLSelectElement).value)}
      >
        ${values.map((v) => html`<option value=${v}>${v}</option>`)}
      </select></label
    >`;
  }
  private preset(index: number, patch: Partial<RoomPreset>) {
    this.updateConfig({
      room_presets: (this.config.room_presets ?? []).map((p, i) =>
        i === index ? { ...p, ...patch } : p,
      ),
    });
  }
  private async addPlayers() {
    if (this.addingPlayers) return;
    const selected = [...this.selectedPlayers];
    const area = this.selectedArea;
    if (!selected.length && !area) return;
    this.addingPlayers = true;
    this.error = "";
    this.requestUpdate();
    try {
      let ids = selected;
      if (!ids.length) {
        if (!this.hass) throw new Error("Home Assistant is not connected.");
        const [entities, devices] = await Promise.all([
          this.hass.callWS<unknown>({ type: "config/entity_registry/list" }),
          this.hass.callWS<unknown>({ type: "config/device_registry/list" }),
        ]);
        ids = playerIdsInArea(area, entities, devices, this.hass.states);
        if (!ids.length)
          throw new Error("No player entities were found in this area.");
      }
      const existing = this.entities();
      const existingIds = new Set(existing.map((entity) => entity.entity_id));
      const additions = [...new Set(ids)]
        .filter((id) => !existingIds.has(id))
        .map((entity_id) => ({ entity_id }));
      if (!additions.length)
        throw new Error("These players are already configured.");
      this.updateConfig({ entities: [...existing, ...additions] });
      this.selectedArea = "";
      this.selectedPlayers = [];
    } catch (error) {
      this.error =
        error instanceof Error ? error.message : "Could not add players.";
    } finally {
      this.addingPlayers = false;
      this.requestUpdate();
    }
  }
  protected render() {
    const entities = this.entities();
    return html`<p>
        Choose an area or one or more player entities to add rooms.
      </p>
      ${this.error ? html`<p class="error" role="alert">${this.error}</p>` : ""}
      <fieldset>
        <legend>Add players</legend>
        <div class="grid">
          <label class="selector-field">
            <span>Area</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{ area: {} }}
              .value=${this.selectedArea || undefined}
              .label=${""}
              .required=${false}
              @value-changed=${(event: CustomEvent<{ value?: string }>) => {
                this.selectedArea = event.detail.value ?? "";
                this.requestUpdate();
              }}
            ></ha-selector>
          </label>
          <label class="selector-field">
            <span>Player entities</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { filter: { domain: "media_player" }, multiple: true } }}
              .value=${this.selectedPlayers}
              .label=${""}
              .required=${false}
              @value-changed=${(event: CustomEvent<{ value?: string[] }>) => {
                this.selectedPlayers = Array.isArray(event.detail.value)
                  ? event.detail.value
                  : [];
                this.requestUpdate();
              }}
            ></ha-selector>
          </label>
        </div>
        <p>
          Selected players take priority. Leave them empty to add every player
          in the area.
        </p>
        <button
          ?disabled=${this.addingPlayers || (!this.selectedArea && !this.selectedPlayers.length)}
          @click=${this.addPlayers}
        >
          ${this.addingPlayers ? "Adding…" : "Add players"}
        </button>
      </fieldset>
      ${entities.map(
        (entity, i) =>
          html`<fieldset>
            <legend>
              Room ${i + 1}:
              ${entity.name || this.hass?.states[entity.entity_id]?.attributes.friendly_name || entity.entity_id}
            </legend>
            <div class="grid">
              <p class="player-id">${entity.entity_id}</p>
              ${this.textField("Room name", entity.name ?? "", (v) => this.entity(i, { name: v }))}${this.entityPicker("Volume entity", entity.volume_entity, ["media_player"], (v) => this.entity(i, { volume_entity: v || undefined }))}${this.entityPicker("Favorite button entity", entity.favorite_entity, ["button"], (v) => this.entity(i, { favorite_entity: v || undefined }))}${this.textField("Integration entry ID", entity.config_entry_id ?? "", (v) => this.entity(i, { config_entry_id: v }))}<label
                ><span
                  >Maximum volume:
                  <output id=${`max-volume-${i}`}
                    >${entity.max_volume ?? 100}%</output
                  ></span
                ><input
                  aria-label=${`Maximum volume for ${entity.name || entity.entity_id}`}
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(entity.max_volume ?? 100)}
                  @input=${(event: Event) => {
                    const input = event.target as HTMLInputElement;
                    const output = this.shadowRoot?.getElementById(
                      `max-volume-${i}`,
                    );
                    if (output) output.textContent = `${input.value}%`;
                  }}
                  @change=${(e: Event) => this.entity(i, { max_volume: Number((e.target as HTMLInputElement).value) })}
              /></label>
            </div>
            <button
              ?disabled=${i === 0}
              @click=${() => {
                const list = [...entities];
                [list[i - 1], list[i]] = [list[i], list[i - 1]];
                this.updateConfig({ entities: list });
              }}
            >
              Move up</button
            ><button
              ?disabled=${i === entities.length - 1}
              @click=${() => {
                const list = [...entities];
                [list[i + 1], list[i]] = [list[i], list[i + 1]];
                this.updateConfig({ entities: list });
              }}
            >
              Move down</button
            ><button
              @click=${() => this.updateConfig({ entities: entities.filter((_, j) => i !== j) })}
            >
              Remove room
            </button>
          </fieldset>`,
      )}
      <div class="grid">
        ${this.entityPicker("Default player", this.config.default_player, ["media_player"], (v) => this.updateConfig({ default_player: v || undefined }), entities.map((e) => e.entity_id).filter(Boolean))}${this.select("Layout", this.config.layout ?? "auto", ["auto", "compact", "standard", "expanded"], (v) => this.updateConfig({ layout: v as CardConfig["layout"] }))}${this.select("Artwork size", this.config.artwork_size ?? "medium", ["small", "medium", "large"], (v) => this.updateConfig({ artwork_size: v as CardConfig["artwork_size"] }))}${this.select("Queue extension", this.config.extension ?? "auto", ["auto", "off"], (v) => this.updateConfig({ extension: v as CardConfig["extension"] }))}${this.textField("Default integration entry ID", this.config.config_entry_id ?? "", (v) => this.updateConfig({ config_entry_id: v || undefined }))}
      </div>
      <fieldset>
        <legend>Appearance</legend>
        ${(["metadata", "artwork_accent"] as const).map((key) => html`<label class="check"><input type="checkbox" .checked=${this.config[key] ?? key === "metadata"} @change=${(e: Event) => this.updateConfig({ [key]: (e.target as HTMLInputElement).checked })} />${key === "metadata" ? "Show metadata" : "Use artwork accent colors"}</label>`)}
      </fieldset>
      <fieldset>
        <legend>Search</legend>
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.config.advanced_search ?? false}
            @change=${(e: Event) => this.updateConfig({ advanced_search: (e.target as HTMLInputElement).checked })}
          />
          Show advanced media type and collection filters
        </label>
      </fieldset>
      <fieldset>
        <legend>Visible sections</legend>
        ${(["browse", "queue", "rooms"] as Section[]).map(
          (section) =>
            html`<label class="check"
              ><input
                type="checkbox"
                .checked=${(this.config.sections ?? ["browse", "queue", "rooms"]).includes(section)}
                @change=${(e: Event) => {
                  const current = this.config.sections ?? [
                    "browse",
                    "queue",
                    "rooms",
                  ];
                  this.updateConfig({
                    sections: (e.target as HTMLInputElement).checked
                      ? [...current, section]
                      : current.filter((s) => s !== section),
                  });
                }}
              />${section}</label
            >`,
        )}
      </fieldset>
      <fieldset>
        <legend>Room presets</legend>
        ${(this.config.room_presets ?? []).map(
          (preset, i) =>
            html`<fieldset>
              ${this.textField("Preset name", preset.name, (v) => this.preset(i, { name: v }))}${this.entityPicker("Preset leader", preset.leader, ["media_player"], (v) => this.preset(i, { leader: v }), entities.map((e) => e.entity_id).filter(Boolean))}${entities.map((entity) => html`<label class="check"><input type="checkbox" .checked=${preset.members.includes(entity.entity_id)} @change=${(e: Event) => this.preset(i, { members: (e.target as HTMLInputElement).checked ? [...preset.members, entity.entity_id] : preset.members.filter((id) => id !== entity.entity_id) })} />${entity.name || entity.entity_id}</label>`)}<button
                @click=${() => this.updateConfig({ room_presets: this.config.room_presets?.filter((_, j) => i !== j) })}
              >
                Remove preset
              </button>
            </fieldset>`,
        )}<button
          ?disabled=${!entities.length}
          @click=${() => this.updateConfig({ room_presets: [...(this.config.room_presets ?? []), { name: "New preset", leader: entities[0].entity_id, members: entities.map((e) => e.entity_id) }] })}
        >
          Add preset
        </button>
      </fieldset>`;
  }
}
