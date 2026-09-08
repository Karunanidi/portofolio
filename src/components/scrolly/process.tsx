"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { processSteps } from "@/lib/portfolio-data";

/**
 * SCENE 04 — Process.
 * One pinned stage; scroll steps through five operating principles.
 * Ghost numeral + copy crossfade per step, rail fills as you go.
 */
export default function Process() {
  const wrapRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const [step, setStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.max(Math.floor(v * processSteps.length), 0), processSteps.length - 1);
    setStep(idx);
  });

  const active = processSteps[step];

  return (
    <section id="process" data-scene="process" ref={wrapRef} className="relative h-[400vh]">
      <div className="sticky top-0 min-h-svh flex flex-col justify-center overflow-hidden px-5 sm:px-10 py-24">
        <p className="mono-label text-white/40 mb-10 sm:mb-14">
          SCENE 04 — PROCESS
        </p>

        {/* ghost numeral backdrop */}
        <div className="pointer-events-none select-none absolute right-[-4vw] sm:right-[2vw] top-1/2 -translate-y-1/2 font-black leading-none text-stroke-faint text-[clamp(14rem,38vw,34rem)]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={active.id}
              className="block"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >
              {active.id}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start max-w-5xl">
          {/* rail */}
          <div className="flex lg:flex-col gap-2 lg:gap-3 lg:pt-3">
            {processSteps.map((s, i) => (
              <div
                key={s.id}
                className={`h-[3px] lg:h-10 lg:w-[3px] w-10 transition-colors duration-500 ${
                  i === step ? "bg-[#ff4d00]" : i < step ? "bg-white/40" : "bg-white/12"
                }`}
              />
            ))}
          </div>

          {/* copy */}
          <div className="min-h-[300px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-black uppercase tracking-[-0.02em] text-[clamp(2.6rem,7.5vw,6rem)] leading-none">
                  {active.title}
                </h3>
                <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-semibold text-[#f2efe9]/90 max-w-xl leading-snug">
                  {active.line}
                </p>
                <p className="mt-4 sm:mt-5 text-white/55 text-sm sm:text-base leading-relaxed max-w-xl">
                  {active.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
