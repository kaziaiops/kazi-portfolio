import { CONTACT } from "@/lib/site";

export const BRIEF_TYPES = [
  "AI UGC / talking-head ads",
  "Product & spec ads",
  "Character-driven short-form video",
  "Explainer & narrative video",
  "Something else",
];
export const BRIEF_LENGTHS = ["Under 30 seconds", "30 to 60 seconds", "1 to 2 minutes", "Over 2 minutes"];
export const BRIEF_PLATFORMS = [
  "Instagram Reels",
  "TikTok",
  "YouTube Shorts",
  "YouTube",
  "LinkedIn",
  "My website",
  "Other",
];

const SUBJECT = "Project brief";
export const BRIEF_GREETING = "Hi Kazi, I'd like a quote for a video project.";

export function buildBriefMessage(f: FormData) {
  const get = (k: string) => String(f.get(k) ?? "").trim();
  const lines = [
    BRIEF_GREETING,
    "",
    `Project type: ${get("type")}`,
    `Length: ${get("length") || "Not sure yet"}`,
    `Deadline: ${get("deadline") || "No fixed date"}`,
    `Platform: ${get("platform") || "Not sure yet"}`,
    `Brief: ${get("brief")}`,
  ];
  if (get("name")) lines.push("", `Thanks, ${get("name")}`);
  return lines.join("\n");
}

export const mailtoUrl = (body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`;
export const whatsappUrl = (body?: string) =>
  `https://wa.me/${CONTACT.whatsappDigits}${body ? `?text=${encodeURIComponent(body)}` : ""}`;
