import type {
  BrowseQuery,
  Capabilities,
  Config,
  Hass,
  MediaItem,
  QueueSnapshot,
  Section,
} from "./types";
import { NativeAdapter, errorMessage } from "./adapters/native";
import { ExtensionAdapter, queueServices } from "./adapters/extension";
import { playerState, record, text } from "./model";
const emptyCapabilities = (): Capabilities => ({
  search: false,
  library: false,
  queue: false,
  queueActions: [],
  details: [],
});
export class CardController {
  native?: NativeAdapter;
  extension?: ExtensionAdapter;
  active: string;
  section?: Section;
  queue?: QueueSnapshot;
  items: MediaItem[] = [];
  hasMore = false;
  capabilities = emptyCapabilities();
  error = "";
  notice = "";
  pending = false;
  loading = false;
  query: BrowseQuery = {
    text: "",
    type: "track",
    source: "all",
    offset: 0,
  };
  private generation = 0;
  private searchGeneration = 0;
  private queueGeneration = 0;
  private queueBusy = false;
  private debounce?: ReturnType<typeof setTimeout>;
  private interval?: ReturnType<typeof setInterval>;
  private visible = false;
  private connected = false;
  private cache = new Map<
    string,
    { time: number; items: MediaItem[]; hasMore: boolean }
  >();
  private retryRead?: () => Promise<void>;
  private unsubscribe?: () => void;
  private subscriptionToken = 0;
  private subscriptionPending = false;
  private subscriptionFailed = false;
  constructor(
    public config: Config,
    private changed: () => void,
  ) {
    this.active = config.default_player || config.entities[0].entity_id;
  }
  get hass() {
    return this.native?.hass;
  }
  updateHass(hass: Hass) {
    const old = this.hass;
    const before = old?.states[this.active];
    const reconnect =
      old?.connection?.connected === false &&
      hass.connection?.connected !== false;
    if (!this.native) {
      this.native = new NativeAdapter(hass, this.config);
      this.extension = new ExtensionAdapter(this.native);
      if (this.connected) void this.discover();
    } else this.native.hass = hass;
    if (reconnect || (old && old.services !== hass.services)) {
      void this.discover();
      this.cache.clear();
    }
    const after = hass.states[this.active];
    if (
      (before?.state !== after?.state ||
        before?.attributes.media_content_id !==
          after?.attributes.media_content_id ||
        before?.attributes.active_queue !== after?.attributes.active_queue) &&
      this.visible &&
      this.section === "queue" &&
      this.capabilities.queue
    )
      void this.refreshQueue();
    this.changed();
  }
  connect() {
    this.connected = true;
    if (this.native) void this.discover();
  }
  disconnect() {
    this.connected = false;
    this.visible = false;
    this.generation++;
    this.searchGeneration++;
    this.queueGeneration++;
    clearTimeout(this.debounce);
    clearInterval(this.interval);
    this.interval = undefined;
    this.stopSubscription();
  }
  async discover() {
    const token = ++this.generation;
    const native = this.native;
    if (!native) return;
    this.stopSubscription();
    this.subscriptionFailed = false;
    const capabilities = emptyCapabilities();
    capabilities.search = native.has("music_assistant", "search");
    capabilities.library = native.has("music_assistant", "get_library");
    capabilities.queue = native.has("music_assistant", "get_queue");
    try {
      capabilities.extensionEntry = await this.extension?.entry(this.active);
    } catch {
      /* Optional extension must not block native features. */
    }
    if (capabilities.extensionEntry) {
      capabilities.queue = true;
      capabilities.queueActions = queueServices.filter((s) =>
        native.has("mass_queue", s),
      );
      capabilities.details = ["album", "artist", "playlist", "podcast"].filter(
        (t) => native.has("mass_queue", `get_${t}`),
      );
    }
    try {
      capabilities.favoriteEntity = await native.favoriteEntity(this.active);
    } catch {
      capabilities.favoriteEntity = native.entity(this.active).favorite_entity;
    }
    if (token !== this.generation || !this.connected) return;
    this.capabilities = capabilities;
    this.changed();
    this.updatePolling();
    if (this.visible && this.section === "queue") void this.refreshQueue();
    if (this.visible && this.section === "browse") void this.browse();
  }
  select(id: string) {
    if (
      !this.config.entities.some((e) => e.entity_id === id) ||
      id === this.active ||
      this.pending
    )
      return;
    this.active = id;
    this.generation++;
    this.searchGeneration++;
    this.queueGeneration++;
    this.queueBusy = false;
    this.queue = undefined;
    this.items = [];
    this.error = "";
    this.notice = "";
    this.loading = false;
    this.query = { ...this.query, offset: 0 };
    this.capabilities = emptyCapabilities();
    clearTimeout(this.debounce);
    void this.discover();
    this.changed();
  }
  setVisible(visible: boolean) {
    const was = this.visible;
    this.visible = visible && this.connected;
    this.updatePolling();
    if (this.visible && !was) {
      if (this.section === "queue") void this.refreshQueue();
      if (this.section === "browse") void this.browse();
    }
  }
  setSection(section?: Section) {
    this.section = section;
    this.updatePolling();
    if (this.visible && section === "queue") void this.refreshQueue();
    if (this.visible && section === "browse") void this.browse();
    this.changed();
  }
  private updatePolling() {
    clearInterval(this.interval);
    this.interval = undefined;
    if (
      this.connected &&
      this.visible &&
      this.section === "queue" &&
      this.capabilities.queue
    )
      this.interval = setInterval(() => void this.refreshQueue(), 15000);
    if (this.interval && this.capabilities.extensionEntry)
      void this.subscribe();
    else this.stopSubscription();
  }
  private stopSubscription() {
    this.subscriptionToken++;
    this.unsubscribe?.();
    this.unsubscribe = undefined;
    this.subscriptionPending = false;
  }
  private async subscribe() {
    const connection = this.hass?.connection;
    if (
      !connection?.subscribeEvents ||
      this.unsubscribe ||
      this.subscriptionPending ||
      this.subscriptionFailed
    )
      return;
    const token = ++this.subscriptionToken;
    this.subscriptionPending = true;
    try {
      const unsubscribe = await connection.subscribeEvents((event) => {
        const data = record(event.data);
        const activeQueue = text(
          this.hass?.states[this.active]?.attributes.active_queue,
        );
        if (
          this.visible &&
          this.section === "queue" &&
          data.type === "queue_updated" &&
          activeQueue &&
          record(data.data).queue_id === activeQueue
        )
          void this.refreshQueue();
      }, "mass_queue");
      if (token !== this.subscriptionToken || !this.visible || !this.connected)
        unsubscribe();
      else this.unsubscribe = unsubscribe;
    } catch {
      if (token === this.subscriptionToken) this.subscriptionFailed = true;
    } finally {
      if (token === this.subscriptionToken) this.subscriptionPending = false;
    }
  }
  search(query: Partial<BrowseQuery>) {
    this.query = { ...this.query, ...query, offset: 0 };
    this.searchGeneration++;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => void this.browse(), 300);
    this.changed();
  }
  async browse(more = false) {
    const native = this.native;
    if (
      !native ||
      !this.visible ||
      !(this.query.text.trim() && ["all", "library"].includes(this.query.source)
        ? this.capabilities.search
        : this.capabilities.library)
    )
      return;
    const token = ++this.searchGeneration;
    const generation = this.generation;
    const id = this.active;
    const query = { ...this.query, offset: more ? this.query.offset + 25 : 0 };
    const key = JSON.stringify([id, query]);
    this.loading = true;
    this.error = "";
    this.changed();
    try {
      const cached = this.cache.get(key);
      const result =
        cached && Date.now() - cached.time < 60000
          ? cached
          : await native.browse(id, query);
      if (
        token !== this.searchGeneration ||
        generation !== this.generation ||
        !this.connected
      )
        return;
      this.items = more ? [...this.items, ...result.items] : result.items;
      this.hasMore = result.hasMore;
      this.query = query;
      this.cache.set(key, { ...result, time: Date.now() });
      if (this.cache.size > 30)
        this.cache.delete(this.cache.keys().next().value!);
    } catch (e) {
      if (token === this.searchGeneration && generation === this.generation) {
        this.error = errorMessage(e);
        this.retryRead = () => this.browse(more);
      }
    } finally {
      if (token === this.searchGeneration) {
        this.loading = false;
        this.changed();
      }
    }
  }
  async refreshQueue(more = false) {
    if (
      !this.native ||
      !this.visible ||
      !this.capabilities.queue ||
      this.queueBusy ||
      !playerState(this.hass, this.native.entity(this.active)).available
    )
      return;
    const token = ++this.queueGeneration;
    const generation = this.generation;
    const id = this.active;
    const extension = this.capabilities.extensionEntry;
    const offset = more && this.queue ? this.queue.offset + 50 : 0;
    this.queueBusy = true;
    try {
      const result = extension
        ? await this.extension!.queue(id, offset)
        : await this.native.queue(id);
      if (
        token !== this.queueGeneration ||
        generation !== this.generation ||
        !this.connected
      )
        return;
      this.queue =
        more && this.queue
          ? { ...result, items: [...this.queue.items, ...result.items] }
          : result;
    } catch (e) {
      if (token === this.queueGeneration && generation === this.generation) {
        this.error = errorMessage(e);
        this.retryRead = () => this.refreshQueue(more);
      }
    } finally {
      if (token === this.queueGeneration) {
        this.queueBusy = false;
        this.changed();
      }
    }
  }
  async run(action: () => Promise<unknown>, showSuccessNotice = true) {
    if (this.pending || !this.native) return;
    this.pending = true;
    this.error = "";
    this.notice = "";
    this.retryRead = undefined;
    this.changed();
    try {
      await action();
      if (showSuccessNotice) this.notice = "Done";
      this.cache.clear();
    } catch (e) {
      this.error = errorMessage(e);
    } finally {
      this.pending = false;
      if (this.section === "queue") await this.refreshQueue();
      this.changed();
    }
  }
  retry() {
    this.error = "";
    void this.retryRead?.();
    this.changed();
  }
  get canRetry() {
    return !!this.retryRead;
  }
}
