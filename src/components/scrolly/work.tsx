"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { workItems, type WorkItem } from "@/lib/portfolio-data";

function WorkCard({ item }: { item: WorkItem }) {
  const body = (
    <div className="relative z-10 flex h-full flex-col justify-between">
      <header>
        <div className="flex items-center justify-between mono-label text-white/35">
          <span>{item.context} / {item.kind}</span>
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
        <div className="border-t border-white/10 pt-4 flex items-baseline justify-between gap-3">
          <span className="flex items-baseline gap-3">
            <span className="font-mono font-bold text-2xl sm:text-4xl text-[#ff4d00] tabular-nums">
              {item.metric}
            </span>
            <span className="mono-label text-white/40">{item.metricLabel}</span>
          </span>
          {item.href && (
            <span className="mono-label text-[#f2efe9] group-hover:text-[#ff4d00] transition-colors shrink-0">
              Visit site ↗
            </span>
          )}
        </div>
      </footer>
    </div>
  );

  const cls = "group relative shrink-0 w-[82vw] sm:w-[58vw] lg:w-[44vw] xl:w-[38vw] h-[62vh] sm:h-[64vh] overflow-hidden border border-white/12 bg-[#0a0a0a] px-6 sm:px-9 py-7 sm:py-9 transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#ff4d00]/60 focus-visible:-translate-y-1.5 focus-visible:border-[#ff4d00]/70 active:translate-y-0";

  const surface = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,77,0,0.14),transparent_38%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 bg-[#ff4d00] transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-focus-visible:w-full"
      />
      {body}
    </>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      data-cursor
      className={cls}
    >
      {surface}
    </a>
  ) : (
    <article data-cursor className={cls}>
      {surface}
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
    const resizeObserver = new ResizeObserver(measure);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 130, damping: 32, mass: 0.45 });
  const barScale = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);

  return (
    <section id="work" data-scene="work" ref={wrapRef} className="relative h-[350vh]">
      <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden">
        {/* heading rides with the intro panel */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-stretch gap-5 sm:gap-8 px-5 sm:px-10 w-max"
        >
          {/* intro panel */}
          <div className="shrink-0 w-[80vw] sm:w-[46vw] lg:w-[36vw] flex flex-col justify-center pr-4">
            <h2 className="font-black uppercase tracking-[-0.02em] leading-[0.92] text-[clamp(2.6rem,7vw,5.8rem)]">
              Selected
              <br />
              <span className="text-stroke">work</span>
            </h2>
            <p className="mt-6 max-w-xs text-white/55 text-sm sm:text-base leading-relaxed">
              Production work from Ayo Lari and Fleetify, plus Mahirka as my
              largest independent product so far.
            </p>
          </div>

          {workItems.map((item) => (
            <WorkCard key={item.index} item={item} />
          ))}

          <div className="shrink-0 w-[18vw]" aria-hidden />
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
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
