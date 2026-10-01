"use client";

import { useEffect } from "react";

/**
 * Loads the form's behaviour when the form is about to scroll into view, or on the first
 * hover/focus, whichever comes first. Nothing is fetched during page load.
 */
export default function BriefFormEnhancer() {
  useEffect(() => {
    const form = document.getElementById("brief-form") as HTMLFormElement | null;
    if (!form) return;
    let off: (() => void) | undefined;
    let cancelled = false;
    let started = false;

    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && load(), {
      rootMargin: "600px 0px",
    });

    function load() {
      if (started) return;
      started = true;
      io.disconnect();
      form!.removeEventListener("pointerenter", load);
      form!.removeEventListener("focusin", load);
      import("./briefFormEnhance").then((m) => {
        if (!cancelled) off = m.enhanceBriefForm(form!);
      });
    }

    io.observe(form);
    form.addEventListener("pointerenter", load);
    form.addEventListener("focusin", load);
    return () => {
      cancelled = true;
      io.disconnect();
      form.removeEventListener("pointerenter", load);
      form.removeEventListener("focusin", load);
      off?.();
    };
  }, []);

  return null;
}
