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

test("scroll-reveal sections are fully visible (not stuck at opacity 0) with reduced motion", async ({
  page,
}) => {
  await page.goto("/");

  // Scroll each reveal-driven section into view, then assert its content is at
  // its final visible state — the Reveal wrapper must add no entrance tween.
  for (const id of ["about", "work", "contact"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    const heading = page.locator(`#${id}`).getByRole("heading", { level: 2 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveCSS("opacity", "1");
  }

  // A staggered Work card must also land fully visible.
  const card = page.locator("#work article").first();
  await expect(card).toBeVisible();
  await expect(card).toHaveCSS("opacity", "1");
});
