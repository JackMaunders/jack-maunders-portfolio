export type Project = {
  /** Display name (not a repo slug). */
  title: string;
  /** One-line description. */
  blurb: string;
  /** Language/framework/tech tags. */
  tags: string[];
  /**
   * Screenshot path under /public. Pass a string for a single image, or a
   * `{ light, dark }` pair keyed by the active theme to show a different image
   * per mode.
   */
  screenshot?: string | { light: string; dark: string };
  /** GitHub repo URL. */
  repoUrl?: string;
  /** Live demo URL. */
  liveUrl?: string;
};

// Placeholder projects
export const projects: Project[] = [
  {
    title: "Relay",
    blurb:
      "A Node/TypeScript webhook relay server that receives, stores, and replays webhooks. Built for local development, point your webhook sources at relay once, then replay captured events as many times as you need.",
    tags: ["TypeScript", "Node.js", "SQLite", "Drizzle", "Webhooks"],
    screenshot: {
      light: "/relay-dark.webp",
      dark: "/relay-light.webp",
    },
    repoUrl: "https://github.com/JackMaunders/relay",
  },
  {
    title: "Terminal Dashboard",
    blurb:
      "A terminal-based dashboard built with Go and Bubble Tea, displaying real-time system information, weather data, time/date and a random Pokemon ASCII art on every run.",
    tags: ["Go", "Bubble Tea", "Lipgloss", "API's"],
    screenshot: "/terminal-dashboard.webp",
    repoUrl: "https://github.com/JackMaunders/terminal-dashboard",
  },
  {
    title: "This Portfolio",
    blurb:
      "The site you're looking at now. A statically-generated Next.js portfolio with light and dark themes, GSAP-driven reveal animations, and an accessibility-tested, fully responsive layout.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "GSAP"],
    screenshot: {
      light: "/portfolio-dark.webp",
      dark: "/portfolio-light.webp",
    },
    repoUrl: "https://github.com/JackMaunders/jack-maunders-portfolio",
  },
];
