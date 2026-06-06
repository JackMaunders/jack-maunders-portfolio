import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/section-heading";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading>Selected Work</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="flex aspect-4/3 items-center justify-center bg-background">
              {/* Need to decide what to do with no screenshot, or if they should be required */}
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-xs tracking-[0.2em] text-muted uppercase">
                  Screenshot
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.blurb}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-1 text-[11px] tracking-wide text-muted uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-4 pt-5 text-sm">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    Repo &rarr;
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    Live &rarr;
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
