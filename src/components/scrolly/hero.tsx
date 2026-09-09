"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { heroTagline, heroWords, persona } from "@/lib/portfolio-data";

/* Uppercase Archivo Black is about 0.68em per char. Size each rotating word so
   even the longest one never overflows the viewport. */
function kineticSize(word: string) {
  const maxVw = Math.min(13.5, 84 / (word.length + 1));
  return `clamp(2.6rem, ${maxVw.toFixed(1)}vw, 10rem)`;
}
export default function Hero({ active }: { active: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (!active || shouldReduceMotion) return;
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % heroWords.length),
      2600
    );
    return () => clearInterval(id);
  }, [active, shouldReduceMotion]);

  return (
    <section
      id="intro"
      data-scene="intro"
      ref={ref}
      className="relative min-h-svh bg-blueprint flex flex-col justify-between overflow-hidden"
    >
      {/* signal glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-15%] h-[540px] w-[540px] rounded-full opacity-[0.13] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--signal) 0%, transparent 65%)" }}
      />

      {/* compact portfolio context */}
      <div className="relative z-10 pt-20 px-5 sm:px-10 flex justify-between mono-label text-white/35">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          MOBILE DEVELOPMENT
        </motion.span>
        <motion.span
          className="hidden sm:block"
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          PORTFOLIO 2026
        </motion.span>
      </div>

      {/* main type */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-5 sm:px-10 mt-10"
      >
        <motion.p
          className="mono-label text-white/50 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {persona.name} / {persona.role}
        </motion.p>

        <h1 className="font-black uppercase leading-[0.92] tracking-[-0.02em]">
          <span className="sr-only">
            {persona.name}, {persona.role} and {persona.secondaryRole}
          </span>
          <span aria-hidden>
          <motion.span
            className="block text-[clamp(3.4rem,13.5vw,11.5rem)]"
            initial={{ opacity: 0, y: 60 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            I build
          </motion.span>

          <span
            className="block relative h-[1.02em] overflow-hidden"
            style={{ fontSize: kineticSize(heroWords[wordIndex]) }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={wordIndex}
                className="absolute inset-0 flex items-start font-black uppercase tracking-[-0.02em] text-stroke whitespace-nowrap"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                exit={{ y: "-108%" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                aria-live="polite"
              >
                {heroWords[wordIndex]}
                <span className="text-[#ff4d00] [-webkit-text-stroke:0] [color:#ff4d00]">
                  .
                </span>
              </motion.span>
            </AnimatePresence>
          </span>
          </span>
        </h1>
      </motion.div>

      <div className="relative z-10 px-5 sm:px-10 pb-32 sm:pb-24 mt-10">
        <motion.p
          className="max-w-md text-white/60 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          {heroTagline}
        </motion.p>

      </div>
    </section>
  );
}
