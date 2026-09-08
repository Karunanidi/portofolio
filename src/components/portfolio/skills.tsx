"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { skillGroups, otherTools } from "@/lib/portfolio-data";

/* ------------------------------ skill progress ----------------------------- */

function SkillBar({ level, active }: { level: number; active: boolean }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: active ? `${level}%` : "0%" }}
        transition={{ duration: 1.1, ease: [0.22, 0.68, 0.31, 1], delay: 0.15 }}
        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300"
      />
    </div>
  );
}

function SkillCard({
  name,
  level,
  Icon,
  color,
  index,
  tabKey,
}: {
  name: string;
  level: number;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  index: number;
  tabKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      key={tabKey + name}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl border border-white/8 bg-zinc-900/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/80 sm:p-5"
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/8 bg-zinc-800/80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${color}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-zinc-100 sm:text-base">
            {name}
          </div>
          <div
            className={`font-mono text-xs transition-colors ${
              hovered ? "text-emerald-300" : "text-zinc-500"
            }`}
          >
            {level}%
          </div>
        </div>
      </div>
      <SkillBar level={level} active={inView} />
    </motion.div>
  );
}

/* --------------------------------- section --------------------------------- */

export function Skills() {
  const [tab, setTab] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === tab) ?? skillGroups[0];

  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-28">
      {/* subtle bg accent */}
      <div
        className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolkit built through shipping production Flutter & Android apps — plus web, database and design skills from my engineering background."
        />

        {/* Tabs */}
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="inline-flex rounded-2xl border border-white/10 bg-zinc-900/60 p-1.5 backdrop-blur"
          >
            {skillGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={tab === g.id}
                onClick={() => setTab(g.id)}
                className={`relative min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7 sm:text-base ${
                  tab === g.id ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {tab === g.id && (
                  <motion.span
                    layoutId="skills-tab"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md shadow-emerald-500/30"
                  />
                )}
                {g.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Subtitle */}
        <div className="mt-6 text-center">
          <motion.p
            key={group.id + "-subtitle"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm text-zinc-500 sm:text-base"
          >
            {group.subtitle}
          </motion.p>
        </div>

        {/* Skill grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {group.skills.map((skill, i) => (
            <SkillCard
              key={group.id + skill.name}
              name={skill.name}
              level={skill.level}
              Icon={skill.icon}
              color={skill.color}
              index={i}
              tabKey={group.id}
            />
          ))}
        </div>

        {/* Other tools */}
        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-col items-center gap-4">
            <span className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Also in my toolbox
            </span>
            <StaggerGroup className="flex flex-wrap justify-center gap-3">
              {otherTools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-300">
                    <tool.icon className="h-4 w-4 text-emerald-400/80" />
                    {tool.name}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
