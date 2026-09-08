"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Footprints, Truck, Package, ClipboardCheck, ExternalLink, ArrowUpRight, Smartphone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { projects, projectFilters, type ProjectCategory, type Project } from "@/lib/portfolio-data";

const iconMap: Record<Project["icon"], React.ComponentType<{ className?: string }>> = {
  run: Footprints,
  truck: Truck,
  box: Package,
  log: ClipboardCheck,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = iconMap[project.icon];
  const categoryLabel = project.category === "android" ? "Android" : "Flutter";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.21, 0.65, 0.35, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/50 transition-colors duration-300 hover:border-emerald-500/30"
      whileHover="hover"
    >
      {/* Thumbnail */}
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-48 ${project.gradient}`}>
        <div className="bg-grid absolute inset-0 opacity-60" />
        {/* decorative floating icon */}
        <motion.div
          variants={{ hover: { scale: 1.15, rotate: 6 } }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-zinc-950/60 text-emerald-300 shadow-2xl shadow-black/40 backdrop-blur"
        >
          <Icon className="h-8 w-8" />
        </motion.div>
        <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 font-mono text-[11px] tracking-wider text-emerald-300 uppercase backdrop-blur">
          {categoryLabel}
        </span>
        <span className="absolute top-4 right-4 font-mono text-[11px] text-zinc-500">
          {project.year}
        </span>
        {/* hover overlay buttons */}
        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 bg-gradient-to-t from-zinc-950/90 to-transparent pb-4 pt-10"
        >
          <span className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-zinc-100 backdrop-blur transition-colors hover:bg-emerald-500/25">
            <ExternalLink className="h-3.5 w-3.5" /> Details
          </span>
          <span className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-zinc-100 backdrop-blur transition-colors hover:bg-emerald-500/25">
            <Smartphone className="h-3.5 w-3.5" /> {project.category === "android" ? "Play Store" : "App"}
          </span>
        </motion.div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-zinc-100 transition-colors group-hover:text-emerald-300">
            {project.title}
          </h3>
          <span className="mt-1 shrink-0 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/20">
            {project.highlight}
          </span>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors group-hover:border-emerald-500/15 group-hover:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* bottom accent line */}
      <motion.span
        variants={{ hover: { scaleX: 1 } }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-400 to-teal-400"
      />
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-28">
      <div
        className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Real products shipped to real users — from a fitness app at Telkomsel's Cooltura Run 5K to fleet management modules in production today."
        />

        {/* Filter buttons */}
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Project filters"
            className="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-white/10 bg-zinc-900/60 p-1.5 backdrop-blur"
          >
            {projectFilters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`relative min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6 ${
                  filter === f.value
                    ? "text-zinc-950"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {filter === f.value && (
                  <motion.span
                    layoutId="project-filter"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md shadow-emerald-500/30"
                  />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards grid with layout animation */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More link */}
        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="https://bit.ly/3Zr3t03"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-100 transition-all hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300 sm:text-base"
          >
            View full portfolio site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
