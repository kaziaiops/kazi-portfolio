import { renderOgImage, OG_SIZE } from "@/lib/og";
import { HERO } from "@/lib/site";

export const alt = "Kazi Yousuf | AI Video Creator";
export const size = OG_SIZE;
export const contentType = "image/png";
export const runtime = "edge";

export default function Image() {
  return renderOgImage(
    HERO.headline,
    "Kazi Yousuf | AI Video Creator",
    "Dhaka, Bangladesh · Script to voice to shot to final cut",
  );
}
