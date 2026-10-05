import { afterEach, describe, it, expect, vi } from "vitest";
import { CardController } from "../src/controller";
import { buildConfig } from "../src/config";
import { fixture } from "./fixtures";
const flush = async () => {
  for (let i = 0; i < 12; i++) await Promise.resolve();
};
afterEach(() => vi.useRealTimers());
function setup() {
  const { hass, calls } = fixture();
  const c = new CardController(
    buildConfig({
      type: "x",
      entities: ["media_player.living", "media_player.kitchen"],
    }),
    () => {},
  );
  c.updateHass(hass);
  c.connect();
  c.setVisible(true);
  return { c, hass, calls };
}
describe("request lifecycle", () => {
  it("polls only a visible queue and cleans up on disconnect", async () => {
    vi.useFakeTimers();
    const { c, calls } = setup();
    await flush();
    c.setSection("queue");
    await flush();
    const count = () => calls.filter((x) => x.service === "get_queue").length;
    const start = count();
    await vi.advanceTimersByTimeAsync(15000);
    expect(count()).toBe(start + 1);
    c.setVisible(false);
    await vi.advanceTimersByTimeAsync(60000);
    expect(count()).toBe(start + 1);
    c.disconnect();
    expect(vi.getTimerCount()).toBe(0);
  });
  it("debounces and rejects results from an old query", async () => {
    vi.useFakeTimers();
    const { c } = setup();
    await flush();
    let resolve!: (value: { items: never[]; hasMore: boolean }) => void;
    c.native!.browse = vi.fn(
      () =>
        new Promise((r) => {
          resolve = r;
        }),
    );
    c.setSection("browse");
    await flush();
    c.search({ text: "new" });
    resolve({ items: [], hasMore: true });
    await flush();
    expect(c.hasMore).toBe(false);
    await vi.advanceTimersByTimeAsync(300);
    expect(c.native!.browse).toHaveBeenCalledTimes(2);
    c.disconnect();
  });
  it("keeps card selections independent and resets stale room results", async () => {
    const a = setup(),
      b = setup();
    await flush();
    a.c.select("media_player.kitchen");
    expect(b.c.active).toBe("media_player.living");
    expect(a.c.queue).toBeUndefined();
    a.c.disconnect();
    b.c.disconnect();
  });
  it("reports command failures and unlocks pending state", async () => {
    const { c } = setup();
    await flush();
    await c.run(async () => {
      throw new Error("Speaker rejected grouping");
    });
    expect(c.error).toContain("rejected");
    expect(c.pending).toBe(false);
    expect(c.canRetry).toBe(false);
    c.disconnect();
  });
});

describe("extension event lifecycle", () => {
  it("cleans up a subscription that resolves after the card is removed", async () => {
    const { c, hass } = setup();
    hass.services.mass_queue = { get_queue_items: {} };
    let resolve!: (u: () => void) => void;
    const unsubscribe = vi.fn();
    hass.connection!.subscribeEvents = vi.fn(
      () => new Promise((r) => (resolve = r)),
    );
    await c.discover();
    c.setSection("queue");
    await flush();
    c.disconnect();
    resolve(unsubscribe);
    await flush();
    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });
  it("uses polling when event permissions are denied", async () => {
    vi.useFakeTimers();
    const { c, hass, calls } = setup();
    hass.services.mass_queue = { get_queue_items: {} };
    hass.connection!.subscribeEvents = vi
      .fn()
      .mockRejectedValue(new Error("Unauthorized"));
    await c.discover();
    c.setSection("queue");
    await flush();
    const count = calls.filter((x) => x.service === "get_queue_items").length;
    await vi.advanceTimersByTimeAsync(15000);
    expect(calls.filter((x) => x.service === "get_queue_items")).toHaveLength(
      count + 1,
    );
    expect(c.error).toBe("");
    c.disconnect();
  });
});
