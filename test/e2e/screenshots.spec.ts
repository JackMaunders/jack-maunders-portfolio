import { test, expect } from "@playwright/test";

test("project screenshot shows the opposite theme's image and swaps on toggle", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator("#work").scrollIntoViewIfNeeded();

  const darkShot = page.locator('img[src="/portfolio-dark.webp"]');
  const lightShot = page.locator('img[src="/portfolio-light.webp"]');

  await expect(darkShot).toBeVisible();
  await expect(lightShot).toBeHidden();

  await page.getByRole("button", { name: /theme|mode/i }).click();

  await expect(lightShot).toBeVisible();
  await expect(darkShot).toBeHidden();
});
