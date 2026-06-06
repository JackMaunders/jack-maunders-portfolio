import { test, expect } from "@playwright/test";

test("theme toggle switches to dark and persists across reload", async ({
  page,
}) => {
  await page.goto("/");
  const html = page.locator("html");

  // Defaults to light (config sets colorScheme: light).
  await expect(html).not.toHaveClass(/dark/);

  await page.getByRole("button", { name: /theme|mode/i }).click();
  await expect(html).toHaveClass(/dark/);

  await page.reload();
  await expect(html).toHaveClass(/dark/);
});
