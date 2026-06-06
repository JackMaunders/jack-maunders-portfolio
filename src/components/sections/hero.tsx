import { site } from "@/lib/site";
import { NodeGraph } from "@/components/node-graph";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90svh] max-w-5xl flex-col justify-center px-6 pt-24"
    >
      <NodeGraph className="pointer-events-none absolute right-0 top-24 hidden h-[clamp(300px,40vw,520px)] w-[clamp(300px,40vw,520px)] md:block lg:-right-8" />

      <div className="relative z-10">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-muted uppercase">
          {site.role}
        </p>

        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          <span className="block">Jack</span>
          <span className="block">Maunders.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
