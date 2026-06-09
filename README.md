# Happy 8 Months, Dhriti 🌸

A cinematic, interactive love letter — single-page scroll built with Vite + React + Tailwind v4, Framer Motion, GSAP/Lenis smooth scroll. Dreamy lily romance that bursts into d2creates colours at the art section.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit the words
- Letters → `src/data/letters.ts`
- Photo picks / captions → `src/data/photos.ts`
- Section copy → `src/sections/*`

## Add music (optional)
Drop `song.mp3` into `public/audio/`. The 🔈 button appears automatically; absent file = button hidden.

## Re-curate photos
Raw images live in `image_references/` (gitignored). Re-run:
```bash
node scripts/contact-sheet.mjs   # makes temp/contact-sheet.png + temp/optimized/*.webp
```
Then copy the webps you want into `public/photos/`.

## Deploy (GitHub Pages — free)
1. Create an empty repo named **dhriti** on github.com.
2. Push (see handoff notes).
3. Repo → **Settings → Pages → Source = GitHub Actions**.
4. Live at `https://devanshc777.github.io/dhriti/` in ~1 min.

`vite.config.ts` `base` is `/dhriti/`. For Vercel/root hosting, build with `VITE_BASE=/`.

## Visual tests
```bash
npm test           # Playwright, screenshots to test-results/
```
