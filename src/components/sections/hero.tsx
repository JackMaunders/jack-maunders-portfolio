"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { site } from "@/lib/site";
import { NodeGraph } from "@/components/node-graph";

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin);

// Soft mask so the network fades behind the copy
const graphMask =
  "radial-gradient(75% 75% at 30% 50%, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 24%, #000 70%)";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const eyebrow = useRef<HTMLParagraphElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const subtext = useRef<HTMLParagraphElement>(null);
  const cta = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate when the user hasn't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(headline.current!, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
        });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(eyebrow.current, { autoAlpha: 0, y: 12, duration: 0.5, delay: 0.5 })
          .from(
            split.lines,
            { yPercent: 110, duration: 0.85, stagger: 0.12, ease: "power4.out" },
            "-=0.15"
          )
          .from(subtext.current, { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.45")
          .from(cta.current, { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.45");

        // Network
        tl.from(
          ".edge",
          { drawSVG: "0%", duration: 1, stagger: 0.03, ease: "power2.inOut" },
          0.2
        )
          .from(
            ".node",
            {
              autoAlpha: 0,
              scale: 0,
              transformOrigin: "50% 50%",
              duration: 0.5,
              stagger: 0.03,
            },
            0.45
          )
          .from(
            ".halo",
            {
              autoAlpha: 0,
              scale: 0,
              transformOrigin: "50% 50%",
              duration: 0.5,
              stagger: 0.03,
              delay: 0.5
            },
            "<"
          );

        // "ping" on the accent halos
        gsap.to(".halo", {
          scale: 1.2,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 2.2,
          ease: "sine.out",
          repeat: -1,
          stagger: { each: 0.9, from: "random" },
          delay: 1.5,
        });

        return () => split.revert();
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ maskImage: graphMask, WebkitMaskImage: graphMask }}
      >
        <NodeGraph />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24">
        <p
          ref={eyebrow}
          className="mb-4 text-sm font-medium tracking-[0.2em] text-muted uppercase"
        >
          {site.role}
        </p>

        <h1
          ref={headline}
          className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="block">Jack</span>
          <span className="block">Maunders.</span>
        </h1>

        <p ref={subtext} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div ref={cta} className="mt-10 flex flex-wrap gap-3">
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
