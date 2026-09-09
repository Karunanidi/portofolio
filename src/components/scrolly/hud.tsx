"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SCENES = [
  { id: "intro", label: "Intro" },
  { id: "manifesto", label: "About" },
  { id: "stack", label: "Skills" },
  { id: "process", label: "Approach" },
  { id: "work", label: "Work" },
  { id: "proof", label: "Projects" },
  { id: "chapters", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export default function Hud() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [active, setActive] = useState<string>("intro");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextIsLight = savedTheme === "light";
    document.documentElement.classList.toggle("light", nextIsLight);
    const frame = window.requestAnimationFrame(() => setIsLight(nextIsLight));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.classList.toggle("light", nextIsLight);
    window.localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  };

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
          <div className="flex items-center gap-5 sm:gap-7">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            aria-pressed={isLight}
            className="mono-label text-[#f2efe9] hover:text-[#ff4d00] transition-colors"
          >
            {isLight ? "Dark mode" : "Light mode"}
          </button>
          <a
            href="#contact"
            className="mono-label text-[#f2efe9] hover:text-[#ff4d00] transition-colors"
          >
            Contact
          </a>
          </div>
        </div>
      </header>

      {/* current section */}
      <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-10 z-[94] mix-blend-difference pointer-events-none select-none">
        <div className="flex items-center gap-3 font-mono">
          <span className="text-[#ff4d00] text-[11px] tracking-[0.22em]">
            {scene.label}
          </span>
        </div>
        {/* segmented portfolio progress */}
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
