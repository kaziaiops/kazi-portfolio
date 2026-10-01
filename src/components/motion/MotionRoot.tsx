"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EASE = "power3.out";

/** Filmstrip: each poster tilts/scales/fades by its distance from the track centre. */
function initFilmstrip() {
  const track = document.querySelector<HTMLElement>(".filmstrip-track");
  if (!track) return;
  track.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
    const media = card.querySelector<HTMLElement>(".film-card");
    if (!media) return;
    // progress 0 = card entering at the right edge, 0.5 = centred, 1 = leaving left
    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: card,
          scroller: track,
          horizontal: true,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      })
      .fromTo(
        media,
        { rotateY: -14, scale: 0.91, opacity: 0.65, transformPerspective: 1200 },
        { rotateY: 0, scale: 1, opacity: 1 },
      )
      .to(media, { rotateY: 14, scale: 0.91, opacity: 0.65 });
  });
}

/** Subtle one-shot reveals, only for content that starts below the fold. */
function initReveals(includeStages: boolean) {
  const targets = gsap.utils
    .toArray<HTMLElement>(includeStages ? "[data-reveal], [data-stage]" : "[data-reveal]")
    .filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
  if (!targets.length) return;

  gsap.set(targets, { opacity: 0, y: 20 });
  ScrollTrigger.batch(targets, {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.08,
        overwrite: true,
        // hand hover transforms back to CSS
        clearProps: "opacity,transform",
      }),
  });
}

/**
 * Desktop: pin the section and walk the five stages on scroll.
 * Returns an undo function when pinned, or undefined when it bailed to the stacked list.
 */
function initPipelinePinned() {
  const section = document.querySelector<HTMLElement>("#pipeline");
  const pin = section?.querySelector<HTMLElement>(".pipeline-pin");
  if (!section || !pin) return;

  const stages = gsap.utils.toArray<HTMLElement>("[data-stage]", section);
  const rail = gsap.utils.toArray<HTMLElement>("[data-rail]", section);
  const fill = section.querySelector<HTMLElement>(".pipeline-rail-fill");
  if (stages.length < 2) return;

  section.dataset.mode = "pinned";
  // short windows: if the pinned layout is taller than the viewport it would clip, so stay a list
  if (pin.getBoundingClientRect().height > window.innerHeight + 1) {
    delete section.dataset.mode;
    return;
  }
  gsap.set(stages.slice(1), { opacity: 0, y: 28 });
  gsap.set(rail, { opacity: 0.4 });
  gsap.set(rail[0], { opacity: 1 });

  const last = stages.length - 1;
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: pin,
      start: "top top",
      end: () => `+=${stages.length * 60}%`,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
  if (fill) tl.fromTo(fill, { scaleX: 0 }, { scaleX: 1, duration: last + 0.5 }, 0);
  for (let i = 1; i <= last; i++) {
    // out then in, never both on screen at once: stage i-1 leaves by time i, stage i arrives after
    tl.to(stages[i - 1], { opacity: 0, y: -28, duration: 0.2 }, i - 0.25)
      .to(stages[i], { opacity: 1, y: 0, duration: 0.2 }, i)
      .to(rail[i], { opacity: 1, duration: 0.2 }, i);
  }
  tl.to({}, { duration: 0.5 }, last); // hold the final stage

  return () => {
    delete section.dataset.mode;
  };
}

export default function MotionRoot() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        pin: "(min-width: 768px) and (hover: hover) and (pointer: fine)",
      },
      (ctx) => {
        const { motion, pin } = ctx.conditions as { motion: boolean; pin: boolean };
        if (!motion) return; // reduced motion: leave everything static
        // create order matters: the pin goes first so later triggers measure after its spacer
        const undoPin = pin ? initPipelinePinned() : undefined;
        initFilmstrip();
        initReveals(!undoPin);
        return () => undoPin?.();
      },
    );

    // fonts change text metrics, so re-measure once they are in
    let alive = true;
    document.fonts?.ready.then(() => alive && ScrollTrigger.refresh());
    return () => {
      alive = false;
      mm.revert();
    };
  });

  return null;
}
