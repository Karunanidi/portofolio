"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { heroTagline, heroWords, persona } from "@/lib/portfolio-data";

/**
 * SCENE 01 — Intro.
 * Giant kinetic type: "I BUILD" + a rotating stack of disciplines.
 * Content parallaxes away as the story begins.
 */

/* Uppercase Archivo Black ≈ 0.68em per char — size each rotating word so
   even the longest one never overflows the viewport. */
function kineticSize(word: string) {
  const maxVw = Math.min(13.5, 84 / (word.length + 1));
  return `clamp(2.6rem, ${maxVw.toFixed(1)}vw, 10rem)`;
}
export default function Hero({ active }: { active: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % heroWords.length),
      2600
    );
    return () => clearInterval(id);
  }, [active]);

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
        style={{ background: "radial-gradient(circle, #ff4d00 0%, transparent 65%)" }}
      />

      {/* corner metadata */}
      <div className="relative z-10 pt-20 px-5 sm:px-10 flex justify-between mono-label text-white/35">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          SCENE 01 — INTRO
        </motion.span>
        <motion.span
          className="hidden sm:block"
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {persona.coordinates}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          © 2026
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
          {persona.name} — {persona.role} · {persona.location}
        </motion.p>

        <h1 className="font-black uppercase leading-[0.92] tracking-[-0.02em]">
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
            <AnimatePresence mode="popLayout">
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
        </h1>
      </motion.div>

      {/* bottom row: tagline + scroll cue */}
      <div className="relative z-10 px-5 sm:px-10 pb-32 sm:pb-24 mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <motion.p
          className="max-w-md text-white/60 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          {heroTagline}
        </motion.p>

        <motion.a
          href="#manifesto"
          className="group flex items-center gap-4 mono-label text-white/50 hover:text-[#f2efe9] transition-colors w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.15, duration: 0.8 }}
        >
          <span className="relative h-12 w-px bg-white/15 overflow-hidden">
            <span className="absolute inset-0 bg-[#ff4d00] animate-cue" />
          </span>
          Scroll the story
        </motion.a>
      </div>
    </section>
  );
}
