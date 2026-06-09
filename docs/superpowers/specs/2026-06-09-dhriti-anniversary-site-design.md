# Happy 8 Months, Dhriti — Anniversary Site Design

**Date:** 2026-06-09
**For:** Dhriti (8-month anniversary) — from Devansh
**Goal:** A cinematic, interactive, romantic single-page scroll experience. Dreamy lily romance lead; her d2creates art-brand colors burst in the art section. Must look stunning, feel alive, and never break on free static hosting.

## Tech Stack (all static → GitHub Pages)
- **Vite + React + TypeScript + Tailwind CSS**
- **Framer Motion** — component/UI motion, reveals, letter unfolds
- **GSAP + ScrollTrigger** — scroll-pinned choreography, parallax, lily bloom progress
- **Lenis** — smooth scroll
- **Lily bloom = animated SVG/CSS** (NOT a 3D GLTF). Sketchfab lily is a *look* reference only; heavy `.glb` is the top cause of GitHub Pages breakage. SVG petal-unfurl is gorgeous, ~0 weight, never fails. Floating petal particles (DOM/canvas) for depth.
- **Photos:** curate best ~20–25 from 75 raw; resize/compress; lazy-load.
- **Audio:** soft royalty-free instrumental, OFF by default (autoplay policy), visible mute/play toggle.
- **Playwright** — visual QA screenshots at mobile/tablet/desktop before ship.
- **`temp/`** (gitignored) — raw photos, build junk, old `dhriti_surprise.pdf`, unoptimized assets.

## Palette
- ivory `#FAF6F0` · blush `#E8B4B8` · sage `#A8BBA0` · gold `#C9A24B` · ink `#3A3238`
- Art section override → d2 brights: hot pink, teal, sunny yellow, purple.

## Experience — one vertical cinematic scroll
| # | Section | Beats |
|---|---------|-------|
| 0 | Bud intro | Closed lily bud + "Happy 8 Months" → tap to bloom → music prompt |
| 1 | Hero | Lily blooms, her name, floating petals, "i love you the mostest" |
| 2 | Your eyes | Portrait + compliment: "big and small at the same time" |
| 3 | Art journey | Bursts into d2creates colors; workshop photos; "a smashing success"; proud; link → instagram.com/d2creates/ |
| 4 | Letters | 4 sealed lily-envelopes → click → handwritten-style letter unfolds |
| 5 | The call | Night/stars; "best sleep I ever got"; the bad college day |
| 6 | Our dream | Parallax home by beaches AND hills; kids with your eyes |
| 7 | Gallery | Draggable film-polaroids of the two of them; scattered/masonry |
| 8 | Finale | "i love love love you so · the mostest" → petal rain → replay |

## Letters (4, medium length, drafted by Devansh-via-Claude, he edits)
1. **Your art journey** — pride, the workshop success, watching her grow
2. **The night we slept on call** — her bad day, his bad college day, best sleep, what it meant
3. **Your eyes** — the compliment, "I want our kids to have them"
4. **The mother you'll be** — kids, the home, the future together

## Architecture / units
- `src/sections/*` — one component per section above, each self-contained, own motion.
- `src/components/` — `LilyBloom`, `PetalField`, `Polaroid`, `Letter`, `AudioToggle`, `ScrollCue`, `RevealText`.
- `src/data/letters.ts` — letter copy (easy to edit).
- `src/data/photos.ts` — curated photo manifest (src, alt, caption, section).
- `src/lib/` — Lenis + GSAP setup, reduced-motion guard.
- `public/` — optimized images, audio, favicon.

## Deploy
- `git init` (personal identity auto). `.github/workflows/deploy.yml` → build + deploy to Pages on push to main.
- `vite.config` base = `/dhriti/` for project Pages URL.
- Devansh: create empty GitHub repo, push, set Pages source = GitHub Actions. Live at `devanshc777.github.io/dhriti`.

## Quality bars
- Reduced-motion respected (prefers-reduced-motion → calm fallback).
- Mobile-first; verify every section at 390 / 768 / 1440 via Playwright.
- No external runtime deps that can 404 (no CDN-only 3D, fonts self-hosted or Google Fonts with fallback).
- Lighthouse-friendly: lazy images, compressed assets, no layout shift.

## Out of scope (YAGNI)
- Backend, CMS, auth, analytics, real 3D engine, multi-page routing.

## References
- Noomo ValenTime (Awwwards) — scroll love-story, floating petals
- fromanother.love — cinematic film pacing
- Lily bloom: codepen JTBennett/YwpBaQ, ShadowShahriar/vYWXKpK
- impeccable skill (`~/.claude/skills/impeccable/`) for craft/animate/polish passes
