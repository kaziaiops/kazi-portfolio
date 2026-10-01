import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Kazi Yousuf",
  url: SITE_URL,
  jobTitle: "AI Video Creator",
  description:
    "AI video creator in Dhaka, Bangladesh producing character-consistent video (voice, generated shots and final cut) solo, from the client's script.",
  email: `mailto:${CONTACT.email}`,
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

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};

const json = (data: object) => JSON.stringify(data).replace(/</g, "\u003c");

/** Person + WebSite. No VideoObject: the videos are unlisted, so it would earn nothing. */
export default function PersonJsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(website) }} />
    </>
  );
}
