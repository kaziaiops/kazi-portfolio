/**
 * Showreel opened by the hero's "Watch Showreel" button.
 * TODO: replace with the real showreel (unlisted YouTube ID + a poster frame)
 * once it is cut. Until then this points at an existing project video.
 */
export const SHOWREEL = {
  youtubeId: "KcmQI7_WJEU",
  poster: "/images/project-ceo-drama.jpg",
  title: "Showreel",
  aspect: "portrait" as "portrait" | "landscape",
};

/** Privacy-enhanced embed; only ever rendered after a click (see VideoFacade). */
export function youtubeEmbedUrl(id: string) {
  const params = new URLSearchParams({ rel: "0", modestbranding: "1", playsinline: "1", autoplay: "1" });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

/**
 * Thumbnail candidates, best first. A local poster (sharper, full 1080x1920) wins when
 * provided; maxres may 404 on some videos, hq always exists.
 */
export function youtubeThumbnails(id: string, poster?: string) {
  return [
    ...(poster ? [poster] : []),
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
}

export type ProjectStatus = "Completed" | "In Production" | "Coming Soon";

export interface ProjectVideo {
  /** YouTube video ID (Unlisted). */
  youtubeId: string;
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
        youtubeId: "KcmQI7_WJEU",
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
        youtubeId: "ykwZbmb0Rwk",
        poster: "/images/ugc-video-1.jpg",
        label: "Video 1 — DTC spec ad",
      },
      {
        youtubeId: "2JQv_92Pg1s",
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
        youtubeId: "ozHmlqO0PgU",
        poster: "/images/spec-video-intro.jpg",
        label: "Intro",
      },
      {
        youtubeId: "HPeneKnhhfY",
        poster: "/images/spec-video-1.jpg",
        label: "Ad 1 — FlowStack",
      },
      {
        youtubeId: "cU6XIuJQxI8",
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
  },
];
