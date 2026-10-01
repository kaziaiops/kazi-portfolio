"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { youtubeEmbedUrl, youtubeThumbnails } from "@/lib/projects";

interface VideoFacadeProps {
  youtubeId: string;
  title: string;
  /** Local poster, tried first (sharper than YouTube thumbnails); YouTube thumbnails are the fallback. */
  poster: string;
  aspect: "portrait" | "landscape";
  sizes: string;
  /** Mount the player immediately — for use right after a user click (e.g. a modal). */
  autoLoad?: boolean;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Thumbnail + play button. The youtube-nocookie iframe mounts only on click. */
export default function VideoFacade({
  youtubeId,
  title,
  poster,
  aspect,
  sizes,
  autoLoad = false,
  priority = false,
  className = "",
  style,
}: VideoFacadeProps) {
  const [active, setActive] = useState(autoLoad);
  // index into [local poster, maxres, hq]; falls through on load error
  const [thumbIndex, setThumbIndex] = useState(0);
  const thumbs = youtubeThumbnails(youtubeId, poster);

  const boxStyle: CSSProperties = {
    aspectRatio: aspect === "portrait" ? "9 / 16" : "16 / 9",
    ...style,
  };

  return (
    <div
      className={`glass glass-glow relative overflow-hidden bg-surface ${className}`}
      style={boxStyle}
    >
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={youtubeEmbedUrl(youtubeId)}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <Image
            src={thumbs[thumbIndex] ?? thumbs[thumbs.length - 1]}
            alt={`${title} — video thumbnail`}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setThumbIndex((i) => i + 1)}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/20"
            aria-hidden
          />
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/70 bg-bg/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-gold">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-gold" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
