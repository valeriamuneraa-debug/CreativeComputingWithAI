# Project Context — AI 201: Hero Faction Screen

## Course
- **Course:** AI 201, Spring 2026
- **Institution:** SCAD (Savannah College of Art and Design)
- **Professor:** Tim Lindsey

## Project
**Hero Faction Screen** — A fashion era character selector. The user will be presented with a screen allowing them to choose a hero character from different fashion eras/factions. This is a creative computing project at the intersection of design and code.

## Roles
- **Art Director / Orchestrator (Human):** Owns all design decisions — colors, fonts, layout, theme, mood, characters, visual elements. Writes Design Intent before any creative coding begins.
- **Engineering Team (AI):** Builds infrastructure only until Design Intent is handed over. Makes no design decisions.

## Tech Stack
- **JavaScript:** Vanilla JS (no frameworks)
- **Bundler:** Vite
- **Styling:** CSS (Grid layout expected)
- **Deployment:** GitHub Pages via GitHub Actions
- **Repo:** https://github.com/valeriamuneraa-debug/CreativeComputingWithAI.git

## Folder Map
```
/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── main.js
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── selector.js
│   └── assets/
│       └── images/
└── claude/
    ├── context.md
    ├── steps.md
    ├── ai-direction-log.md
    └── records-of-resistance.md
```

## Key Rules
1. **Human writes Design Intent first.** No creative coding begins until the Art Director delivers it.
2. **AI builds infrastructure only** until Design Intent is handed over.
3. **AI makes no design decisions** — no colors, fonts, layouts, themes, moods, character choices, or visual elements.
4. If the AI is uncertain whether something is a design decision, it treats it as one and waits for direction.

## Current Status
**Session 5 complete.** Character detail screen added.

### Active files
- `src/js/selector.js` — carousel navigation, character selection, intro overlay timing, image wiring, flash sequence, detail screen
- `index.html` — `#flash-overlay` and `#detail-overlay` added before `</body>`
- `src/css/style.css` — flash overlay styles, detail overlay styles (moodboard, left panel, right panel, back button)
- `src/main.js` — unchanged

### Intro overlay (completed, do not modify)
- DÉFILÉ fades in via CSS animation; overlay backdrop stays opaque throughout
- Stage 1: quote typewriter → 3s hold → fade to black
- Stage 2: archive body typewriter → "Choose your era." → ENTER THE ARCHIVE button
- Button click fades the overlay, reveals character selector

### Character detail flow (Session 5)
On character image click:
1. **Flash sequence** (`#flash-overlay`, z-index 3000) — 30 images at 100ms each, hard cuts, object-fit cover
2. **Detail screen** (`#detail-overlay`, z-index 2000):
   - Moodboard background (object-fit cover) + black dim overlay (rgba 0,0,0,0.55)
   - Left: character name (GFS Didot 52px) + era (Montserrat 18px) fade in over 400ms
   - Right: context description typewriter at 20ms/char, no cursor, starts after 400ms
   - ← BACK button: fades detail screen over 500ms, returns to selector

### Image paths
- Characters: `./src/assets/images/character-[era]-FINAL.png`
- Backgrounds: `./src/assets/images/background-[era]-FINAL.png`
- Flash images: `./src/assets/images/[Folder]/[prefix]-00.jpg` through `[prefix]-29.jpg`
  - Twiggy/twiggy-NN.jpg, LaurenHutton/lauren-hutton-NN.jpg, ChristieBrinkley/christie-brinkley-NN.jpg
  - KateMoss/kate-moss-NN.jpg, Gisele/gisele-NN.jpg
- Moodboards: `./src/assets/images/moodboard-[era].jpg`

### CHARACTERS array keys
`era`, `name`, `bgColor`, `characterImg`, `backgroundImg`, `flashFolder`, `flashPrefix`, `moodboard`, `description`

## Next Steps
- Session 6 TBD — review live build, refinements, or additional sessions as directed
