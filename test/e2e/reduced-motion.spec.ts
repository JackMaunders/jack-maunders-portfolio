import { test, expect } from "@playwright/test";

test.use({ contextOptions: { reducedMotion: "reduce" } });

test("hero content is fully visible (not stuck mid-animation) with reduced motion", async ({
  page,
}) => {
  await page.goto("/");

  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toBeVisible();
  await expect(heading).toContainText("Maunders");

  // The CTAs are GSAP-animated from opacity 0; with reduced motion they must
  // remain at their final, fully-visible state.
  const viewWork = page.getByRole("link", { name: "View Work" });
  await expect(viewWork).toBeVisible();
  await expect(viewWork).toHaveCSS("opacity", "1");
});
