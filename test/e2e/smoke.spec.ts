import { test, expect } from "@playwright/test";

test("home page renders the key sections without console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jack");
  await expect(page.locator("#about")).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();

  expect(errors).toEqual([]);
});
