"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { bootLines } from "@/lib/portfolio-data";

/* A short portfolio index followed by a two-panel reveal. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [phase, setPhase] = useState<"boot" | "exit" | "gone">("boot");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const start = performance.now();
    const duration = shouldReduceMotion ? 120 : 1450;
    const exitDelay = shouldReduceMotion ? 0 : 180;
    const handoffDelay = shouldReduceMotion ? 0 : 360;
    const unmountDelay = shouldReduceMotion ? 20 : 1250;
    let raf = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // fast boot, soft landing
      const nextCount = Math.round(eased * 100);
      const nextLineCount = Math.min(
        Math.floor(eased * bootLines.length) + 1,
        bootLines.length
      );
      setCount((current) => (current === nextCount ? current : nextCount));
      setLineCount((current) =>
        current === nextLineCount ? current : nextLineCount
      );
      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setCount(100);
      setLineCount(bootLines.length);
      timers.push(setTimeout(() => setPhase("exit"), exitDelay));
      // hero entrance starts while shutters are still opening
      timers.push(
        setTimeout(() => {
          document.body.style.overflow = "";
          onDone();
        }, handoffDelay)
      );
      // remove the overlay from the DOM once shutters are off-screen
      timers.push(setTimeout(() => setPhase("gone"), unmountDelay));
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onDone, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {/* shutter panels slide apart on exit */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#050505] border-b border-white/5"
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050505] border-t border-white/5"
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
          />

          {/* boot content */}
          <motion.div
            className="relative z-10 w-[min(560px,86vw)]"
            animate={
              phase === "exit" ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            <div className="mono-label text-white/40 mb-6 flex justify-between">
              <span>TRISNA.DEV</span>
              <span>PORTFOLIO</span>
            </div>

            <div className="font-mono text-[11px] sm:text-xs leading-relaxed text-white/55 min-h-[9.5em]">
              {bootLines.slice(0, lineCount).map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="inline-block h-px w-3 bg-[#ff4d00] mr-2 align-middle" />
                  {line}
                  {i === lineCount - 1 && lineCount < bootLines.length && (
                    <span className="animate-blink-hard ml-1 text-white/80">▌</span>
                  )}
                </motion.p>
              ))}
            </div>

            <div
              className="mt-8 flex items-end justify-between"
              role="progressbar"
              aria-label="Loading portfolio"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={count}
            >
              <div className="h-px flex-1 bg-white/15 relative overflow-hidden">
                <div
                  className="absolute inset-0 origin-left bg-[#ff4d00] will-change-transform"
                  style={{ transform: `scaleX(${count / 100})` }}
                />
              </div>
              <span className="w-[4.5ch] text-right font-mono text-2xl sm:text-3xl font-bold tabular-nums ml-4 text-[#f2efe9]">
                {count}
                <span className="text-[#ff4d00]">%</span>
              </span>
            </div>

            <p className="mono-label text-white/30 mt-6">TRISNA NUR ARIEF</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
