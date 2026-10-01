export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaziyousuf.me"
).replace(/\/$/, "");

export const SITE_NAME = "Kazi Yousuf";
export const SITE_TITLE = "Kazi Yousuf | Character-Consistent AI Video for Ads and Short-Form";
export const SITE_DESCRIPTION =
  "Character-consistent AI video from Dhaka, Bangladesh: UGC and spec ads, vertical short-form and explainer video, produced solo from your script.";

/** Hero copy (option A, tentative). Alternatives are in docs/hero-options.md. */
export const HERO = {
  headline: "AI video ads for DTC and SaaS, same face every shot.",
  subhead:
    "Voice, shots and final cut by one person, from Dhaka, Bangladesh.",
} as const;

/** The only contact details on the site; every link and the brief form read from here. */
export const CONTACT = {
  email: "kaziyy999@gmail.com",
  whatsappDisplay: "+880 1410-216644",
  whatsappDigits: "8801410216644",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/kaziaiops",
  github: "https://github.com/kaziaiops",
} as const;
