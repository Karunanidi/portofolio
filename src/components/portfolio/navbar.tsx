"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Scroll-spy: pick the last section whose top passed the mid-viewport
      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const jump = (id: string) => {
    setOpen(false);
    // Unlock body scroll synchronously, then scroll on the next frame so
    // scrollIntoView is not blocked while the menu is still closing.
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a0a0f]/85 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6"
      >
        {/* Logo */}
        <button
          onClick={() => jump("home")}
          className="group flex min-h-11 items-center gap-2.5 outline-none"
          aria-label="Back to top"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 font-mono text-lg font-bold text-zinc-950 shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Code2 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-mono text-lg font-semibold tracking-tight text-zinc-100">
            alex<span className="text-emerald-400">.dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => jump(link.id)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
                  active === link.id
                    ? "text-emerald-300"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/25"
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => jump("contact")}
              className="min-h-11 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-md shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/40 outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <button
                    onClick={() => jump(link.id)}
                    className={`flex min-h-12 w-full items-center rounded-xl px-4 text-base font-medium transition-colors ${
                      active === link.id
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
                    }`}
                  >
                    <span className="mr-3 font-mono text-xs text-emerald-500/70">
                      0{i + 1}
                    </span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.25 }}
                className="pt-2"
              >
                <button
                  onClick={() => jump("contact")}
                  className="min-h-12 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 text-base font-semibold text-zinc-950 shadow-md shadow-emerald-500/25"
                >
                  Hire Me
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
