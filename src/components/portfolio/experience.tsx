"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-28">
      <div
        className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="Six years of growing from junior web developer to leading full-stack and Android teams."
        />

        <div className="relative mt-16">
          {/* Vertical timeline line — draws itself on scroll */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-emerald-400/70 via-teal-400/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experiences.map((exp, i) => {
              const leftSide = i % 2 === 0;
              return (
                <li key={exp.company} className="relative">
                  {/* Node dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className={`absolute top-7 left-[19px] z-10 grid h-5 w-5 -translate-x-1/2 place-items-center sm:left-1/2 ${
                      exp.current ? "" : ""
                    }`}
                  >
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        exp.current ? "animate-ping bg-emerald-400/50" : ""
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-[#0a0a0f] ${
                        exp.current ? "bg-emerald-400" : "bg-teal-500"
                      }`}
                    />
                  </motion.span>

                  {/* Card — alternating on desktop, single column on mobile */}
                  <Reveal
                    delay={0.1}
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                      leftSide ? "sm:mr-auto sm:pr-0" : "sm:ml-auto"
                    }`}
                  >
                    <div
                      className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                        exp.current
                          ? "border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-zinc-900/60 shadow-lg shadow-emerald-500/5"
                          : "border-white/8 bg-zinc-900/50 hover:border-emerald-500/25"
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800/80 text-emerald-300 ring-1 ring-white/8 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                          <Briefcase className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-bold text-zinc-100">{exp.role}</h3>
                          <p className="text-sm font-medium text-emerald-300/90">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="ml-auto rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-300 uppercase ring-1 ring-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-zinc-500">
                        {exp.period}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {exp.description}
                      </p>
                      <StaggerGroup className="mt-4 space-y-2" stagger={0.12}>
                        {exp.achievements.map((a) => (
                          <StaggerItem key={a}>
                            <div className="flex items-start gap-2.5 text-sm text-zinc-400">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                              <span className="leading-relaxed">{a}</span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerGroup>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
