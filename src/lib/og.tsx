import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Branded dark/amber card shared by the home and project OG images. */
export function renderOgImage(title: string, kicker: string, footer: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 100% at 20% 0%, #1a1e28 0%, #07080B 62%)",
          color: "#ECE9E2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#E9A94B", letterSpacing: 2 }}>
          {kicker.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? 64 : 80,
            lineHeight: 1.08,
            color: "#ECE9E2",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#B9B6AE" }}>
          {footer}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
