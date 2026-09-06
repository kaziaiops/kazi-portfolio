export type ProjectStatus = "Completed" | "In Production" | "Coming Soon";

export interface ProjectVideo {
  src: string;
  poster: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  description: string;
  detail: string;
  tags: string[];
  /** One entry = a single-video project; multiple = a project detail page with a video each. */
  videos: ProjectVideo[];
  poster: string;
  aspect: "portrait" | "landscape";
  /** When set, the whole card links out to this URL instead of the project detail page. */
  external?: { href: string; cta: string };
}

export const projects: Project[] = [
  {
    slug: "ceos-forbidden-assistant",
    title: "The CEO's Forbidden Assistant",
    status: "In Production",
    description:
      "A two-character vertical microdrama — Lena and Damien, one Executive Office, one night.",
    detail:
      "Episode 01: nine shots, ~62 seconds of raw footage, cut toward a 60–70 second final that ends on a cliffhanger. Hero references locked in Nano Banana Pro, each shot generated in Veo 3.1 with dialogue voiced natively in-shot. Currently in edit.",
    tags: ["Veo 3.1", "Vertical 9:16", "Microdrama"],
    videos: [
      {
        src: "/videos/project-ceo-drama.mp4",
        poster: "/images/project-ceo-drama.jpg",
        label: "Episode 01",
      },
    ],
    poster: "/images/project-ceo-drama.jpg",
    aspect: "portrait",
  },
  {
    slug: "ugc-talking-head-ads",
    title: "UGC Talking-Head Ad Campaigns",
    status: "Completed",
    description:
      "A locked photorealistic spokesperson character carrying two full campaigns.",
    detail:
      "Character locked once in Google Flow, then generated per shot in Veo 3.1 Lite and cut in CapCut. Video 1: a four-shot DTC spec ad, ~29 seconds, hook to problem to product reveal to CTA. Video 2: a fourteen-shot gig intro, ~74 seconds. Both fully produced and edited.",
    tags: ["Veo 3.1 Lite", "UGC", "2 Campaigns"],
    videos: [
      {
        src: "/videos/ugc-video-1.mp4",
        poster: "/images/ugc-video-1.jpg",
        label: "Video 1 — DTC spec ad",
      },
      {
        src: "/videos/ugc-video-2.mp4",
        poster: "/images/ugc-video-2.jpg",
        label: "Video 2 — Gig intro",
      },
    ],
    poster: "/images/project-ugc-ads.jpg",
    aspect: "portrait",
  },
  {
    slug: "spec-ad-portfolio",
    title: "Spec Ad Portfolio",
    status: "In Production",
    description:
      "One locked 2D-illustrated character running across six spec ads, three SaaS and three DTC.",
    detail:
      "FlowStack, PitchBird, and LedgerLoop for SaaS; SLUMBR, LUMENA, and FetchBox for DTC. Five shots per ad, generated with the Wan 2.2 14B image-to-video pipeline, vertical 9:16. Ads one and two have shots and stills generated, with animation underway — four more to go.",
    tags: ["Wan 2.2 14B", "Vertical 9:16", "6-Ad Series"],
    videos: [
      {
        src: "/videos/spec-video-intro.mp4",
        poster: "/images/spec-video-intro.jpg",
        label: "Intro",
      },
      {
        src: "/videos/spec-video-1.mp4",
        poster: "/images/spec-video-1.jpg",
        label: "Ad 1 — FlowStack",
      },
      {
        src: "/videos/spec-video-2.mp4",
        poster: "/images/spec-video-2.jpg",
        label: "Ad 2 — early cut",
      },
    ],
    poster: "/images/spec-video-intro.jpg",
    aspect: "portrait",
  },
  {
    slug: "blindside-effect",
    title: "Blindside Effect",
    status: "In Production",
    description:
      "A weekly psychology and cognitive-bias explainer channel — written, voiced, and edited solo.",
    detail:
      "Five episodes covering biases and behavioral effects — Dunning-Kruger, the Halo Effect, Murphy's Law, and more. Separate from the AI-generated character work above: scripted, recorded, and cut by hand, released on a weekly cadence.",
    tags: ["YouTube", "Explainer Series", "5 Episodes"],
    videos: [],
    poster: "/images/blindside-effect.svg",
    aspect: "landscape",
    external: {
      href: "https://www.youtube.com/@BlindsideEffect",
      cta: "Watch on YouTube",
    },
  },
];
