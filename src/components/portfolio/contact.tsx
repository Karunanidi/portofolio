"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageCircle, AtSign, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { contactInfo, socials } from "@/lib/portfolio-data";

const infoIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  pin: MapPin,
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Portfolio: Globe,
  WhatsApp: MessageCircle,
  Email: AtSign,
};

type FormState = "idle" | "sending" | "sent";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    // Simulate async send — replace with a real API call later
    setTimeout(() => {
      setState("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setState("idle"), 3200);
    }, 1400);
  };

  const inputClass =
    "min-h-12 w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-400/50 focus:bg-zinc-900 focus:ring-2 focus:ring-emerald-500/20 sm:text-base";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            minLength={2}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          required
          minLength={10}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or idea..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <motion.button
        type="submit"
        disabled={state !== "idle"}
        whileHover={state === "idle" ? { scale: 1.02, y: -2 } : undefined}
        whileTap={state === "idle" ? { scale: 0.98 } : undefined}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-shadow hover:shadow-xl hover:shadow-emerald-500/40 disabled:opacity-80 sm:text-base"
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              <Send className="h-4 w-4" /> Send Message
            </motion.span>
          )}
          {state === "sending" && (
            <motion.span
              key="sending"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </motion.span>
          )}
          {state === "sent" && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4" /> Message Sent!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      <div
        className="absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind, an app idea, or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info column */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <StaggerGroup className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = infoIcons[info.icon];
                return (
                  <StaggerItem key={info.label}>
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-300 ring-1 ring-emerald-500/25 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono text-[11px] tracking-[0.18em] text-zinc-500 uppercase">
                          {info.label}
                        </div>
                        <div className="truncate text-sm font-medium text-zinc-200 sm:text-base">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-white/8 bg-zinc-900/50 p-5">
                <h3 className="mb-3 font-semibold text-zinc-100">Follow me</h3>
                <div className="flex gap-3">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.name];
                    return (
                      <motion.a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        whileHover={{ y: -4, scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-zinc-800/60 text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="text-sm text-zinc-300">
                  Currently{" "}
                  <span className="font-semibold text-emerald-300">
                    available
                  </span>{" "}
                  for new projects — typical response within 24 hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl border border-white/8 bg-zinc-900/50 p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-zinc-100">
                Send me a message
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
