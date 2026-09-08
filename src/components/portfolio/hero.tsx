"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Download, ChevronDown, Smartphone, Globe, Terminal } from "lucide-react";
import { roles, heroStats } from "@/lib/portfolio-data";

/* ------------------------------ typing effect ----------------------------- */

function useTypingEffect(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    // All transitions (including word advance) go through a timeout so we
    // never call setState synchronously inside the effect body.
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 120);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 40 : 85
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

/* ------------------------------ animated code ----------------------------- */

const codeLines = [
  { indent: 0, parts: [["const ", "text-violet-400"], ["developer", "text-sky-300"], [" = {", "text-zinc-300"]] },
  { indent: 1, parts: [["name", "text-emerald-300"], [": ", "text-zinc-400"], ["'Alex Carter'", "text-amber-300"], [",", "text-zinc-400"]] },
  { indent: 1, parts: [["stack", "text-emerald-300"], [": [", "text-zinc-400"], ["'web'", "text-amber-300"], [", ", "text-zinc-400"], ["'android'", "text-amber-300"], [", ", "text-zinc-400"], ["'backend'", "text-amber-300"], ["],", "text-zinc-400"]] },
  { indent: 1, parts: [["passion", "text-emerald-300"], [": ", "text-zinc-400"], ["'shipping clean code'", "text-amber-300"], [",", "text-zinc-400"]] },
  { indent: 1, parts: [["coffee", "text-emerald-300"], [": ", "text-zinc-400"], [true, "text-rose-300"], [",", "text-zinc-400"]] },
  { indent: 0, parts: [["};", "text-zinc-300"]] },
] as const;

function AnimatedCodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-md lg:max-w-none"
    >
      {/* Glow behind window */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-violet-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/90 shadow-2xl shadow-black/50 backdrop-blur">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-zinc-500">
            <Terminal className="h-3.5 w-3.5" /> developer.ts
          </span>
        </div>
        {/* Code body */}
        <div className="p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.35, duration: 0.4 }}
              style={{ paddingLeft: `${line.indent * 1.5}rem` }}
              className="whitespace-nowrap"
            >
              {line.parts.map(([content, cls], j) => (
                <span key={j} className={cls}>
                  {typeof content === "boolean" ? (content ? "true" : "false") : content}
                </span>
              ))}
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + codeLines.length * 0.35 }}
            style={{ paddingLeft: "1.5rem" }}
          >
            <span className="inline-block h-4 w-2 animate-blink bg-emerald-400 sm:h-5" />
          </motion.div>
        </div>
      </div>

      {/* Floating badges — kept clear of code text on small screens */}
      <FloatBadge
        className="-left-3 top-6 sm:-left-8"
        delay={2.6}
        icon={<Globe className="h-4 w-4 text-cyan-300" />}
        label="Web"
      />
      <FloatBadge
        className="-bottom-5 right-5 sm:-right-7 sm:top-1/3"
        delay={2.9}
        icon={<Smartphone className="h-4 w-4 text-lime-300" />}
        label="Android"
      />
    </motion.div>
  );
}

function FloatBadge({
  className,
  delay,
  icon,
  label,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur"
      >
        {icon}
        <span className="font-mono text-xs font-medium text-zinc-200">{label}</span>
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------- hero ---------------------------------- */

export function Hero() {
  const typed = useTypingEffect(roles);
  const { scrollY } = useScroll();
  const yBlobs = useTransform(scrollY, [0, 600], [0, 140]);
  const yContent = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 pb-20"
    >
      {/* Grid backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      {/* Animated gradient blobs */}
      <motion.div style={{ y: yBlobs }} className="absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl sm:h-96 sm:w-96"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl sm:h-96 sm:w-96"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{ y: yContent }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10"
      >
        {/* Left: copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance & full-time
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Alex Carter
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="absolute -bottom-1.5 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-emerald-400/70 to-transparent"
              />
            </span>
          </motion.h1>

          {/* Typing line */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 flex min-h-9 items-center justify-center font-mono text-xl text-zinc-300 sm:text-2xl lg:justify-start lg:text-3xl"
            aria-live="polite"
          >
            <span className="mr-3 text-emerald-400">&gt;</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-2.5 animate-blink bg-emerald-400 sm:h-7" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
          >
            I build end-to-end digital products — from responsive web platforms
            with React &amp; Node.js to polished native Android apps with Kotlin
            &amp; Jetpack Compose.
          </motion.p>

          {/* CTAs — 44px+ touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/30 transition-shadow hover:shadow-xl hover:shadow-emerald-500/40 sm:w-auto sm:text-base"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur transition-colors hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300 sm:w-auto sm:text-base"
            >
              <Download className="h-4 w-4" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8 sm:gap-12 lg:justify-start"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-mono text-2xl font-bold text-emerald-300 sm:text-3xl">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: animated code window */}
        <div className="order-1 flex justify-center lg:order-2">
          <AnimatedCodeWindow />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-emerald-300 sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <AnimatePresence>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </section>
  );
}
