import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // "list" for readable terminal output + "html" so CI can upload a report.
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3001",
    colorScheme: "light",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Test against the real production static export (not the dev server):
  // build it, then serve `out/` on a dedicated port so it never clashes
  // with a `npm run dev` running on 3000.
  webServer: {
    command: "npm run build && npx serve out -l 3001",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
