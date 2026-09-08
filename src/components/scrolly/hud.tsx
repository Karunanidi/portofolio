"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SCENES = [
  { id: "intro", num: "01", label: "Intro" },
  { id: "manifesto", num: "02", label: "Who" },
  { id: "stack", num: "03", label: "Stack" },
  { id: "process", num: "04", label: "Process" },
  { id: "work", num: "05", label: "Work" },
  { id: "proof", num: "06", label: "Proof" },
  { id: "chapters", num: "07", label: "Path" },
  { id: "contact", num: "08", label: "Contact" },
] as const;

/**
 * Cinematic HUD: scroll progress hairline (top), brand mark,
 * and a persistent "SCENE 03 / 08 — STACK" indicator (bottom-left).
 */
export default function Hud() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]")
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-scene") ?? "intro");
          }
        }
      },
      // a slim horizontal band around the middle of the viewport decides
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scene = SCENES.find((s) => s.id === active) ?? SCENES[0];
  const sceneIndex = SCENES.indexOf(scene);

  return (
    <>
      {/* progress hairline */}
      <motion.div
        className="fixed top-0 inset-x-0 h-[2px] bg-[#ff4d00] origin-left z-[96]"
        style={{ scaleX: progress }}
      />

      {/* top chrome */}
      <header className="fixed top-0 inset-x-0 z-[94] mix-blend-difference">
        <div className="flex items-center justify-between px-5 sm:px-10 py-5">
          <a
            href="#intro"
            className="mono-label text-[#f2efe9] hover:text-[#ff4d00] transition-colors"
          >
            TRISNA<span className="text-[#ff4d00]">.</span>DEV
          </a>
          <a
            href="#contact"
            className="mono-label text-[#f2efe9] hover:text-[#ff4d00] transition-colors flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
            Open to work
          </a>
        </div>
      </header>

      {/* scene indicator */}
      <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-10 z-[94] mix-blend-difference pointer-events-none select-none">
        <div className="flex items-center gap-3 font-mono">
          <span className="text-[#ff4d00] text-[11px] tracking-[0.22em]">
            SCENE {scene.num}
          </span>
          <span className="text-white/30 text-[11px] tracking-[0.22em]">/ 08</span>
          <span className="h-px w-8 bg-white/30" />
          <span className="text-white text-[11px] tracking-[0.22em] uppercase">
            {scene.label}
          </span>
        </div>
        {/* segmented scene progress */}
        <div className="flex gap-1 mt-2">
          {SCENES.map((s, i) => (
            <span
              key={s.id}
              className={`h-[3px] w-5 transition-colors duration-500 ${
                i <= sceneIndex ? "bg-[#ff4d00]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
