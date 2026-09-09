"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { caseStudies, type CaseStudy } from "@/lib/portfolio-data";

function StackCard({
  cs,
  index,
  total,
  progress,
}: {
  cs: CaseStudy;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const coverStart = (index + 1) / total;
  const coverEnd = Math.min(coverStart + 1 / total, 1);
  const rawScale = useTransform(progress, [coverStart, coverEnd], [1, 0.94]);
  const scale = useSpring(rawScale, { stiffness: 150, damping: 34, mass: 0.45 });
  const dim = useTransform(progress, [coverStart, coverEnd], [0, 0.6]);

  return (
    <div
      className="sticky top-0 h-svh flex items-center px-5 sm:px-10 py-16"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale }}
        className="relative w-full max-w-6xl mx-auto overflow-y-auto border border-white/12 bg-[linear-gradient(145deg,#0d0d0d_0%,#090909_72%)] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10 sm:py-12 lg:px-14 max-h-[86svh] no-scrollbar will-change-transform"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent"
        />
        <header>
          <p className="mono-label text-[#ff4d00]">
            {cs.context} / {cs.kicker}
          </p>
          <h3 className="mt-4 sm:mt-5 font-black uppercase tracking-[-0.02em] leading-[0.98] text-[clamp(1.7rem,4.2vw,3.6rem)]">
            {cs.title}
          </h3>
          <p className="mt-2 sm:mt-3 font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase text-white/40">
            {cs.subtitle}
          </p>
        </header>

        <div className="mt-6 sm:mt-9 grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-14">
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {cs.body}
          </p>

          <div>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5 border-t lg:border-t-0 border-white/10 pt-5 lg:pt-0">
              {cs.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono font-bold text-xl sm:text-3xl text-[#f2efe9] tabular-nums">
                    {stat.value}
                  </p>
                  <p className="mono-label text-white/35 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-6 sm:mt-8 space-y-3">
              {cs.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 text-sm sm:text-[15px] text-white/70 leading-snug"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#ff4d00]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* cover dim overlay */}
        <motion.div
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-black"
          aria-hidden
        />
      </motion.article>
    </div>
  );
}

export default function CaseStudies() {
  const wrapRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="proof" data-scene="proof" ref={wrapRef} className="relative">
      {/* heading block */}
      <div className="px-5 sm:px-10 pt-24 sm:pt-36 pb-14 sm:pb-20">
        <h2 className="font-black uppercase tracking-[-0.02em] leading-[0.94] text-[clamp(2.6rem,8vw,7rem)] max-w-5xl">
          What I <span className="text-stroke-signal">delivered</span>
        </h2>
        <p className="mt-6 max-w-md text-white/55 text-sm sm:text-base leading-relaxed">
          Two professional projects grounded in my CV, plus Mahirka as an
          independent product.
        </p>
      </div>

      {/* stacking cards; container height scales with card count */}
      <div
        className="relative"
        style={{ height: `${caseStudies.length * 100}svh` }}
      >
        {caseStudies.map((cs, i) => (
          <StackCard
            key={cs.id}
            cs={cs}
            index={i}
            total={caseStudies.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
