"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// GSAP + ScrollTrigger live in this chunk only. It is never in the first-load bundle and
// never requested during load: it is fetched on the first scroll/interaction.
const MotionRoot = dynamic(() => import("./MotionRoot"), { ssr: false });

const WAKE_EVENTS = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"] as const;

export default function MotionLoader() {
  const [wake, setWake] = useState(false);

  useEffect(() => {
    // reduced motion: never load GSAP, every section stays static and fully visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const go = () => {
      WAKE_EVENTS.forEach((e) => window.removeEventListener(e, go));
      setWake(true);
    };
    WAKE_EVENTS.forEach((e) => window.addEventListener(e, go, { passive: true, once: true }));
    return () => WAKE_EVENTS.forEach((e) => window.removeEventListener(e, go));
  }, []);

  return wake ? <MotionRoot /> : null;
}
