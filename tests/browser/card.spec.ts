import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(() => Reflect.get(window, "ready"));
});
test("playback and independent cards", async ({ page }) => {
  await page.evaluate(() =>
    Reflect.get(window, "createCard")({}, "second-slot"),
  );
  const cards = page.locator("ha-music-assistant-card");
  await cards
    .first()
    .getByRole("button", { name: "Pause", exact: true })
    .click();
  await expect(
    cards.first().getByRole("button", { name: "Play", exact: true }),
  ).toBeVisible();
  await cards
    .first()
    .getByLabel("Selected room")
    .selectOption("media_player.kitchen");
  await expect(cards.nth(1).getByLabel("Selected room")).toHaveValue(
    "media_player.living",
  );
});
test("search then enqueue retains target and modal size", async ({ page }) => {
  const card = page.locator("ha-music-assistant-card");
  const before = await card.boundingBox();
  await card.getByRole("button", { name: "Browse", exact: true }).click();
  await card.getByLabel("Search music").fill("ambient");
  await expect(card.getByText("Search result", { exact: true })).toBeVisible();
  await card.getByRole("button", { name: /Search result/ }).click();
  await card.getByRole("button", { name: "Play next", exact: true }).click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        Reflect.get(window, "calls").findLast(
          (c: { service: string }) => c.service === "play_media",
        ),
      ),
    )
    .toMatchObject({
      target: { entity_id: "media_player.living" },
      data: { enqueue: "next" },
    });
  expect((await card.boundingBox())?.height).toBe(before?.height);
});
test("room grouping and transfer have separate actions", async ({ page }) => {
  const card = page.locator("ha-music-assistant-card");
  await card.getByRole("button", { name: "Rooms", exact: true }).click();
  const room = card
    .locator(".room")
    .filter({ has: page.getByText("Kitchen", { exact: true }) });
  await room.getByRole("button", { name: "Join playback" }).click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        Reflect.get(window, "calls").some(
          (c: { service: string }) => c.service === "join",
        ),
      ),
    )
    .toBe(true);
  await room.getByRole("button", { name: "Move playback here" }).click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        Reflect.get(window, "calls").findLast(
          (c: { service: string }) => c.service === "transfer_queue",
        ),
      ),
    )
    .toMatchObject({
      target: { entity_id: "media_player.kitchen" },
      data: { source_player: "media_player.living" },
    });
});
test("native queue is partial; extension edits use IDs", async ({ page }) => {
  await page.getByRole("button", { name: "Queue", exact: true }).click();
  await expect(page.getByText(/Current and next/)).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Move up", exact: true }),
  ).toHaveCount(0);
  await page.goto("/?extension");
  await page.getByRole("button", { name: "Queue", exact: true }).click();
  await page
    .getByRole("button", { name: "Move up", exact: true })
    .nth(1)
    .click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        Reflect.get(window, "calls").findLast(
          (c: { service: string }) => c.service === "move_queue_item_up",
        ),
      ),
    )
    .toMatchObject({
      data: { entity: "media_player.living", queue_item_id: "q2" },
    });
});
test("errors are visible, unavailable rooms remain and keyboard focus returns", async ({
  page,
}) => {
  const browse = page.getByRole("button", { name: "Browse", exact: true });
  await browse.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(browse).toBeFocused();
  await page.evaluate(() => {
    Reflect.set(window, "fail", true);
  });
  await page.getByRole("button", { name: "Pause", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("Speaker rejected");
  await page.evaluate(() => {
    const h = Reflect.get(window, "hass");
    h.states["media_player.kitchen"].state = "unavailable";
    Reflect.get(window, "refresh")();
  });
  await expect(
    page.getByRole("option", { name: /Kitchen · Unavailable/ }),
  ).toBeDisabled();
});
test("visual editor preserves unknown configuration keys", async ({ page }) => {
  await page.evaluate(() => {
    const editor = document.createElement("ha-music-assistant-card-editor");
    Reflect.set(editor, "hass", Reflect.get(window, "hass"));
    Reflect.get(editor, "setConfig").call(editor, {
      type: "custom:ha-music-assistant-card",
      entities: ["media_player.living"],
      future_option: { enabled: true },
    });
    editor.addEventListener("config-changed", (e) =>
      Reflect.set(window, "edited", Reflect.get(e, "detail").config),
    );
    document.getElementById("editor")!.append(editor);
  });
  await page.getByLabel("Layout", { exact: true }).selectOption("compact");
  await expect
    .poll(() => page.evaluate(() => Reflect.get(window, "edited")))
    .toMatchObject({ layout: "compact", future_option: { enabled: true } });
});
test("editor adds multiple players or every player in an area and saves the volume slider", async ({
  page,
}) => {
  await page.evaluate(() => {
    const hass = Reflect.get(window, "hass");
    const originalCallWS = hass.callWS.bind(hass);
    hass.callWS = async (message: { type?: string }) => {
      if (message.type === "config/entity_registry/list")
        return [
          { entity_id: "media_player.kitchen", device_id: "kitchen-device" },
          { entity_id: "media_player.bedroom", area_id: "kitchen" },
        ];
      if (message.type === "config/device_registry/list")
        return [{ id: "kitchen-device", area_id: "kitchen" }];
      return originalCallWS(message);
    };
    const editor = document.createElement("ha-music-assistant-card-editor");
    Reflect.set(editor, "hass", hass);
    Reflect.get(editor, "setConfig").call(editor, {
      type: "custom:ha-music-assistant-card",
      entities: ["media_player.living"],
    });
    editor.addEventListener("config-changed", (event) =>
      Reflect.set(window, "edited", Reflect.get(event, "detail").config),
    );
    document.getElementById("editor")!.append(editor);
  });
  const editor = page.locator("ha-music-assistant-card-editor");
  await editor
    .locator("ha-selector")
    .nth(1)
    .evaluate((element) =>
      element.dispatchEvent(
        new CustomEvent("value-changed", {
          detail: { value: ["media_player.kitchen", "media_player.bedroom"] },
        }),
      ),
    );
  await editor.getByRole("button", { name: "Add players" }).click();
  await expect
    .poll(() => page.evaluate(() => Reflect.get(window, "edited")?.entities))
    .toHaveLength(3);
  await editor.getByRole("button", { name: "Remove room" }).nth(1).click();
  await editor.getByRole("button", { name: "Remove room" }).nth(1).click();
  await editor
    .locator("ha-selector")
    .first()
    .evaluate((element) =>
      element.dispatchEvent(
        new CustomEvent("value-changed", { detail: { value: "kitchen" } }),
      ),
    );
  await editor.getByRole("button", { name: "Add players" }).click();
  await expect
    .poll(() => page.evaluate(() => Reflect.get(window, "edited")?.entities))
    .toHaveLength(3);
  await editor
    .getByRole("slider", { name: "Maximum volume for media_player.living" })
    .evaluate((element) => {
      const slider = element as HTMLInputElement;
      slider.value = "65";
      slider.dispatchEvent(new Event("input", { bubbles: true }));
      slider.dispatchEvent(new Event("change", { bubbles: true }));
    });
  await expect
    .poll(() =>
      page.evaluate(
        () => Reflect.get(window, "edited")?.entities[0]?.max_volume,
      ),
    )
    .toBe(65);
});
for (const width of [180, 276, 372, 768])
  for (const layout of ["compact", "standard", "expanded"])
    test(`grid ${width}px ${layout} has no horizontal overflow`, async ({
      page,
    }) => {
      await page.evaluate(
        ({ width, layout }) => {
          const slot = document.getElementById("slot")!;
          slot.style.width = width + "px";
          slot.style.height =
            layout === "compact"
              ? "120px"
              : layout === "expanded"
                ? "504px"
                : "376px";
          Reflect.get(window, "createCard")({ layout });
        },
        { width, layout },
      );
      const card = page.locator("ha-music-assistant-card");
      await expect(
        card.getByRole("button", { name: "Pause", exact: true }),
      ).toBeVisible();
      const overflow = await card.evaluate((el) => {
        const root = el.shadowRoot!;
        return [...root.querySelectorAll("ha-card,.body,.player,.nav")].some(
          (e) => e.scrollWidth > e.clientWidth + 1,
        );
      });
      expect(overflow).toBe(false);
    });
test("accessible standard card and mobile dialog", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Rooms", exact: true }).click();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
  const dialog = await page.getByRole("dialog").boundingBox();
  expect(dialog!.width).toBeLessThanOrEqual(390);
});
test("screenshot gallery", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium");
  await page.evaluate(() => {
    Reflect.get(window, "createCard")({ layout: "compact" }, "second-slot");
    document.getElementById("second-slot")!.style.height = "120px";
  });
  await page.screenshot({
    path: "docs/cards-light.png",
    animations: "disabled",
  });
  await page
    .locator("ha-music-assistant-card")
    .first()
    .screenshot({ path: "docs/player-light.png", animations: "disabled" });
  await page.evaluate(() => document.body.classList.add("dark"));
  await page.screenshot({
    path: "docs/cards-dark.png",
    animations: "disabled",
  });
  await page
    .locator("ha-music-assistant-card")
    .first()
    .screenshot({ path: "docs/player-dark.png", animations: "disabled" });
  await page.evaluate(() => document.body.classList.remove("dark"));
  await page
    .getByRole("button", { name: "Browse", exact: true })
    .first()
    .click();
  await expect(
    page.locator("ha-music-assistant-card").first().locator(".queue-shortcut"),
  ).toBeVisible();
  await page.screenshot({
    path: "docs/browse-light.png",
    animations: "disabled",
  });
  await page
    .locator("ha-music-assistant-card")
    .first()
    .locator(".queue-shortcut")
    .click();
  await expect(page.getByRole("heading", { name: "Queue" })).toBeVisible();
  await page.screenshot({
    path: "docs/queue-light.png",
    animations: "disabled",
  });
  await page
    .locator("ha-music-assistant-card")
    .first()
    .getByRole("button", { name: "Close" })
    .click();
  await page.evaluate(() => {
    document.getElementById("second-slot")!.style.height = "376px";
    Reflect.get(window, "createCard")(
      { entities: ["media_player.living"], sections: [] },
      "second-slot",
    );
  });
  await page.locator("#second-slot ha-music-assistant-card").screenshot({
    path: "docs/player-single-room.png",
    animations: "disabled",
  });
  await page.evaluate(() => {
    Reflect.get(window, "createCard")(
      { layout: "standard", advanced_search: true },
      "second-slot",
    );
  });
  await page
    .locator("#second-slot ha-music-assistant-card")
    .getByRole("button", { name: "Browse", exact: true })
    .click();
  await page
    .locator("#second-slot ha-music-assistant-card")
    .locator(".advanced-search summary")
    .click();
  await page.screenshot({
    path: "docs/search-advanced.png",
    animations: "disabled",
  });
});

test("standard core controls fit without scrolling and favorites stay available", async ({
  page,
}) => {
  const card = page.locator("ha-music-assistant-card");
  await expect(
    card.getByRole("slider", { name: "Living room volume" }),
  ).toBeVisible();
  const contained = await card.evaluate((el) => {
    const root = el.shadowRoot!;
    const body = root.querySelector(".body")!.getBoundingClientRect();
    const volume = root.querySelector(".body .volume")!.getBoundingClientRect();
    return volume.bottom <= body.bottom + 1;
  });
  expect(contained).toBe(true);
  await card.getByRole("button", { name: "More player controls" }).click();
  await expect(
    card.getByRole("button", { name: "Favorite current track" }),
  ).toBeVisible();
});

test("expanded tabs work at phone width and split panes load automatically", async ({
  page,
}) => {
  await page.evaluate(() =>
    Reflect.get(window, "createCard")({ layout: "expanded" }),
  );
  await page.getByRole("button", { name: "Browse", exact: true }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.getByLabel("Search music")).toBeVisible();
  await page.getByRole("button", { name: "Back to player" }).click();
  await expect(
    page.getByRole("button", { name: "Pause", exact: true }),
  ).toBeVisible();
  await page.evaluate(() => {
    document.getElementById("slot")!.style.width = "800px";
  });
  await expect(page.getByLabel("Search music")).toBeVisible();
  await expect(page.getByText("A Walk", { exact: true })).toBeVisible();
});

test("long metadata and broken art stay safe at zoom and tablet sizes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.evaluate(() => {
    const h = Reflect.get(window, "hass");
    h.states["media_player.living"].attributes.media_title =
      "<img src=x onerror=alert(1)>".repeat(20);
    h.states["media_player.living"].attributes.entity_picture = "/missing-art";
    Reflect.get(window, "refresh")();
    document.body.style.fontSize = "200%";
  });
  await expect(
    page.locator("hamac-artwork").first().locator(".placeholder"),
  ).toBeVisible();
  expect(
    await page
      .locator("ha-music-assistant-card")
      .evaluate((e) => e.scrollWidth <= e.clientWidth + 1),
  ).toBe(true);
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.getByRole("button", { name: "Rooms", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
