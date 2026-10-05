import { LitElement, html, nothing, type TemplateResult } from "lit";
import {
  mdiArrowDown,
  mdiArrowUp,
  mdiClose,
  mdiDeleteOutline,
  mdiDotsHorizontal,
  mdiHeartOutline,
  mdiHomeSoundOutOutline,
  mdiMagnify,
  mdiPause,
  mdiPlay,
  mdiPlaylistMusicOutline,
  mdiRefresh,
  mdiRepeat,
  mdiRepeatOnce,
  mdiShuffle,
  mdiSkipNext,
  mdiSkipPrevious,
  mdiVolumeHigh,
  mdiVolumeOff,
} from "@mdi/js";
import { buildConfig, CARD_TYPE, gridOptions } from "./config";
import { CardController } from "./controller";
import {
  Feature,
  formatTime,
  normalizeItem,
  number,
  playerState,
  record,
  supports,
  text,
} from "./model";
import type {
  CardConfig,
  EntityConfig,
  Hass,
  MediaItem,
  Section,
} from "./types";
import { mediaTypes } from "./types";
import { styles } from "./styles";
import { t } from "./localize";
import "./artwork";
const icons: Record<string, string> = {
  "arrow-down": mdiArrowDown,
  "arrow-up": mdiArrowUp,
  close: mdiClose,
  "delete-outline": mdiDeleteOutline,
  "dots-horizontal": mdiDotsHorizontal,
  "heart-outline": mdiHeartOutline,
  "home-sound-out-outline": mdiHomeSoundOutOutline,
  magnify: mdiMagnify,
  pause: mdiPause,
  play: mdiPlay,
  "playlist-music-outline": mdiPlaylistMusicOutline,
  refresh: mdiRefresh,
  repeat: mdiRepeat,
  "repeat-once": mdiRepeatOnce,
  shuffle: mdiShuffle,
  "skip-next": mdiSkipNext,
  "skip-previous": mdiSkipPrevious,
  "volume-high": mdiVolumeHigh,
  "volume-off": mdiVolumeOff,
};
export class MusicAssistantCard extends LitElement {
  static styles = styles;
  private controller?: CardController;
  private _hass?: Hass;
  private resize?: ResizeObserver;
  private intersection?: IntersectionObserver;
  private width = 0;
  private height = 0;
  private onScreen = true;
  private dialog?: Section | "player" | "details";
  private detail?: MediaItem;
  private detailItems: MediaItem[] = [];
  private detailPage = 0;
  private detailMore = false;
  private detailToken = 0;
  private opener?: HTMLElement;
  private tick?: ReturnType<typeof setInterval>;
  private accentImage = "";
  set hass(value: Hass | undefined) {
    this._hass = value;
    if (value) this.controller?.updateHass(value);
  }
  get hass() {
    return this._hass;
  }
  setConfig(value: CardConfig) {
    const config = buildConfig(value);
    this.controller?.disconnect();
    this.controller = new CardController(config, () => this.requestUpdate());
    if (this.hass) this.controller.updateHass(this.hass);
    if (this.isConnected) {
      this.controller.connect();
      this.visibility();
    }
    this.requestUpdate();
  }
  getGridOptions() {
    return gridOptions(this.controller?.config);
  }
  getCardSize() {
    return Math.ceil((this.height || this.getGridOptions().rows * 64 - 8) / 50);
  }
  static getConfigElement() {
    return document.createElement("ha-music-assistant-card-editor");
  }
  static getStubConfig(hass?: Hass) {
    const id = Object.values(hass?.states ?? {}).find(
      (e) =>
        e?.entity_id.startsWith("media_player.") && e.attributes.mass_player_id,
    )?.entity_id;
    return { type: CARD_TYPE, entities: id ? [id] : [] };
  }
  connectedCallback() {
    super.connectedCallback();
    this.controller?.connect();
    this.resize = new ResizeObserver((entries) => {
      const box = entries[0].contentRect;
      this.width = box.width;
      this.height = box.height;
      this.requestUpdate();
    });
    this.resize.observe(this);
    this.intersection = new IntersectionObserver((entries) => {
      this.onScreen = entries[0].isIntersecting;
      this.visibility();
    });
    this.intersection.observe(this);
    document.addEventListener("visibilitychange", this.visibility);
    this.visibility();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.controller?.disconnect();
    this.resize?.disconnect();
    this.intersection?.disconnect();
    document.removeEventListener("visibilitychange", this.visibility);
    clearInterval(this.tick);
    this.detailToken++;
    this.shadowRoot?.querySelector("dialog")?.close();
  }
  private visibility = () => {
    const visible = this.onScreen && !document.hidden;
    this.controller?.setVisible(visible);
    clearInterval(this.tick);
    if (visible)
      this.tick = setInterval(() => {
        if (this.current?.state === "playing") this.requestUpdate();
      }, 1000);
  };
  private get current() {
    const c = this.controller;
    return c
      ? playerState(
          this.hass,
          c.config.entities.find((e) => e.entity_id === c.active)!,
        )
      : undefined;
  }
  protected updated() {
    const p = this.current;
    const c = this.controller;
    if (p && c) {
      if (p.image !== this.accentImage || !c.config.artwork_accent)
        this.style.setProperty("--music-accent", "transparent");
      this.accentImage = p.image ?? "";
    }
    if (!c || this.dialog) return;
    if (this.split && !c.section && c.config.sections.length)
      c.setSection(c.config.sections[0]);
    else if (!this.inlinePanels && c.section) c.setSection(undefined);
  }
  private get compact() {
    return (
      this.controller?.config.layout === "compact" ||
      (this.height > 0 && this.height < 270)
    );
  }
  private get inlinePanels() {
    return this.controller?.config.layout === "expanded" && !this.compact;
  }
  private get split() {
    return (
      this.controller?.config.layout === "expanded" &&
      this.width >= 720 &&
      !this.compact
    );
  }
  private icon(name: string) {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${icons[name] ?? mdiPlay}></path>
    </svg>`;
  }
  private button(
    label: string,
    icon: string,
    action: () => unknown,
    disabled = false,
    extra = "",
    pressed?: boolean,
  ) {
    return html`<button
      class=${`icon ${extra}`}
      aria-label=${label}
      title=${label}
      ?disabled=${disabled || (extra !== "close" && this.controller?.pending)}
      aria-pressed=${pressed === undefined ? nothing : String(pressed)}
      @click=${action}
    >
      ${this.icon(icon)}
    </button>`;
  }
  private run(action: () => Promise<unknown>) {
    void this.controller?.run(action);
  }
  private async openDialog(
    view: NonNullable<MusicAssistantCard["dialog"]>,
    item?: MediaItem,
  ) {
    if (!this.dialog)
      this.opener = this.shadowRoot?.activeElement as HTMLElement;
    this.dialog = view;
    this.detail = item;
    this.detailItems = [];
    this.detailPage = 0;
    this.detailMore = false;
    this.detailToken++;
    this.controller?.setSection(
      view === "player" || view === "details" ? undefined : view,
    );
    this.requestUpdate();
    await this.updateComplete;
    const dialog = this.shadowRoot?.querySelector("dialog");
    if (dialog && !dialog.open) dialog.showModal();
    if (item) void this.loadDetail(item);
  }
  private closeDialog = () => {
    this.dialog = undefined;
    this.detailToken++;
    this.controller?.setSection(
      this.split ? this.controller.config.sections[0] : undefined,
    );
    this.requestUpdate();
    this.opener?.focus();
  };
  private navigate(section: Section) {
    if (this.inlinePanels) {
      this.controller?.setSection(section);
    } else void this.openDialog(section);
  }
  private async loadDetail(item: MediaItem, more = false) {
    const c = this.controller;
    const token = ++this.detailToken;
    if (!c?.native) return;
    const id = c.active;
    const page = more ? this.detailPage + 1 : 0;
    await c.run(async () => {
      let detail = item;
      if (
        item.type === "track" &&
        c.native!.has("music_assistant", "get_queue") &&
        item.uri === text(this.hass?.states[id]?.attributes.media_content_id)
      ) {
        const queue = await c.native!.queue(id);
        detail = queue.items.find((track) => track.uri === item.uri) ?? item;
      }
      let children: MediaItem[] = [];
      const entry = c.capabilities.extensionEntry;
      if (!more && entry && c.capabilities.details.includes(item.type))
        detail = await c.extension!.details(entry, item);
      const service =
        item.type === "podcast"
          ? "get_podcast_episodes"
          : `get_${item.type}_tracks`;
      if (entry && c.native!.has("mass_queue", service))
        children = await c.extension!.children(entry, item, page);
      else if (!more && ["album", "artist"].includes(item.type))
        children = await c.native!.children(id, item);
      if (token !== this.detailToken || id !== c.active) return;
      this.detail = { ...detail, image: detail.image || item.image };
      this.detailItems = more ? [...this.detailItems, ...children] : children;
      this.detailPage = page;
      this.detailMore =
        !!entry &&
        ["album", "playlist"].includes(item.type) &&
        children.length > 0;
      this.requestUpdate();
    });
  }
  private messages() {
    const c = this.controller!;
    return html`${c.error ? html`<div class="message error" role="alert">${c.error} ${c.canRetry ? html`<button @click=${() => c.retry()}>${t("retry")}</button>` : nothing}</div>` : nothing}<span
        class="message"
        role="status"
        ?hidden=${!c.pending && !c.notice}
        >${c.pending ? "Working…" : c.notice}</span
      >`;
  }
  protected render() {
    const c = this.controller;
    const p = this.current;
    if (!c || !p)
      return html`<ha-card
        ><p class="empty">
          Choose a Music Assistant player in the card editor.
        </p></ha-card
      >`;
    return html`<ha-card class=${this.compact ? "compact" : ""}
        ><div class="header">
          <select
            aria-label="Selected room"
            .value=${c.active}
            ?disabled=${c.pending}
            @change=${(e: Event) => c.select((e.target as HTMLSelectElement).value)}
          >
            ${c.config.entities.map((entity) => {
              const room = playerState(this.hass, entity);
              return html`<option value=${room.id} ?disabled=${!room.available}>
                ${room.name}${!room.available ? " · Unavailable" : ""}
              </option>`;
            })}</select
          >${this.button("More player controls", "dots-horizontal", () => this.openDialog("player"))}
        </div>
        ${this.dialog ? nothing : this.messages()}
        <div class=${`body ${this.split ? "split" : ""}`}>
          ${this.inlinePanels && !this.split && c.section ? html`<section class="pane"><button class="back" @click=${() => c.setSection(undefined)}>Back to player</button>${this.section(c.section)}</section>` : this.player()}${this.split ? html`<section class="pane">${this.section(c.section ?? c.config.sections[0])}</section>` : nothing}
        </div>
        <nav class="nav" aria-label="Music navigation">
          ${c.config.sections.map((s) => html`<button aria-current=${this.inlinePanels && c.section === s ? "page" : nothing} @click=${() => this.navigate(s)}>${this.icon(s === "browse" ? "magnify" : s === "queue" ? "playlist-music-outline" : "home-sound-out-outline")} <span>${t(s)}</span></button>`)}
        </nav></ha-card
      >
      <dialog
        class="dialog"
        aria-labelledby="dialog-title"
        @close=${this.closeDialog}
      >
        <div class="dialog-head">
          <h2 id="dialog-title">${this.dialog ? t(this.dialog) : ""}</h2>
          ${this.button(t("close"), "close", () => this.shadowRoot?.querySelector("dialog")?.close(), false, "close")}
        </div>
        ${this.dialog ? this.messages() : nothing}
        <div class="pane">
          ${this.dialog === "player" ? this.player(true) : this.dialog === "details" ? this.details() : this.section(this.dialog)}
        </div>
      </dialog>`;
  }
  private player(full = false): TemplateResult {
    const c = this.controller!;
    const p = this.current!;
    const native = c.native;
    const off = !p.available || !native;
    const supportsFeature = (f: number) => supports(p.features, f);
    const entity = c.config.entities.find((e) => e.entity_id === p.id)!;
    const volumeEntity = this.hass?.states[entity.volume_entity || p.id];
    const call = (service: string, data = {}) =>
      this.run(() => native!.media(p.id, service, data));
    const artwork = html`<hamac-artwork
      .src=${p.image ?? ""}
      .accent=${c.config.artwork_accent}
      @artwork-accent=${(e: CustomEvent<string>) => this.style.setProperty("--music-accent", e.detail)}
    ></hamac-artwork>`;
    return html`<section class="player" aria-label="Now playing">
      <div class=${`hero ${c.config.artwork_size}`}>
        ${artwork}
        <div class="track">
          <strong class="truncate" title=${p.title}
            >${p.title || (p.available ? "Ready to play" : t("unavailable"))}</strong
          >
          <div class="truncate muted">${p.artist || p.name}</div>
          ${c.config.metadata ? html`<div class="truncate muted album">${p.album}</div>` : nothing}
        </div>
      </div>
      ${p.duration > 0 ? html`<div class="progress"><span>${formatTime(p.position)}</span><input type="range" aria-label="Playback position" min="0" max=${p.duration} .value=${String(Math.floor(p.position))} ?disabled=${off || !supportsFeature(Feature.seek) || c.pending} @change=${(e: Event) => call("media_seek", { seek_position: Number((e.target as HTMLInputElement).value) })} /><span>${formatTime(p.duration)}</span></div>` : nothing}
      <div class="transport">
        ${supportsFeature(Feature.shuffle) ? this.button(t("shuffle"), "shuffle", () => call("shuffle_set", { shuffle: !p.shuffle }), off, "secondary", p.shuffle) : nothing}${supportsFeature(Feature.previous) ? this.button(t("previous"), "skip-previous", () => call("media_previous_track"), off, "secondary") : nothing}${supportsFeature(p.state === "playing" ? Feature.pause : Feature.play) ? this.button(p.state === "playing" ? t("pause") : t("play"), p.state === "playing" ? "pause" : "play", () => call(p.state === "playing" ? "media_pause" : "media_play"), off, "primary") : nothing}${supportsFeature(Feature.next) ? this.button(t("next"), "skip-next", () => call("media_next_track"), off) : nothing}${supportsFeature(Feature.repeat) ? this.button(`${t("repeat")}: ${p.repeat}`, p.repeat === "one" ? "repeat-once" : "repeat", () => call("repeat_set", { repeat: p.repeat === "off" ? "all" : p.repeat === "all" ? "one" : "off" }), off, "secondary", p.repeat !== "off") : nothing}
      </div>
      ${supports(number(volumeEntity?.attributes.supported_features), Feature.volume) ? this.volume(entity) : nothing}
      <div class="extras">
        ${c.capabilities.favoriteEntity ? this.button(t("favorite"), "heart-outline", () => this.run(() => this.hass!.callService("button", "press", {}, { entity_id: c.capabilities.favoriteEntity! })), off) : nothing}${
          c.config.metadata
            ? html`<details class="metadata">
                <summary>Track details</summary>
                <p>
                  ${p.title || "No track selected"}<br />${p.artist}<br />${p.album}
                </p>
                <button
                  ?disabled=${off || !p.title}
                  @click=${() => this.openDialog("details", normalizeItem({ name: p.title, artist: p.artist, album: p.album, image: p.image, uri: this.hass?.states[p.id]?.attributes.media_content_id, media_type: "track" }))}
                >
                  Open details
                </button>
              </details>`
            : nothing
        }
      </div>
      ${full ? html`<div class="detail-actions">${c.config.sections.map((s) => html`<button @click=${() => this.openDialog(s)}>${t(s)}</button>`)}</div>` : nothing}
    </section>`;
  }
  private volume(entity: EntityConfig, group = false) {
    const c = this.controller!;
    const p = playerState(this.hass, entity);
    const target = entity.volume_entity || p.id;
    const attrs = this.hass?.states[target]?.attributes;
    const disabled =
      !p.available ||
      !this.hass?.states[target] ||
      ["unavailable", "unknown"].includes(this.hass.states[target]!.state) ||
      c.pending;
    return html`<div class="volume">
      ${supports(number(attrs?.supported_features), Feature.mute) && !group ? this.button(p.muted ? t("unmute") : t("mute"), p.muted ? "volume-off" : "volume-high", () => this.run(() => c.native!.media(target, "volume_mute", { is_volume_muted: !p.muted })), disabled) : nothing}<label
        ><span class="muted"
          >${group ? "Group volume" : p.name + " volume"}</span
        ><input
          type="range"
          aria-label=${group ? "Group volume" : p.name + " volume"}
          min="0"
          max=${entity.max_volume ?? 100}
          .value=${String(Math.round(p.volume * 100))}
          ?disabled=${disabled}
          @change=${(e: Event) => this.run(() => (group ? c.native!.groupVolume(p.id, Number((e.target as HTMLInputElement).value)) : c.native!.volume(p.id, Number((e.target as HTMLInputElement).value))))} /></label
      ><span class="muted">${Math.round(p.volume * 100)}%</span>
    </div>`;
  }
  private section(section?: Section) {
    if (section === "browse") return this.browse();
    if (section === "queue") return this.queue();
    if (section === "rooms") return this.rooms();
    return nothing;
  }
  private browse() {
    const c = this.controller!;
    return html`<div class="filters">
        <label class="search"
          ><span class="muted">${t("search")}</span
          ><input
            type="search"
            placeholder="Artists, albums, tracks…"
            aria-label=${t("search")}
            .value=${c.query.text}
            @input=${(e: Event) => c.search({ text: (e.target as HTMLInputElement).value })} /></label
        ><label
          ><span class="muted">Media type</span
          ><select
            aria-label="Media type"
            .value=${c.query.type}
            @change=${(e: Event) => c.search({ type: (e.target as HTMLSelectElement).value as typeof c.query.type })}
          >
            ${mediaTypes.map((type) => html`<option value=${type}>${type}</option>`)}
          </select></label
        ><label
          ><span class="muted">Collection</span
          ><select
            aria-label="Collection"
            .value=${c.query.source}
            @change=${(e: Event) => c.search({ source: (e.target as HTMLSelectElement).value as typeof c.query.source })}
          >
            <option value="all">All providers</option>
            <option value="library">Library</option>
            <option value="favorites">Favorites</option>
            <option value="recent">Recently played</option>
          </select></label
        >
      </div>
      ${!c.capabilities.library && !c.capabilities.search ? html`<p class="empty">Search and library services are unavailable.</p>` : nothing}${c.loading ? html`<p role="status">Loading…</p>` : nothing}${this.mediaList(c.items)}${!c.loading && !c.items.length ? html`<p class="empty">${t("empty")}</p>` : nothing}${c.hasMore ? html`<button ?disabled=${c.loading} @click=${() => c.browse(true)}>${t("more")}</button>` : nothing}`;
  }
  private mediaList(items: MediaItem[]) {
    return html`<ul class="list">
      ${items.map(
        (item) =>
          html`<li class="item">
            <button
              class="item-main"
              @click=${() => this.openDialog("details", item)}
            >
              <hamac-artwork .src=${item.image ?? ""}></hamac-artwork
              ><span class="track"
                ><strong class="truncate">${item.name}</strong
                ><span class="muted"
                  >${item.artist || item.type}${item.provider ? " · " + item.provider : ""}</span
                ></span
              >
            </button>
            <div class="actions">
              <button
                ?disabled=${this.controller?.pending || !this.current?.available || !item.uri}
                @click=${() => this.run(() => this.controller!.native!.play(this.controller!.active, item, "play"))}
              >
                Play
              </button>
            </div>
          </li>`,
      )}
    </ul>`;
  }
  private queue() {
    const c = this.controller!;
    const q = c.queue;
    return html`<div class="room-head">
        <h3>${t("queue")}</h3>
        ${this.button(t("refresh"), "refresh", () => c.refreshQueue(), !c.capabilities.queue)}
      </div>
      ${q?.kind === "partial" ? html`<p class="muted">Current and next. Full queue editing requires Music Assistant Queue Actions.</p>` : nothing}${!c.capabilities.queue ? html`<p class="empty">Queue service unavailable.</p>` : nothing}
      <ul class="list">
        ${q?.items.map(
          (item, i) =>
            html`<li class="item">
              <hamac-artwork .src=${item.image ?? ""}></hamac-artwork>
              <div class="track">
                <strong class="truncate">${item.name}</strong>
                <div class="muted">
                  ${q.kind === "partial" ? (i ? "Next" : "Current") : ""}
                  ${item.artist}
                </div>
              </div>
              <div class="actions">
                ${q.kind === "complete" ? c.capabilities.queueActions.map((action) => this.button({ play_queue_item: "Play queue item", move_queue_item_up: "Move up", move_queue_item_down: "Move down", move_queue_item_next: "Play next", remove_queue_item: "Remove" }[action] ?? action, { play_queue_item: "play", move_queue_item_up: "arrow-up", move_queue_item_down: "arrow-down", move_queue_item_next: "skip-next", remove_queue_item: "delete-outline" }[action] ?? "play", () => this.run(() => c.extension!.action(c.active, action, item)), !this.current?.available || !item.queueId)) : nothing}
              </div>
            </li>`,
        )}
      </ul>
      ${!q?.items.length ? html`<p class="empty">${t("empty")}</p>` : nothing}${q?.hasMore ? html`<button @click=${() => c.refreshQueue(true)}>${t("more")}</button>` : nothing}${
        q?.kind === "complete" &&
        supports(this.current!.features, Feature.clear)
          ? html`<details>
              <summary>Clear queue</summary>
              <p>This removes the current queue.</p>
              <button
                ?disabled=${c.pending || !this.current?.available}
                @click=${() => this.run(() => c.native!.media(c.active, "clear_playlist"))}
              >
                Confirm clear queue
              </button>
            </details>`
          : nothing
      }`;
  }
  private rooms() {
    const c = this.controller!;
    const active = this.current!;
    return html`${active.members.length > 1 ? this.volume(c.native?.entity(active.id) ?? { entity_id: active.id }, true) : nothing}${
      c.config.room_presets.length
        ? html`<h3>Room presets</h3>
            <div class="detail-actions">
              ${c.config.room_presets.map((preset) => html`<button ?disabled=${c.pending} @click=${() => this.run(() => c.native!.preset(preset.leader, preset.members))}>${preset.name}</button>`)}
            </div>`
        : nothing
    }${c.config.entities.map((entity) => {
      const room = playerState(this.hass, entity);
      const selected = room.id === c.active;
      const grouped = active.members.includes(room.id);
      return html`<section class="room">
        <div class="room-head">
          <strong>${room.name}</strong
          ><span class="muted"
            >${room.available ? room.state : t("unavailable")}${selected ? " · Selected" : ""}</span
          >
        </div>
        ${room.title ? html`<p class="muted truncate">${room.title}</p>` : nothing}${supports(number(this.hass?.states[entity.volume_entity || entity.entity_id]?.attributes.supported_features), Feature.volume) ? this.volume(entity) : nothing}
        <div class="room-actions">
          <button
            ?disabled=${!room.available || selected || c.pending}
            @click=${() => c.select(room.id)}
          >
            ${t("select")}</button
          >${!selected && supports(active.features, Feature.group) ? html`<button ?disabled=${!room.available || !active.available || grouped || c.pending} @click=${() => this.run(() => c.native!.join(c.active, [room.id]))}>${t("join")}</button>` : nothing}${room.members.length > 1 && supports(room.features, Feature.group) ? html`<button ?disabled=${!room.available || c.pending} @click=${() => this.run(() => c.native!.media(room.id, "unjoin"))}>${t("leave")}</button>` : nothing}${!selected && c.native?.has("music_assistant", "transfer_queue") ? html`<button ?disabled=${!room.available || !active.available || c.pending} @click=${() => this.run(() => c.native!.transfer(c.active, room.id))}>${t("transfer")}</button>` : nothing}
        </div>
      </section>`;
    })}`;
  }
  private details() {
    const c = this.controller!;
    const item = this.detail;
    if (!item) return nothing;
    const artists = Array.isArray(item.raw.artists) ? item.raw.artists : [];
    const album = record(item.raw.album);
    return html`<div class="hero">
        <hamac-artwork .src=${item.image ?? ""}></hamac-artwork>
        <div class="track">
          <h2>${item.name}</h2>
          <p class="muted">${item.artist}<br />${item.album}</p>
        </div>
      </div>
      <div class="detail-actions">
        ${(["play", "next", "add", "replace", "radio"] as const).map((mode) => html`<button ?disabled=${c.pending || !this.current?.available || !item.uri} @click=${() => this.run(() => c.native!.play(c.active, item, mode))}>${{ play: "Play now", next: "Play next", add: "Add to queue", replace: "Replace queue", radio: "Start radio" }[mode]}</button>`)}
      </div>
      ${
        c.config.metadata
          ? html`<p class="muted">
                ${item.provider || text(item.raw.uri).split("://")[0]}
                ${item.quality ? " · " + item.quality : ""}
              </p>
              ${item.description ? html`<p class="metadata">${item.description}</p>` : nothing}
              <div class="detail-actions">
                ${artists.map((a) => html`<button @click=${() => this.openDialog("details", normalizeItem(a))}>${text(record(a).name)}</button>`)}${album.uri ? html`<button @click=${() => this.openDialog("details", normalizeItem(album))}>${text(album.name)}</button>` : nothing}
              </div>`
          : nothing
      }${this.mediaList(this.detailItems)}${this.detailMore ? html`<button @click=${() => this.loadDetail(item, true)}>${t("more")}</button>` : nothing}`;
  }
}
