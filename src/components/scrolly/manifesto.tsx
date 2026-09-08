"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { manifesto, manifestoStats } from "@/lib/portfolio-data";

/**
 * SCENE 02 — Who.
 * Pinned scene: the manifesto brightens word-by-word as you scroll,
 * then the receipt stats print in.
 */

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const wrapRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const words = manifesto.split(" ");
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0.72, 0.88], [36, 0]);

  return (
    <section id="manifesto" data-scene="manifesto" ref={wrapRef} className="relative h-[280vh]">
      <div className="sticky top-0 min-h-svh flex flex-col justify-center px-5 sm:px-10 py-24">
        <motion.p
          style={{ opacity: headerOpacity }}
          className="mono-label text-white/40 mb-10 sm:mb-14"
        >
          SCENE 02 — WHO
        </motion.p>

        <p className="max-w-5xl font-bold leading-[1.15] tracking-[-0.01em] text-[clamp(1.7rem,4.6vw,3.9rem)]">
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
          <motion.span
            style={{ opacity: words.length ? words.length / words.length : 1 }}
            className="text-[#ff4d00]"
          >
            .
          </motion.span>
        </p>

        {/* the receipt */}
        <motion.dl
          style={{ opacity: statsOpacity, y: statsY }}
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-white/10"
        >
          {manifestoStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`pt-5 pb-2 pr-6 ${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""} ${
                i % 2 === 1 ? "border-l border-white/10 pl-5 md:pl-6" : ""
              }`}
            >
              <dt className="mono-label text-white/35 mb-2">{stat.label}</dt>
              <dd className="font-mono font-bold text-2xl sm:text-4xl text-[#f2efe9] tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
