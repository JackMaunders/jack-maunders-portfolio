import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

const cards = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: site.github.handle, href: site.github.url },
  { label: "LinkedIn", value: site.linkedin.handle, href: site.linkedin.url },
  { label: "CV", value: "Download PDF", href: site.cvPath },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading>Contact</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.label === "Email" ? {} : { target: "_blank", rel: "noreferrer" })}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground"
          >
            <p className="text-xs tracking-[0.15em] text-muted uppercase">
              {card.label}
            </p>
            <p className="mt-2 text-sm text-foreground transition-colors group-hover:text-accent">
              {card.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
