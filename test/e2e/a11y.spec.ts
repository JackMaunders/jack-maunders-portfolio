import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("no automatically-detectable a11y violations (light)", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("no automatically-detectable a11y violations (dark)", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /theme|mode/i }).click();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
