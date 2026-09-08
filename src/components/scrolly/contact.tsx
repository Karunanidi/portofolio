"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  contactTitle,
  footerNote,
  marqueeWords,
  persona,
} from "@/lib/portfolio-data";

/**
 * SCENE 08 — Contact.
 * Giant closing CTA with copy-to-clipboard email, editorial link rows,
 * a marquee interlude, and a footer with a live Jakarta clock.
 */

function JakartaClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Jakarta",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">
      {time} <span className="text-white/35">WIB</span>
    </span>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(persona.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${persona.email}`;
    }
  };

  const links = [
    {
      label: "Email me",
      value: persona.email,
      href: `mailto:${persona.email}`,
    },
    {
      label: "WhatsApp",
      value: persona.whatsapp,
      href: persona.whatsappLink,
    },
    {
      label: "Download CV",
      value: "PDF — English",
      href: persona.cvLink,
      download: true,
    },
    {
      label: "My product",
      value: "mahirka.com",
      href: "https://mahirka.com",
    },
    {
      label: "Elsewhere",
      value: "Portfolio site",
      href: persona.portfolioLink,
    },
  ];

  return (
    <section id="contact" data-scene="contact" ref={ref} className="relative overflow-hidden">
      {/* marquee interlude */}
      <div className="border-y border-white/10 py-4 overflow-hidden" aria-hidden>
        <div className="animate-marquee-x flex w-max gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="mono-label text-white/35 flex items-center gap-8">
              {word}
              <span className="text-[#ff4d00]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div style={{ y }} className="px-5 sm:px-10 pt-28 sm:pt-40 pb-16">
        <p className="mono-label text-white/40 mb-8">SCENE 08 — CONTACT</p>

        <h2 className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(3rem,12.5vw,11rem)]">
          {contactTitle[0]}
          <br />
          <span className="text-stroke">
            {contactTitle[1]}
            <span className="text-[#ff4d00] [-webkit-text-stroke:0]">.</span>
          </span>
        </h2>

        <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4">
          <button
            onClick={copyEmail}
            data-cursor
            className="group relative inline-flex items-center gap-3 bg-[#ff4d00] text-[#050505] font-mono font-bold text-xs sm:text-sm tracking-[0.14em] uppercase px-7 sm:px-9 py-4 sm:py-5 hover:bg-[#f2efe9] transition-colors duration-300"
          >
            {copied ? "Copied ✓" : persona.email}
          </button>
          <p className="mono-label text-white/40 max-w-[220px] leading-relaxed">
            Or keep scrolling back up — the story loops.
          </p>
        </div>

        {/* editorial link rows */}
        <div className="mt-16 sm:mt-24 border-t border-white/12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.download ? { download: "" } : {})}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between border-b border-white/12 py-6 sm:py-7 px-1 hover:px-4 transition-all duration-400"
            >
              <span className="mono-label text-white/40 group-hover:text-[#ff4d00] transition-colors">
                {link.label}
              </span>
              <span className="flex items-center gap-4 sm:gap-6">
                <span className="font-semibold text-base sm:text-xl text-[#f2efe9]/90 group-hover:translate-x-[-6px] transition-transform duration-400">
                  {link.value}
                </span>
                <span className="text-[#ff4d00] text-xl group-hover:rotate-45 transition-transform duration-300">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* footer */}
      <footer className="px-5 sm:px-10 pb-24 sm:pb-20 pt-10 flex flex-col sm:flex-row justify-between gap-4 mono-label text-white/35">
        <span>{footerNote}</span>
        <span>
          Local time — <JakartaClock />
        </span>
        <a
          href="#intro"
          className="text-white/60 hover:text-[#ff4d00] transition-colors w-fit"
        >
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
