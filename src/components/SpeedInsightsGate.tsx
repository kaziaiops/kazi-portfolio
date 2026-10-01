"use client";

import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Speed Insights only exists on Vercel deployments; skip it on localhost to avoid a 404 script request. */
export default function SpeedInsightsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    setEnabled(host !== "localhost" && host !== "127.0.0.1" && host !== "[::1]");
  }, []);

  return enabled ? <SpeedInsights /> : null;
}
