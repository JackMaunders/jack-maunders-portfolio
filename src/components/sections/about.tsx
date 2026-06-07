import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <Reveal as="section" id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading>About</SectionHeading>

      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground">
        {site.about.map((paragraph, i) => (
          <p key={i} className={i === 0 ? undefined : "text-muted"}>
            {paragraph}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
