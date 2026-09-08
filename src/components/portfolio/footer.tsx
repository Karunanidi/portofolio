"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Back-to-top floating button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => jump("home")}
            aria-label="Back to top"
            className="fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-emerald-500/30 bg-zinc-900/90 text-emerald-300 shadow-xl shadow-black/40 backdrop-blur transition-colors hover:bg-emerald-500/15 sm:right-8 sm:bottom-8"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="mt-auto border-t border-white/5 bg-zinc-950/60 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Brand */}
            <button
              onClick={() => jump("home")}
              className="flex min-h-11 items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-zinc-950">
                <Code2 className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-mono font-semibold text-zinc-200">
                trisna<span className="text-emerald-400">.dev</span>
              </span>
            </button>

            {/* Quick links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-x-1 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => jump(link.id)}
                      className="min-h-11 rounded-lg px-3 py-2 text-sm text-zinc-500 transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/5 pt-6 text-center">
            <p className="flex items-center gap-1.5 text-sm text-zinc-500">
              Designed & built with
              <Heart className="h-3.5 w-3.5 fill-rose-500/80 text-rose-500/80" />
              using Next.js, Tailwind CSS & Framer Motion
            </p>
            <p className="font-mono text-xs text-zinc-600">
              © {new Date().getFullYear()} Trisna Nur Arief. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
