import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

/**
 * ABOUT — warm prose + optional portrait.
 * Copy lives in `site.about`. The layout works with OR without a portrait:
 * set `hasPortrait` to true once you drop an image in /public and wire it in.
 */
const hasPortrait = false;

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-start">
        <div className="space-y-5 text-lg leading-relaxed text-foreground">
          {site.about.map((paragraph, i) => (
            <p key={i} className={i === 0 ? undefined : "text-muted"}>
              {paragraph}
            </p>
          ))}
        </div>

        {hasPortrait ? (
          <div className="aspect-4/5 w-full overflow-hidden rounded-lg border border-border bg-card">
            <img
              src="/portrait.jpg"
              alt="Jack Maunders"
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
