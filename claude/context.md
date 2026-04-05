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
**Session 4 complete.** All interactivity wired. Character and background images integrated.

- `src/js/selector.js` — carousel navigation, character selection, intro overlay timing, image wiring
- `index.html` — placeholder divs replaced with `<img>` tags; `.era-background` div added to each card
- `src/css/style.css` — two required additions: opacity-based card fade (display:none is not animatable), `.era-background` layer, `img.character-image-placeholder` rules
- `src/main.js` — unchanged

**Image files in use:**
- Characters: character-60s-rendered.png, character-70s.png, character-80s.png, character-90s.png, character-00s.png
- Backgrounds: background-60s-FINAL.png, background-70s-FINAL.png, background-80s-FINAL.png, background-90s-FINAL.png, background-00s-FINAL.png
- All paths resolved via `new URL('../assets/images/...', import.meta.url).href` for Vite build compatibility

**Art Director confirmed:**
- Intro overlay copy: DÉFILÉ
- 1960s character: character-60s-rendered.png (not line version)
- 1990s text color: #1A1A1A on #B2B2B2 — confirmed correct

## Next Steps
- Session 5 TBD — review live build, refinements, or additional sessions as directed
