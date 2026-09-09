"use client";

import { motion } from "framer-motion";
import { chapters } from "@/lib/portfolio-data";

export default function Timeline() {
  return (
    <section id="chapters" data-scene="chapters" className="relative px-5 sm:px-10 pt-24 sm:pt-36 pb-10">
      <h2 className="font-black uppercase tracking-[-0.02em] leading-[0.94] text-[clamp(2.6rem,8vw,7rem)]">
        Experience
      </h2>

      <div className="mt-14 sm:mt-20">
        {chapters.map((chapter, i) => (
          <motion.article
            key={chapter.place}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="group border-t border-white/12 last:border-b py-8 sm:py-12 grid gap-5 md:grid-cols-[220px_1fr_1.4fr] lg:grid-cols-[260px_1fr_1.4fr] md:gap-8"
          >
            {/* period stays visible on desktop */}
            <div className="md:sticky md:top-24 self-start">
              <p className="font-mono text-sm text-[#ff4d00] tracking-[0.08em]">
                {chapter.period}
              </p>
              {chapter.current && (
                <p className="mono-label mt-2 text-white/45 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
                  Current role
                </p>
              )}
            </div>

            {/* place + role */}
            <div>
              <h3 className="font-extrabold uppercase tracking-tight text-xl sm:text-2xl leading-tight">
                {chapter.place}
              </h3>
              <p className="mt-1.5 text-white/50 text-sm">{chapter.role}</p>
            </div>

            {/* story */}
            <div>
              <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-xl">
                {chapter.story}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {chapter.marks.map((mark) => (
                  <span
                    key={mark}
                    className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/45 border border-white/12 px-2.5 py-1 group-hover:border-[#ff4d00]/50 group-hover:text-white/70 transition-colors duration-500"
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
