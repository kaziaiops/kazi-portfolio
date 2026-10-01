import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import SpeedInsightsGate from "@/components/SpeedInsightsGate";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import PersonJsonLd from "@/components/PersonJsonLd";
import "./globals.css";

// Display font (Bricolage Grotesque 600, latin) is self-hosted in public/fonts and preloaded
// below, because it paints the LCP headline. @font-face lives in globals.css.
const body = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: false, // body text is not LCP; keep bandwidth for the display font
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={body.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/bricolage-grotesque-600-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <PersonJsonLd />
        <SpeedInsightsGate />
      </body>
    </html>
  );
}
