# Kazi Yousuf — Portfolio

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

Real footage and posters are already in place for the three live projects.
If you re-cut or replace any of them, keep the same filenames (or update
the `video`/`poster` fields in `src/lib/projects.ts` and the hero's `poster`
attribute in `src/components/Hero.tsx` if you rename them). The site always
degrades gracefully if a video file goes missing — see
`public/videos/README.md`.

- `hero-reel.mp4` / `hero-poster.jpg`
- `project-ceo-drama.mp4` / `project-ceo-drama.jpg`
- `project-ugc-ads.mp4` / `project-ugc-ads.jpg`
- `project-spec-ads.mp4` / `project-spec-ads.jpg`

To add a new project (e.g. once the cinematic short film goes into
production), add an entry to the `projects` array in
`src/lib/projects.ts` — title, description, tags, status
("Completed" / "In Production" / "Coming Soon"), and matching
video/poster files — the filmstrip gallery renders whatever's in that
array.

## Deploy to Vercel

Option A — import from GitHub:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Deploy.

Option B — Vercel CLI:

```bash
npm i -g vercel
vercel
```

No environment variables, backend, or third-party services are required —
the site is fully static/client-rendered aside from Next's own build.
