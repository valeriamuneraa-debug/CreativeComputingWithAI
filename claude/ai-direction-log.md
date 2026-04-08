AI Direction Log — AI 201: Hero Faction Screen

Entry 1 — Session 2: Infrastructure Scaffold
Session: 2
Type: Infrastructure request
What Was Asked:
Art Director provided a detailed scaffold prompt requesting a Vite + Vanilla JS project at the repo root with a specific folder structure: src/css/, src/js/, src/assets/images/, .github/workflows/, and claude/. Also requested a GitHub Actions deploy workflow targeting GitHub Pages, Vite base path set to /CreativeComputingWithAI/, minimal placeholder files for HTML/CSS/JS, four ESF documentation files (context.md, steps.md, ai-direction-log.md, records-of-resistance.md), and a labeled temporary plumbing test button to verify JS → DOM → CSS communication.
What Was Produced:
Full project scaffold — 14 files created across root, .github/workflows/, src/, and claude/. Vite config set with correct base path. Deploy workflow triggers on push to main, runs npm ci → npm run build, uploads dist/ as GitHub Pages artifact via actions/deploy-pages@v4. Plumbing test button added with console.log, DOM text change, and CSS class toggle, labeled TEMP TEST.
Corrections Made:
When AI began asking design questions about theme, mood, color palette, and number of characters, it was immediately shut down. Response: "That is my work. I will do that and hand it to you when I am ready." AI was redirected to infrastructure only.
Notes:
AI role confirmed: infrastructure only. Design Intent had not been delivered. No creative coding begun. GitHub Pages required manual configuration change in repo Settings → Pages → Source → GitHub Actions before first deploy succeeded — AI code was correct, human configuration step was required.

Entry 2 — Session 3: Design Intent Translation
Session: 3
Type: Creative coding — layout and styling
What Was Asked:
Art Director handed over complete Design Intent. Requested full HTML structure with CSS Grid layout, 5 character card slots with correct text overlay positions (name top left in GFS Didot 48px, year below in Montserrat 32px, brand label bottom right in Montserrat 24px), left/right carousel arrows, intro overlay div, and all 5 era color palettes as CSS custom properties. Also requested hover transitions — desaturated sketch-like initial state transitioning to full color at 400ms ease-in-out — plus a .selected class and era-specific spotlight effects via ::after pseudo-elements. No JavaScript to be written this session.
What Was Produced:
Full index.html semantic structure and src/css/style.css with all 5 era palettes, correct typographic hierarchy, hover filter transitions, spotlight radial gradients, and .selected class. Google Fonts imported for GFS Didot and Montserrat. Placeholder divs with era background colors used in place of real images.
Corrections Made:
Claude used "FASHION ERAS" as intro overlay placeholder text without being asked. Directed to note this for Art Director confirmation. 1990s brand label color flagged — Claude used era anchor color #1A1A1A on the light gray #B2B2B2 background which was initially invisible. Corrected to #F2F2F2 Paper White after Art Director review.
Notes:
No JavaScript written this session per Art Director instruction. All design values sourced directly from Design Intent document — AI made no color, font, or layout decisions independently.

Entry 3 — Session 4: JavaScript Carousel and Image Integration
Session: 4
Type: Interactive logic and asset integration
What Was Asked:
Wire carousel navigation with left/right arrow buttons and wrap-around logic, character selection with .selected state on click, body background color transitions between eras at 400ms, intro overlay fade sequence (2 second hold then 600ms fade), and integration of character and background images. Requested carousel position indicator — active pill shape, inactive dots, white, fixed bottom center.
What Was Produced:
Working carousel with full wrap-around navigation, smooth background color transitions, .selected class applied on click, intro overlay fade, character and background images wired via src attributes, and carousel indicator with pill/dot styling.
Corrections Made:
Claude assumed generic filenames (background-60s.png) for background images. Directed to update all references to -FINAL.png suffix to match actual asset filenames on disk. Claude also assumed generic character image names — same correction applied. 1990s brand label legibility revisited — first fix did not apply correctly due to CSS specificity conflict. Resolved using !important flag then refined to correct color after Art Director visual review.
Notes:
First Playable checkpoint achieved this session. Site live on GitHub Pages. JavaScript logic confirmed working — carousel, selection state, and intro all functional.

Entry 4 — Session 5: Character Images, Spotlights, and Visual Polish
Session: 5
Type: Visual refinement and polish
What Was Asked:
Replace placeholder divs with actual transparent PNG character images. Remove visible square container boxes behind characters. Scale characters to 80vh and position feet on runway surface. Refine spotlight effects for each era — directional rather than circular halos. Synchronize hover transition timing across all 5 characters. Fix 1960s sepia color cast in initial state.
What Was Produced:
Character images integrated, container boxes removed, characters scaled and positioned on runway. Spotlight attempts produced multiple incorrect results — circular gradient, linear beam, CSS border triangle — before Kate Moss 1990s spotlight was identified as the correct reference. That implementation replicated across 1960s, 1970s, and 1980s cards.
Corrections Made:
Multiple spotlight iterations rejected. Triangular CSS border approach produced inverted triangle — had to redirect with corrected border-bottom vs border-top logic. 1960s sepia cast corrected by changing initial filter from warm sepia values to neutral grayscale(1) contrast(0.9) brightness(1.05). Hover trigger changed from card-level to image-level hover after Art Director noted colors revealed too early when cursor moved near arrows.
Notes:
Session 5 is "The Director's Cut" — intentionally a refinement session. Git revert used to restore files when intro overlay rebuild went wrong. All character images sourced from Gemini generation sessions with remove.bg background removal.

Entry 5 — Session 5: Intro Overlay Sequence Rebuild
Session: 5
Type: Interaction design — intro sequence
What Was Asked:
Build a multi-stage intro sequence: DÉFILÉ title (existing, unchanged), then Karl Lagerfeld quote with typewriter effect centered on screen, then archive context paragraph with typewriter effect, then "Choose your era." call to action, then ENTER THE ARCHIVE button. All text must remain visible and accumulate — nothing disappears until the button is clicked. Black background, white Montserrat text, skip intro button top right.
What Was Produced:
Multiple failed iterations before correct version achieved. First attempt mixed all stages into one screen. Second attempt erased text between stages. Third attempt typed from center causing text to jump. Fourth attempt left-aligned correctly but text block was off-center. Final version rebuilt from scratch with explicit separate div structure per stage, fixed-width centered container, correct typewriter sequencing, and persistent text accumulation.
Corrections Made:
Three complete rebuilds rejected. Each rejection documented the specific failure: stage mixing, text erasure, centering misalignment. Final version approved only after all four behaviors confirmed working simultaneously. Skip intro button added after sequence confirmed — styled to match back button, no border, Montserrat 13px, top right position, cancels all async typewriter operations on click.
Notes:
DÉFILÉ title and its animation were never touched across any rebuild — Art Director enforced this boundary explicitly each time.

Entry 6 — Session 5: Character Detail Screen
Session: 5
Type: New feature — post-selection experience
What Was Asked:
Build post-selection experience triggered by clicking a character. Phase 1: 30-image flash sequence at 100ms per image, hard cuts, no transitions. Phase 2: Moodboard detail screen with character's moodboard as fullscreen background, dark overlay at 0.55 opacity, character name left side in Didot, era below in Montserrat, context description right side with typewriter effect at 20ms per character, back button top left. Music integration: era-specific MP3 plays from flash sequence start, fades in over 1000ms, loops on detail screen, fades out on back. Mute button top right of detail screen only, persists mute state across all characters.
What Was Produced:
Complete detail screen system built in selector.js and style.css. Flash sequence using DOM img element swap. Detail overlay with moodboard background, dark overlay, left/right text blocks, typewriter context, back button. Audio system with global isMuted variable, fade in/out, and mute/unmute button.
Corrections Made:
Moodboard images showed wrong characters on every card — shifted by one position. Investigation revealed moodboard files were mislabeled on disk by Art Director, not a code error. Files renamed correctly and mapping confirmed. Flash sequence glitch on Kate Moss — two images displayed longer than 100ms due to encoding silence at start of MP3 triggering overlap. Fixed by trimming silence at mp3cut.net rather than modifying code. Gisele flash images failed entirely due to special character ü in filenames — resolved by renaming files to gisele-bundchen without accent and updating flashPrefix in data array.
Notes:
Music files: Twist and Shout (1960s), Heart of Glass (1970s), Sweet Dreams (1980s), Smells Like Teen Spirit (1990s), Poker Face (2000s). All selected by Art Director. Audio preloading added to reduce playback delay on first selection.

Entry 7 — Session 5: Lauren Hutton Era-Specific Treatments
Session: 5
Type: Visual refinement — era-specific
What Was Asked:
Two specific changes for the 1970s card only: background image should be fully desaturated in initial state so green leaves and golden YSL logo do not distract, and background color should only reveal when mouse is directly over the character image (not the full card). Spotlight on hover should be a subtle warm amber-yellow rather than neutral white — specifically rgba(212, 175, 85, 0.22) fading to transparent.
What Was Produced:
Background desaturation applied via CSS filter on .era-background. JavaScript mouseenter/mouseleave event listeners on character image element to toggle .bg-active class — background only reveals on direct character image hover. Warm amber spotlight applied via ::after radial gradient on hover state.
Corrections Made:
First spotlight attempt was too yellow. Art Director directed to reduce warmth by moving halfway toward white — updated to rgba(230, 210, 160, 0.20) which reads as a soft warm white rather than a strong yellow. Background desaturation initially triggered on full card hover — corrected to image-specific mouseenter/mouseleave via JavaScript after CSS-only approach was insufficient.
Notes:
Changes scoped exclusively to 1970s card. No other eras were touched. This is the only card with JavaScript-driven background reveal rather than pure CSS hover.

Entry 8 — Gemini Prompting: Character Generation (All 5 Eras)
Session: Cross-session (conducted alongside Sessions 3–5)
Type: Asset generation — external AI tool
What Was Asked:
Generate 5 full-body CGI fashion characters in high-end editorial style — not photorealistic, not illustrated/cartoon. Each character specified with: exact model reference (Twiggy, Lauren Hutton, Christie Brinkley, Kate Moss, Gisele Bündchen), era-appropriate garment with specific colors and materials, skin/hair/eye/makeup specifications, white or transparent background, full body head to toe, single centered figure, no watermarks or text.
What Was Produced:
Multiple iterations per character. Common failures across all characters: duplicate figures generated side by side, images cropped at waist or knees, photorealistic rendering instead of CGI illustrated style, wrong background type (checkered fake transparency instead of real alpha), wrong pose lost between iterations.
Corrections Made:
Twiggy: pose corrected, hands-on-hips stance confirmed appropriate for 1960s Mod energy. Lauren Hutton: two figures generated — directed to use right figure only, then lost original pose requiring full re-prompt with anatomical pose description. Christie Brinkley: three major revision rounds — first version was casino game quality, second version cropped at waist, third version cropped dress hem. Directed to fix one element at a time per iteration. Kate Moss: rendered too old in face — directed to soften facial features, reduce age markers while keeping everything else identical. Later directed to adjust rendering style from too-illustrative toward more refined CGI to match other characters. Gisele: generated two figures in first attempt, lost pose in corrections, skirt shortened across two rounds, feet brought closer together across two rounds. All backgrounds processed through remove.bg for clean transparency.
Notes:
Art Director made all creative decisions — model selection, garment references, color specifications, pose directions, style benchmarks. Gemini executed only. Every element of the character design was specified before prompting.
