import Image from "next/image";
import Link from "next/link";
import { SHOWREEL } from "@/lib/projects";
import { HERO } from "@/lib/site";
import ShowreelDialog from "./ShowreelDialog";

/**
 * Server component, no entrance animation: the headline and poster paint on the
 * first frame (LCP). The only motion is a one-time warm light pass over the poster.
 * TODO: swap the poster for the real showreel loop (muted, <5MB, lazy, with poster).
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-bg"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,rgb(var(--bg-3))_0%,rgb(var(--bg-0))_60%)]"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-6 pb-16 pt-24 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-16">
        {/* poster: dimmed backdrop on mobile, tilted film-stack card on desktop */}
        <div
          className="absolute inset-0 opacity-30 lg:static lg:order-2 lg:opacity-100 lg:[perspective:1400px]"
          aria-hidden
        >
          <div className="h-full w-full lg:mx-auto lg:h-[min(68dvh,620px)] lg:w-auto lg:aspect-[9/14] lg:[transform:rotateY(-10deg)_rotateX(3deg)]">
            <div className="film-card h-full w-full">
              <div className="light-pass relative h-full w-full overflow-hidden lg:rounded-surface lg:border lg:border-white/10 lg:shadow-depth-3">
                <Image
                  src={SHOWREEL.poster}
                  alt=""
                  fill
                  priority
                  quality={70}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent lg:from-bg/50" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 lg:order-1">
          <p className="mb-4 text-sm text-ink-2 sm:text-base">Kazi Yousuf, Dhaka, Bangladesh</p>
          <h1 className="font-display text-display font-semibold">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lead text-ink-2">
            {HERO.subhead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn btn-primary">
              Start a project
            </Link>
            <ShowreelDialog />
          </div>
        </div>
      </div>
    </section>
  );
}
