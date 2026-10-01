# Kazi Yousuf | Portfolio

Personal portfolio for Kazi Yousuf, an AI video creator in Dhaka, Bangladesh.
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and
React Three Fiber for the ambient 3D layer behind the work section.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Swap in real assets

Videos are YouTube (Unlisted) embeds behind a click-to-load `VideoFacade`
(thumbnail + play button; the `youtube-nocookie.com` iframe mounts only on
click). To replace one, update its `youtubeId` in `src/lib/projects.ts`
(hero showreel: `SHOWREEL`). Local poster images in `public/images/` are the
fallback if a YouTube thumbnail fails.
