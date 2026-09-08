"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { aboutParagraphs, aboutHighlights, marqueeTech } from "@/lib/portfolio-data";

/* ----------------------------- animated counter ---------------------------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-mono text-4xl font-extrabold text-emerald-300 sm:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

/* --------------------------------- marquee --------------------------------- */

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div
      className="relative border-y border-white/5 bg-white/[0.02] py-5"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-5 py-2 font-mono text-sm whitespace-nowrap text-zinc-400 transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- about ---------------------------------- */

const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "K+", label: "App Users Reached" },
  { value: 30, suffix: "%", label: "Crash Rate Reduction" },
  { value: 100, suffix: "%", label: "On-time Releases" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting mobile experiences people love to use"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Text column */}
          <div className="lg:col-span-3">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((h) => (
                <StaggerItem key={h.title}>
                  <div className="group h-full rounded-2xl border border-white/8 bg-zinc-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-150" />
                      <h3 className="font-semibold text-zinc-100">{h.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500">{h.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Stats column */}
          <div className="lg:col-span-2">
            <StaggerGroup className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/8 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-6 text-center transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5">
                    <Counter to={s.value} suffix={s.suffix} />
                    <span className="mt-2 text-xs text-zinc-500 sm:text-sm">
                      {s.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.3}>
              <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-6">
                <p className="font-mono text-sm leading-relaxed text-emerald-200/90">
                  &ldquo;Code is like humor. When you have to explain it, it&apos;s
                  bad.&rdquo;
                </p>
                <p className="mt-3 font-mono text-xs text-emerald-500/70">
                  — my philosophy when writing every commit
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
