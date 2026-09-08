"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workItems, type WorkItem } from "@/lib/portfolio-data";

/**
 * SCENE 05 — Work.
 * The section pins; scrolling drives the shelf sideways past
 * four production projects. Distance is measured, not guessed.
 */

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article
      data-cursor
      className="group relative flex flex-col justify-between shrink-0 w-[82vw] sm:w-[58vw] lg:w-[44vw] xl:w-[38vw] h-[62vh] sm:h-[64vh] border border-white/12 bg-[#0a0a0a] px-6 sm:px-9 py-7 sm:py-9 hover:border-[#ff4d00]/60 transition-colors duration-500"
    >
      <header>
        <div className="flex items-center justify-between mono-label text-white/35">
          <span>
            {item.index} / {item.kind}
          </span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-6 sm:mt-8 font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(1.9rem,3.6vw,3.4rem)] group-hover:text-[#ff4d00] transition-colors duration-500">
          {item.title}
        </h3>
        <p className="mt-4 sm:mt-5 text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-md">
          {item.summary}
        </p>
      </header>

      <footer>
        <div className="flex flex-wrap gap-2 mb-7 sm:mb-9">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 border border-white/15 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4 flex items-baseline gap-3">
          <span className="font-mono font-bold text-2xl sm:text-4xl text-[#ff4d00] tabular-nums">
            {item.metric}
          </span>
          <span className="mono-label text-white/40">{item.metricLabel}</span>
        </div>
      </footer>
    </article>
  );
}

export default function Work() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(trackRef.current.scrollWidth - window.innerWidth, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const barScale = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);

  return (
    <section id="work" data-scene="work" ref={wrapRef} className="relative h-[380vh]">
      <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden">
        {/* heading rides with the intro panel */}
        <motion.div ref={trackRef} style={{ x }} className="flex items-stretch gap-5 sm:gap-8 px-5 sm:px-10 w-max">
          {/* intro panel */}
          <div className="shrink-0 w-[80vw] sm:w-[46vw] lg:w-[36vw] flex flex-col justify-center pr-4">
            <p className="mono-label text-white/40 mb-6">SCENE 05 — WORK</p>
            <h2 className="font-black uppercase tracking-[-0.02em] leading-[0.92] text-[clamp(2.6rem,7vw,5.8rem)]">
              Selected
              <br />
              <span className="text-stroke">work</span>
            </h2>
            <p className="mt-6 max-w-xs text-white/55 text-sm sm:text-base leading-relaxed">
              Four things I shipped that met real users. Keep scrolling — the
              shelf slides sideways.
            </p>
            <div className="mt-8 mono-label text-[#ff4d00] flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff4d00]" />
              Drag-free. Just scroll.
            </div>
          </div>

          {workItems.map((item) => (
            <WorkCard key={item.id ?? item.title} item={item} />
          ))}

          {/* outro spacer panel */}
          <div className="shrink-0 w-[30vw] flex items-center">
            <p className="font-mono text-white/25 text-[11px] tracking-[0.22em] uppercase leading-loose">
              → Proof, not promises
              <br />
              continues below
            </p>
          </div>
        </motion.div>

        {/* progress bar */}
        <div className="px-5 sm:px-10 mt-10">
          <div className="h-px bg-white/12 relative">
            <motion.div
              style={{ scaleX: barScale }}
              className="absolute inset-0 bg-[#ff4d00] origin-left"
            />
          </div>
          <div className="mt-3 flex justify-between mono-label text-white/30">
            <span>2024</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
