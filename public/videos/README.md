Site videos are now served as YouTube (Unlisted) embeds; the IDs live in
`src/lib/projects.ts` (and `HERO_REEL_ID` for the hero). Nothing in the app
references the local .mp4 files here any more — they are kept only as source
files and are git-ignored.
