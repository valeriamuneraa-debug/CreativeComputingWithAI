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
**Session 3 complete.** HTML structure and CSS layout built from Design Intent.

- `index.html` — full semantic structure: intro overlay, 5 character cards, left/right arrows, text overlays
- `src/css/style.css` — all 5 era palettes as CSS custom properties, hover transitions, `.selected` class, intro animation
- `src/main.js` — test scaffold removed; clean entry point
- `src/js/selector.js` — untouched; JS logic deferred to Session 4

**Art Director confirmed:**
- Intro overlay copy: DÉFILÉ
- 1990s text color: #1A1A1A on #B2B2B2 — confirmed correct

## Next Steps
1. Session 4 — Wire carousel logic in `src/js/selector.js` (arrow navigation, `.active` toggle, `.selected` state)
2. Session 4 or later — Replace placeholder divs with real character images
