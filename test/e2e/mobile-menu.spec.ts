import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 375, height: 812 } });

test("opens and closes via button and Escape, locking background scroll", async ({
  page,
}) => {
  await page.goto("/");
  const menu = page.locator("#mobile-menu");
  const body = page.locator("body");

  // Closed: inert (out of focus order), background scrollable.
  await expect(menu).toHaveAttribute("inert", "");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(menu).not.toHaveAttribute("inert");
  await expect(body).toHaveCSS("position", "fixed");

  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("inert", "");
  await expect(body).toHaveCSS("position", "static");
});

test("a menu link closes the menu and navigates to its section", async ({
  page,
}) => {
  await page.goto("/");
  const menu = page.locator("#mobile-menu");

  await page.getByRole("button", { name: "Open menu" }).click();
  await menu.getByRole("link", { name: "Work" }).click();

  await expect(page).toHaveURL(/#work$/);
  await expect(menu).toHaveAttribute("inert", "");
  await expect(page.locator("#work")).toBeInViewport();
});
