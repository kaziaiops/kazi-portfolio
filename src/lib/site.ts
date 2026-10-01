export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaziyousuf.me"
).replace(/\/$/, "");

export const SITE_NAME = "Kazi Yousuf";
export const SITE_TITLE = "Kazi Yousuf — AI Video Creator";
export const SITE_DESCRIPTION =
  "Kazi Yousuf builds character-consistent AI video in Dhaka, Bangladesh — script to voice to generated shot to final cut, solo, start to finish.";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/kaziaiops",
  github: "https://github.com/kaziaiops",
} as const;
