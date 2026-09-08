"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { stackFootnote, stackLayers } from "@/lib/portfolio-data";

/**
 * SCENE 03 — Stack.
 * Pinned scene: a mobile-app architecture cross-section that assembles
 * layer-by-layer as you scroll, top (UI) to bottom (Platform).
 */

function Layer({
  index,
  title,
  role,
  nodes,
  progress,
}: {
  index: number;
  title: string;
  role: string;
  nodes: string[];
  progress: MotionValue<number>;
}) {
  // 5 layers spread across 10%..85% of the scroll range
  const start = 0.1 + index * 0.15;
  const rowOpacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const rowX = useTransform(progress, [start, start + 0.06], [index % 2 === 0 ? -48 : 48, 0]);

  return (
    <motion.div style={{ opacity: rowOpacity, x: rowX }} className="relative pl-10 sm:pl-16">
      {/* layer index + rail node */}
      <span className="absolute left-0 top-1 font-mono text-[10px] text-[#ff4d00] tracking-[0.2em]">
        L{index + 1}
      </span>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="font-extrabold uppercase tracking-tight text-lg sm:text-2xl">
          {title}
        </h3>
        <span className="mono-label text-white/35">{role}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {nodes.map((node, j) => (
          <NodeChip
            key={node}
            label={node}
            progress={progress}
            start={start + 0.02 + j * 0.018}
          />
        ))}
      </div>
    </motion.div>
  );
}

function NodeChip({
  label,
  progress,
  start,
}: {
  label: string;
  progress: MotionValue<number>;
  start: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.04], [0, 1]);
  const scale = useTransform(progress, [start, start + 0.04], [0.85, 1]);
  return (
    <motion.span
      style={{ opacity, scale }}
      className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase border border-white/15 text-white/70 px-3 py-1.5 hover:border-[#ff4d00]/60 hover:text-[#f2efe9] transition-colors"
    >
      {label}
    </motion.span>
  );
}

export default function StackDiagram() {
  const wrapRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const spineScale = useTransform(scrollYProgress, [0.1, 0.82], [0, 1]);
  const footOpacity = useTransform(scrollYProgress, [0.86, 0.96], [0, 1]);

  return (
    <section id="stack" data-scene="stack" ref={wrapRef} className="relative h-[340vh]">
      <div className="sticky top-0 min-h-svh flex flex-col justify-center px-5 sm:px-10 py-24 overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-center">
          {/* left panel */}
          <div>
            <p className="mono-label text-white/40 mb-6">SCENE 03 — STACK</p>
            <h2 className="font-black uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.4rem,6vw,5.2rem)]">
              Under the
              <br />
              <span className="text-stroke-signal">pixel</span>
            </h2>
            <p className="mt-6 max-w-sm text-white/55 text-sm sm:text-base leading-relaxed">
              An app is a stack of promises. This is what holds up every screen
              I ship — assembled here in the order the user never sees.
            </p>
            <motion.p
              style={{ opacity: footOpacity }}
              className="mt-8 max-w-sm font-mono text-[11px] leading-relaxed text-white/40 border-l-2 border-[#ff4d00] pl-4"
            >
              {stackFootnote}
            </motion.p>
          </div>

          {/* right diagram */}
          <div className="relative">
            {/* spine */}
            <motion.div
              style={{ scaleY: spineScale }}
              className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ff4d00] via-[#ff4d00]/70 to-white/10 origin-top"
            />
            <div className="flex flex-col gap-10 sm:gap-12">
              {stackLayers.map((layer, i) => (
                <Layer
                  key={layer.id}
                  index={i}
                  title={layer.title}
                  role={layer.role}
                  nodes={layer.nodes}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
