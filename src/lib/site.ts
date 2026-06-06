// Central place for site-wide copy and contact details.
export const site = {
  name: "Jack Maunders",
  role: "Software Engineer",
  tagline:
    "I build well-tested digital products end to end — from full-stack feature work to keeping it all running reliably in production.",
  about: [
    "I'm a software engineer with nearly a decade of experience, building digital experiences and SaaS products across teams of all sizes.",
    "My work spans the full stack and, more recently, site reliability — I care about shipping well-tested features and keeping them running smoothly for the people who depend on them. I like communicating ideas clearly and helping teams move faster together.",
  ],
  url: "https://jackmaunders.dev",
  email: "hello@example.com",
  github: { handle: "your-handle", url: "https://github.com/your-handle" },
  linkedin: {
    handle: "in/your-handle",
    url: "https://www.linkedin.com/in/your-handle",
  },
  cvPath: "/jack-maunders-cv.pdf",
} as const;
