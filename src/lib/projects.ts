export type Project = {
  /** Display name (not a repo slug). */
  title: string;
  /** One-line description. */
  blurb: string;
  /** Language/framework/tech tags. */
  tags: string[];
  /** Screenshot path under /public. */
  screenshot?: string;
  /** GitHub repo URL. */
  repoUrl?: string;
  /** Live demo URL. */
  liveUrl?: string;
};

// Placeholder projects
export const projects: Project[] = [
  {
    title: "Project One",
    blurb: "Short, punchy description of what it does and why it mattered.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    repoUrl: "https://github.com/your-handle/project-one",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Two",
    blurb: "Another curated highlight — focus on impact, not the tech stack.",
    tags: ["Node.js", "Redis", "Docker"],
    repoUrl: "https://github.com/your-handle/project-two",
  },
  {
    title: "Project Three",
    blurb: "A third piece of work that rounds out the picture of what you do.",
    tags: ["React", "GSAP", "Tailwind"],
    repoUrl: "https://github.com/your-handle/project-three",
    liveUrl: "https://example.com",
  },
];
