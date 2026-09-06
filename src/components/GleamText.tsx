import type { CSSProperties } from "react";

/**
 * Splits text into words, each independently animated so the gold gradient
 * flashes bright word-by-word in sequence, then pauses before looping —
 * rather than one continuous sweep across the whole string.
 */
export default function GleamText({ text }: { text: string }) {
  const words = text.split(" ");
  const step = 0.35;
  const total = words.length * step + 1.4;

  const nodes: React.ReactNode[] = [];
  words.forEach((word, i) => {
    nodes.push(
      <span
        key={`w-${i}`}
        className="gleam-word"
        style={
          {
            "--dur": `${total}s`,
            "--delay": `${i * step}s`,
          } as CSSProperties
        }
      >
        {word}
      </span>,
    );
    if (i < words.length - 1) nodes.push(" ");
  });

  return <>{nodes}</>;
}
