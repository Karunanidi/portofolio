"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small signal-orange dot with a trailing ring.
 * Desktop (fine pointer) only; hides on touch devices.
 * Grows over [data-cursor] targets and links/buttons.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const enable = setTimeout(() => setEnabled(true), 0);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [data-cursor]")
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      clearTimeout(enable);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* center dot */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[95] pointer-events-none h-1.5 w-1.5 rounded-full bg-[#ff4d00]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[95] pointer-events-none rounded-full border border-[#ff4d00]/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 28,
          height: hovering ? 52 : 28,
          opacity: pressed ? 0.45 : 1,
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}
