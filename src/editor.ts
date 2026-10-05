import { LitElement, css, html } from "lit";
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
    button {
      cursor: pointer;
      width: auto;
      margin: 4px;
    }
    input[type="checkbox"] {
      min-height: 24px;
      width: 24px;
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
    list?: string,
  ) {
    return html`<label
      >${label}<input
        aria-label=${label}
        .value=${value}
        list=${list ?? ""}
        @change=${(e: Event) => onChange((e.target as HTMLInputElement).value)}
    /></label>`;
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
  protected render() {
    const entities = this.entities();
    return html`<p>
        Choose Music Assistant player entities. Changes apply once all fields
        are valid.
      </p>
      ${this.error ? html`<p class="error" role="alert">${this.error}</p>` : ""}<datalist
        id="players"
      >
        ${Object.keys(this.hass?.states ?? {})
          .filter((id) => id.startsWith("media_player."))
          .map((id) => html`<option value=${id}></option>`)}</datalist
      >${entities.map(
        (entity, i) =>
          html`<fieldset>
            <legend>Room ${i + 1}</legend>
            <div class="grid">
              ${this.textField("Player entity", entity.entity_id, (v) => this.entity(i, { entity_id: v }), "players")}${this.textField("Room name", entity.name ?? "", (v) => this.entity(i, { name: v }))}${this.textField("Volume entity", entity.volume_entity ?? "", (v) => this.entity(i, { volume_entity: v }), "players")}${this.textField("Favorite button entity", entity.favorite_entity ?? "", (v) => this.entity(i, { favorite_entity: v }))}${this.textField("Integration entry ID", entity.config_entry_id ?? "", (v) => this.entity(i, { config_entry_id: v }))}<label
                >Maximum volume (%)<input
                  aria-label="Maximum volume (%)"
                  type="number"
                  min="0"
                  max="100"
                  .value=${String(entity.max_volume ?? 100)}
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
      )}<button
        @click=${() => {
          const next =
            Object.keys(this.hass?.states ?? {}).find(
              (id) =>
                id.startsWith("media_player.") &&
                !entities.some((e) => e.entity_id === id),
            ) ?? "";
          this.updateConfig({ entities: [...entities, { entity_id: next }] });
        }}
      >
        Add room
      </button>
      <div class="grid">
        ${this.select("Default player", this.config.default_player ?? "", ["", ...entities.map((e) => e.entity_id)], (v) => this.updateConfig({ default_player: v || undefined }))}${this.select("Layout", this.config.layout ?? "auto", ["auto", "compact", "standard", "expanded"], (v) => this.updateConfig({ layout: v as CardConfig["layout"] }))}${this.select("Artwork size", this.config.artwork_size ?? "medium", ["small", "medium", "large"], (v) => this.updateConfig({ artwork_size: v as CardConfig["artwork_size"] }))}${this.select("Queue extension", this.config.extension ?? "auto", ["auto", "off"], (v) => this.updateConfig({ extension: v as CardConfig["extension"] }))}${this.textField("Default integration entry ID", this.config.config_entry_id ?? "", (v) => this.updateConfig({ config_entry_id: v || undefined }))}
      </div>
      <fieldset>
        <legend>Appearance</legend>
        ${(["metadata", "artwork_accent"] as const).map((key) => html`<label class="check"><input type="checkbox" .checked=${this.config[key] ?? key === "metadata"} @change=${(e: Event) => this.updateConfig({ [key]: (e.target as HTMLInputElement).checked })} />${key === "metadata" ? "Show metadata" : "Use artwork accent colors"}</label>`)}
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
              ${this.textField("Preset name", preset.name, (v) => this.preset(i, { name: v }))}${this.select(
                "Preset leader",
                preset.leader,
                entities.map((e) => e.entity_id),
                (v) => this.preset(i, { leader: v }),
              )}${entities.map((entity) => html`<label class="check"><input type="checkbox" .checked=${preset.members.includes(entity.entity_id)} @change=${(e: Event) => this.preset(i, { members: (e.target as HTMLInputElement).checked ? [...preset.members, entity.entity_id] : preset.members.filter((id) => id !== entity.entity_id) })} />${entity.name || entity.entity_id}</label>`)}<button
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
