// selector.js — Carousel navigation + character selection + intro sequence + character detail

// ----------------------------------------------------------
// CHARACTER DATA
// Paths use ./src/assets/images/ — correct format for Vite dev server.
// ----------------------------------------------------------
const CHARACTERS = [
  {
    era:           '1960s',
    name:          'Twiggy',
    bgColor:       '#3E2A35',
    characterImg:  './src/assets/images/character-60s-FINAL.png',
    backgroundImg: './src/assets/images/background-60s-FINAL.png',
    flashFolder:   './src/assets/images/Twiggy/',
    flashPrefix:   'twiggy',
    moodboard:     './src/assets/images/moodboard-60s.jpg',
    audio:         './src/assets/audio/audio-60s.mp3',
    description:
      'Lesley Lawson, known simply as Twiggy, became the face of a generation that refused ' +
      'to dress like its mothers. At seventeen, her androgynous frame and graphic mod eye became ' +
      'the visual language of Swinging London. Andr\u00e9 Courr\u00e8ges gave her silhouette its ' +
      'architecture \u2014 PVC panels, geometric seams, and hemlines that stopped mid-thigh not as ' +
      'provocation but as manifesto. Fashion had never been so young, so loud, or so sure of itself.',
  },
  {
    era:           '1970s',
    name:          'Lauren Hutton',
    bgColor:       '#4A4A4A',
    characterImg:  './src/assets/images/character-70s-FINAL.png',
    backgroundImg: './src/assets/images/background-70s-FINAL.png',
    flashFolder:   './src/assets/images/LaurenHutton/',
    flashPrefix:   'lauren-hutton',
    moodboard:     './src/assets/images/moodboard-70s.jpg',
    audio:         './src/assets/audio/audio-70s.mp3',
    description:
      'Lauren Hutton brought something fashion had long feared: realness. The gap in her teeth, ' +
      'the sun in her skin, the ease with which she occupied space \u2014 she made the camera believe her. ' +
      'Yves Saint Laurent\u2019s Le Smoking gave that ease its most radical form. A tuxedo for a woman ' +
      'was not a costume. It was an argument. That a woman could dress with the authority of a man ' +
      'and remain entirely, dangerously herself.',
  },
  {
    era:           '1980s',
    name:          'Christie Brinkley',
    bgColor:       '#555B60',
    characterImg:  './src/assets/images/character-80s-FINAL.png',
    backgroundImg: './src/assets/images/background-80s-FINAL.png',
    flashFolder:   './src/assets/images/ChristieBrinkley/',
    flashPrefix:   'christie-brinkley',
    moodboard:     './src/assets/images/moodboard-80s.jpg',
    audio:         './src/assets/audio/audio-80s.mp3',
    description:
      'Christie Brinkley was not just beautiful \u2014 she was abundant. In a decade that measured ' +
      'success in excess, she embodied everything the era wanted: health, gold, volume, and a smile ' +
      'that cost nothing but stopped rooms. Gianni Versace dressed that energy in chainmail and ' +
      'Medusa hardware, turning the female body into a monument. The 1980s supermodel was not a ' +
      'woman in clothes. She was a statement of intent.',
  },
  {
    era:           '1990s',
    name:          'Kate Moss',
    bgColor:       '#B2B2B2',
    characterImg:  './src/assets/images/character-90s-FINAL.png',
    backgroundImg: './src/assets/images/background-90s-FINAL.png',
    flashFolder:   './src/assets/images/KateMoss/',
    flashPrefix:   'kate-moss',
    moodboard:     './src/assets/images/moodboard-90s.jpg',
    audio:         './src/assets/audio/audio-90s.mp3',
    description:
      'Kate Moss arrived as a correction. After a decade of athletic excess, she offered ' +
      'subtraction \u2014 pale skin, a slip of fabric, eyes that looked through you rather than at you. ' +
      'Calvin Klein understood immediately. The slip dress asked nothing of the body beneath it. ' +
      'Helmut Lang asked everything of the cut. Together they defined a minimalism so precise ' +
      'it became its own maximalism \u2014 the loudest possible silence.',
  },
  {
    era:           '2000s',
    name:          'Gisele B\u00fcndchen',
    bgColor:       '#4D5663',
    characterImg:  './src/assets/images/character-00s-FINAL.png',
    backgroundImg: './src/assets/images/background-00s-FINAL.png',
    flashFolder:   './src/assets/images/GiseleBundchen/',
    flashPrefix:   'gisele-bundchen',
    moodboard:     './src/assets/images/moodboard-00s.jpg',
    audio:         './src/assets/audio/audio-00s.mp3',
    description:
      'Gisele B\u00fcndchen walked into the early 2000s like a weather system. In an era of logomania ' +
      'and paparazzi flashbulbs, she was the only thing worth photographing. John Galliano\u2019s Dior ' +
      'was her natural habitat \u2014 theatrical, layered, historically ransacked and reassembled into ' +
      'something that had never existed before. Military braiding over lace over denim. A Saddle Bag ' +
      'swinging from a deconstructed coat. Fashion as costume. Costume as truth.',
  },
];

// ----------------------------------------------------------
// HELPERS
// ----------------------------------------------------------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Types text into textEl one character at a time.
// cursorEl blinks while typing, disappears when done.
// 28ms per character; 120ms pause after . or ,
// Pass introToken snapshot as `token` — returns early if token is invalidated.
async function typewriter(textEl, cursorEl, text, token) {
  cursorEl.classList.remove('hidden');
  for (const char of text) {
    if (introToken !== token) return;
    textEl.textContent += char;
    const delay = (char === '.' || char === ',') ? 120 : 28;
    await sleep(delay);
  }
  cursorEl.classList.add('hidden');
}

// ----------------------------------------------------------
// INTRO SEQUENCE
// DÉFILÉ stage is unchanged. Stages 1 and 2 run after it fades.
// ----------------------------------------------------------
// Shared fade-out + cleanup for both the skip button and the enter button.
async function closeIntro(overlay, fadeDuration) {
  overlay.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
  overlay.style.opacity    = '0';
  await sleep(fadeDuration);
  document.getElementById('app').style.pointerEvents = 'auto';
  overlay.style.display = 'none';
  document.body.focus();
}

async function runIntro() {
  const token = ++introToken;

  // ---- DÉFILÉ ----
  const overlay       = document.getElementById('intro-overlay');
  const defileContent = overlay.querySelector('.intro-content');
  const skipBtn       = document.getElementById('skip-intro');
  overlay.style.animation = 'none';

  // Block pointer events on the carousel while intro is visible
  document.getElementById('app').style.pointerEvents = 'none';

  // Skip button — cancels sequence and fades overlay immediately
  skipBtn.addEventListener('click', async () => {
    introToken++;  // invalidate any running typewriter or sleep checks
    await closeIntro(overlay, 400);
  }, { once: true });

  defileContent.style.transition = 'opacity 600ms ease-in-out';
  await sleep(2000);
  if (introToken !== token) return;
  defileContent.style.opacity = '0';
  await sleep(600);
  if (introToken !== token) return;
  defileContent.style.display = 'none';

  // ---- Stage 1: Quote screen ----
  const stage1      = document.getElementById('intro-stage-1');
  const s1QuoteText = document.getElementById('s1-quote-text');
  const s1QCursor   = document.getElementById('s1-q-cursor');
  const s1AttrText  = document.getElementById('s1-attr-text');
  const s1ACursor   = document.getElementById('s1-a-cursor');

  stage1.style.display = 'flex';

  await typewriter(
    s1QuoteText, s1QCursor,
    '\u201cFashion is a language that creates itself in clothes to interpret reality.\u201d',
    token
  );
  if (introToken !== token) return;
  await typewriter(s1AttrText, s1ACursor, '— Karl Lagerfeld.', token);
  if (introToken !== token) return;

  await sleep(3000);
  if (introToken !== token) return;

  // Fade out Stage 1 over 800ms
  stage1.style.transition = 'opacity 800ms ease-in-out';
  stage1.style.opacity    = '0';
  await sleep(800);
  if (introToken !== token) return;
  stage1.style.display = 'none';

  // ---- Stage 2: Archive + button screen ----
  const stage2     = document.getElementById('intro-stage-2');
  const s2BodyText = document.getElementById('s2-body-text');
  const s2BCursor  = document.getElementById('s2-b-cursor');
  const s2CtaText  = document.getElementById('s2-cta-text');
  const s2CCursor  = document.getElementById('s2-c-cursor');
  const introBtn   = document.getElementById('intro-button');

  stage2.style.display = 'flex';

  await typewriter(
    s2BodyText, s2BCursor,
    'Five decades. Five women. Five moments that changed the way the world dressed. ' +
    'This archive traces the evolution of high fashion from the geometric rebellion ' +
    'of the 1960s to the theatrical maximalism of the early 2000s \u2014 through the ' +
    'garments, the designers, and the icons who wore them.',
    token
  );
  if (introToken !== token) return;
  await typewriter(s2CtaText, s2CCursor, 'Choose your era.', token);
  if (introToken !== token) return;

  // 600ms then fade in button
  await sleep(600);
  if (introToken !== token) return;
  introBtn.style.pointerEvents = 'auto';
  introBtn.style.opacity       = '1';

  // Enter button — fade out over 800ms
  introBtn.addEventListener('click', async () => {
    introToken++;
    await closeIntro(overlay, 800);
    introBtn.blur();
  });
}

// ----------------------------------------------------------
// CHARACTER DETAIL — flash sequence + detail screen
// ----------------------------------------------------------

// Token used to cancel the intro sequence when skip is clicked.
let introToken  = 0;
// Token used to cancel an in-progress detail typewriter when back is clicked.
let detailToken = 0;

// ----------------------------------------------------------
// AUDIO
// ----------------------------------------------------------
const eraAudio = new Audio();
eraAudio.loop  = true;
let isMuted    = false;

// Smoothly ramps audio volume from `from` to `to` over `duration` ms.
async function fadeVolume(from, to, duration) {
  const steps    = 20;
  const interval = duration / steps;
  const delta    = (to - from) / steps;
  eraAudio.volume = Math.max(0, Math.min(1, from));
  for (let i = 0; i < steps; i++) {
    await sleep(interval);
    eraAudio.volume = Math.max(0, Math.min(1, eraAudio.volume + delta));
  }
}

// Probes image-00 for a character's flash set to find which extension works.
// Returns 'jpg' | 'png' | 'webp' | 'avif' (falls back to 'jpg').
async function detectFlashFormat(character) {
  const extensions = ['jpeg', 'jpg', 'png', 'webp', 'avif'];
  const base = `${character.flashFolder}${character.flashPrefix}-00`;
  for (const ext of extensions) {
    const ok = await new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `${base}.${ext}`;
    });
    if (ok) return ext;
  }
  return 'jpg';
}

// Resolves a base image path (with or without extension) to the first
// working URL, trying .jpg → .png → .webp → .avif in order.
async function resolveFormat(path) {
  const base = path.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  const extensions = ['jpeg', 'jpg', 'png', 'webp', 'avif'];
  for (const ext of extensions) {
    const url = `${base}.${ext}`;
    const ok = await new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
    if (ok) return url;
  }
  return `${base}.jpg`;
}

// Runs the 30-image hard-cut flash sequence for a character.
// All 30 img elements are injected into the DOM and decoded upfront;
// the loop shows/hides them one at a time to eliminate src-swap delay.
async function runFlash(index) {
  const character    = CHARACTERS[index];
  const flashOverlay = document.getElementById('flash-overlay');

  document.getElementById('app').style.visibility = 'hidden';
  flashOverlay.style.display = 'block';

  const ext = await detectFlashFormat(character);

  // Build 30 img elements, inject them all hidden, wait for full decode.
  const imgs = Array.from({ length: 30 }, (_, i) => {
    const num = String(i).padStart(2, '0');
    const el  = document.createElement('img');
    el.src    = `${character.flashFolder}${character.flashPrefix}-${num}.${ext}`;
    el.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none;';
    flashOverlay.appendChild(el);
    return el;
  });

  await Promise.all(imgs.map(el => new Promise(resolve => {
    if (el.complete) { resolve(); return; }
    el.onload  = resolve;
    el.onerror = resolve;
  })));

  // Start era audio at the exact moment the first frame appears.
  // Fade out any currently playing audio first (400ms), then start new track.
  if (!eraAudio.paused) {
    await fadeVolume(eraAudio.volume, 0, 400);
    eraAudio.pause();
  }
  eraAudio.src         = character.audio;
  eraAudio.currentTime = 0;
  eraAudio.volume      = 0;
  eraAudio.play().catch(() => {});
  if (!isMuted) fadeVolume(0, 0.7, 1000);  // fire-and-forget fade-in

  // Show each frame for exactly 100ms, no src swap needed.
  for (const el of imgs) {
    el.style.display = 'block';
    await sleep(100);
    el.style.display = 'none';
  }

  // Clean up injected elements and hide overlay.
  imgs.forEach(el => el.remove());
  flashOverlay.style.display = 'none';
}

// Shows the character detail screen after the flash sequence completes.
async function showDetail(index) {
  const token      = ++detailToken;
  const character  = CHARACTERS[index];

  const detailOverlay  = document.getElementById('detail-overlay');
  const detailMoodImg  = document.getElementById('detail-moodboard-img');
  const detailLeft     = document.getElementById('detail-left');
  const detailName     = document.getElementById('detail-name');
  const detailEraLabel = document.getElementById('detail-era-label');
  const detailContext  = document.getElementById('detail-context');

  // Reset from any previous visit
  detailLeft.style.transition  = 'none';
  detailLeft.style.opacity     = '0';
  detailContext.textContent    = '';

  // Resolve moodboard to the first working image format
  await sleep(100);
  const moodUrl = await resolveFormat(character.moodboard);
  detailMoodImg.src = '';
  await sleep(50);
  detailMoodImg.src           = moodUrl;
  detailName.textContent      = character.name;
  detailEraLabel.textContent  = character.era;

  // Show overlay + sync mute button label to current state
  const muteBtn = document.getElementById('detail-mute');
  muteBtn.textContent = isMuted ? '\u266a unmute' : '\u266a mute';

  detailOverlay.style.display = 'block';

  // Fade in left side (name + era) over 400ms
  await sleep(16);
  detailLeft.style.transition = 'opacity 400ms ease-in-out';
  detailLeft.style.opacity    = '1';

  // Wait for left side to fully appear, then start right-side typewriter
  await sleep(400);

  // Typewriter at 20ms/char — no cursor
  for (const ch of character.description) {
    if (detailToken !== token) return;  // cancelled by back button
    detailContext.textContent += ch;
    await sleep(20);
  }
}

// ----------------------------------------------------------
// CAROUSEL + SELECTION
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btnPrev    = document.getElementById('btn-prev');
  const btnNext    = document.getElementById('btn-next');
  const cards      = Array.from(document.querySelectorAll('.character-card'));
  const indicators = Array.from(document.querySelectorAll('.indicator'));

  let activeIndex   = 0;
  let selectedIndex = -1;   // -1 = no selection yet

  // ----------------------------------------------------------
  // WIRE IMAGES
  // Set character src and era background-image for every card.
  // Done before overlay fades so everything is ready on reveal.
  // ----------------------------------------------------------
  cards.forEach((card, i) => {
    const img = card.querySelector('.character-image-placeholder');
    img.src = CHARACTERS[i].characterImg;

    const bg = card.querySelector('.era-background');
    bg.style.backgroundImage = `url('${CHARACTERS[i].backgroundImg}')`;
  });

  // ----------------------------------------------------------
  // 1970s BACKGROUND — reveal color only on character image hover
  // ----------------------------------------------------------
  const card1970s = cards.find(c => c.dataset.era === '1970s');
  if (card1970s) {
    const img1970s = card1970s.querySelector('.character-image-placeholder');
    img1970s.addEventListener('mouseenter', () => card1970s.classList.add('bg-active'));
    img1970s.addEventListener('mouseleave', () => card1970s.classList.remove('bg-active'));
  }

  // ----------------------------------------------------------
  // BODY BACKGROUND — smooth color transition between eras
  // ----------------------------------------------------------
  document.body.style.transition       = 'background-color 400ms ease-in-out';
  document.body.style.backgroundColor  = CHARACTERS[0].bgColor;

  // Launch intro sequence (fire-and-forget — carousel wires up immediately)
  runIntro();

  // ----------------------------------------------------------
  // ACTIVATE CARD
  // Swaps .active between cards and indicators;
  // transitions body background color.
  // ----------------------------------------------------------
  function activateCard(newIndex) {
    cards[activeIndex].classList.remove('active');
    indicators[activeIndex].classList.remove('active');

    activeIndex = newIndex;

    cards[activeIndex].classList.add('active');
    indicators[activeIndex].classList.add('active');
    document.body.style.backgroundColor = CHARACTERS[activeIndex].bgColor;
  }

  // ----------------------------------------------------------
  // CAROUSEL NAVIGATION — wraps around at both ends
  // ----------------------------------------------------------
  btnPrev.addEventListener('click', () => {
    const newIndex = (activeIndex - 1 + CHARACTERS.length) % CHARACTERS.length;
    activateCard(newIndex);
  });

  btnNext.addEventListener('click', () => {
    const newIndex = (activeIndex + 1) % CHARACTERS.length;
    activateCard(newIndex);
  });

  // ----------------------------------------------------------
  // CHARACTER SELECTION + DETAIL
  // Click the character image to select, then launch flash + detail.
  // .selected state is set immediately and persists through detail view.
  // ----------------------------------------------------------
  cards.forEach((card) => {
    const img = card.querySelector('.character-image-placeholder');

    img.addEventListener('click', () => {
      const clickedIndex = parseInt(card.dataset.index, 10);

      // Deselect the previous selection if it's a different card
      if (selectedIndex !== -1 && selectedIndex !== clickedIndex) {
        cards[selectedIndex].classList.remove('selected');
      }

      selectedIndex = clickedIndex;
      card.classList.add('selected');

      // Launch flash sequence, then show detail screen
      runFlash(clickedIndex).then(() => showDetail(clickedIndex));
    });
  });

  // ----------------------------------------------------------
  // BACK BUTTON — close detail screen, return to selector
  // ----------------------------------------------------------
  const detailBack    = document.getElementById('detail-back');
  const detailOverlay = document.getElementById('detail-overlay');
  const detailLeft    = document.getElementById('detail-left');

  detailBack.addEventListener('click', async () => {
    detailToken++;  // cancel any in-progress typewriter

    // Fade out audio over 800ms (fire-and-forget alongside overlay fade)
    fadeVolume(eraAudio.volume, 0, 800).then(() => eraAudio.pause());

    // Restore selector and correct body color BEFORE overlay fades
    document.body.style.backgroundColor = CHARACTERS[activeIndex].bgColor;
    document.getElementById('app').style.visibility = 'visible';

    // Now fade out the detail overlay over the already-visible selector
    detailOverlay.style.transition = 'opacity 500ms ease-in-out';
    detailOverlay.style.opacity    = '0';
    await sleep(500);
    detailOverlay.style.display    = 'none';
    detailOverlay.style.opacity    = '';
    detailOverlay.style.transition = '';
    detailLeft.style.opacity       = '0';
  });

  // ----------------------------------------------------------
  // MUTE BUTTON
  // ----------------------------------------------------------
  const muteBtn = document.getElementById('detail-mute');
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '\u266a unmute' : '\u266a mute';
    if (isMuted) {
      eraAudio.volume = 0;
    } else {
      fadeVolume(0, 0.7, 500);
    }
  });
});
