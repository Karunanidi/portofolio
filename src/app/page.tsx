"use client";

import { useCallback, useEffect, useState } from "react";
import Preloader from "@/components/scrolly/preloader";
import SmoothScroll from "@/components/scrolly/smooth-scroll";
import Cursor from "@/components/scrolly/cursor";
import Hud from "@/components/scrolly/hud";
import Hero from "@/components/scrolly/hero";
import Manifesto from "@/components/scrolly/manifesto";
import StackDiagram from "@/components/scrolly/stack-diagram";
import Process from "@/components/scrolly/process";
import Work from "@/components/scrolly/work";
import CaseStudies from "@/components/scrolly/case-studies";
import Timeline from "@/components/scrolly/timeline";
import Contact from "@/components/scrolly/contact";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  useEffect(() => {
    // The portfolio always starts at the top, including on reload.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <a href="#intro" className="skip-link">
        Skip to portfolio
      </a>
      <main className="grain vignette relative min-h-screen bg-[#050505] text-[#f2efe9]">
        <Preloader onDone={handleBootComplete} />
        <SmoothScroll />
        <Cursor />
        <Hud />

        <Hero active={booted} />
        <Manifesto />
        <StackDiagram />
        <Process />
        <Work />
        <CaseStudies />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
