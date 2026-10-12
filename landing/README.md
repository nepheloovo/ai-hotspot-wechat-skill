# 小渡 Skill Landing

Vite + React + TypeScript landing page for [ai-hotspot-wechat-skill](https://github.com/nepheloovo/ai-hotspot-wechat-skill).

## Dev

```bash
cd landing
npm install
npm run dev
```

## Build → docs/

`vite.config.ts` sets `build.outDir` to `../docs` with `emptyOutDir: true`.

```bash
cd landing
npm run build
```

This replaces `docs/index.html` and asset hashes under `docs/assets/`. GitHub Pages (or local open of `docs/index.html`) serves the built site.

## Stack

- `motion` — hero entrance animations
- `hls.js` — Mux HLS background video (+ Safari native HLS fallback)
- `lucide-react` — icons
- Tailwind CSS v3 — utility classes from the hero spec
- Instrument Sans + Instrument Serif (Google Fonts)

SKILL.md and repo README.md are not touched by this app.
