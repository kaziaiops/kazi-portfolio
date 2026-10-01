import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Kazi Yousuf",
  url: SITE_URL,
  jobTitle: "AI Video Creator",
  description:
    "AI video creator in Dhaka, Bangladesh producing character-consistent video — script, voice, generated shots and final cut — solo.",
  email: "mailto:kaziyy999@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: [
    "AI video production",
    "Character-consistent AI video",
    "AI UGC and talking-head ads",
    "Spec ads",
    "Vertical short-form video",
    "Veo 3.1",
    "Wan 2.2",
    "ComfyUI",
  ],
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\u003c"),
      }}
    />
  );
}
