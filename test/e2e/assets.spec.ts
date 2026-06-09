import { test, expect } from "@playwright/test";

test("every referenced image resolves (no broken assets)", async ({ page }) => {
  await page.goto("/");

  // Collect unique <img> sources, including theme-swapped ones that are
  // hidden in the current theme (so a renamed/missing file still gets caught).
  const srcs = await page.locator("img").evaluateAll((imgs) => [
    ...new Set(
      imgs
        .map((img) => (img as HTMLImageElement).getAttribute("src"))
        .filter((src): src is string => Boolean(src)),
    ),
  ]);

  expect(srcs.length).toBeGreaterThan(0);

  for (const src of srcs) {
    const res = await page.request.get(src);
    expect(res.status(), `image should load: ${src}`).toBe(200);
  }
});
