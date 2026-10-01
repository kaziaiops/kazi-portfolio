"use client";

import { useRef, useState } from "react";
import { SHOWREEL } from "@/lib/projects";
import VideoFacade from "./VideoFacade";

/** "Watch Showreel" button + modal. The player mounts only after the click and unmounts on close. */
export default function ShowreelDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm text-gold transition-colors hover:border-gold hover:bg-gold/20"
      >
        <span
          className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-gold"
          aria-hidden
        />
        Watch Showreel
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label="Showreel"
        className="m-auto w-full max-w-none bg-transparent p-4 text-ink backdrop:bg-bg/85 backdrop:backdrop-blur-sm"
      >
        <div className="mx-auto flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={close}
            className="self-end rounded-full border border-ink/20 px-4 py-1.5 text-sm text-ink/80 transition-colors hover:border-gold hover:text-gold"
          >
            Close
          </button>
          {open && (
            <VideoFacade
              youtubeId={SHOWREEL.youtubeId}
              title={SHOWREEL.title}
              poster={SHOWREEL.poster}
              aspect={SHOWREEL.aspect}
              sizes="(max-width: 640px) 92vw, 440px"
              autoLoad
              style={{ height: "min(80svh, 760px)", maxWidth: "92vw" }}
            />
          )}
        </div>
      </dialog>
    </>
  );
}
