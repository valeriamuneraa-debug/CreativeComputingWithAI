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
async function typewriter(textEl, cursorEl, text) {
  cursorEl.classList.remove('hidden');
  for (const char of text) {
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
async function runIntro() {
  // ---- DÉFILÉ ----
  // Cancel the CSS exit animation on the overlay — JS drives everything.
  // The overlay itself NEVER changes opacity here; only its content fades.
  const overlay       = document.getElementById('intro-overlay');
  const defileContent = overlay.querySelector('.intro-content');
  overlay.style.animation = 'none';
  defileContent.style.transition = 'opacity 600ms ease-in-out';
  await sleep(2000);
  defileContent.style.opacity = '0';
  await sleep(600);
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
    '\u201cFashion is a language that creates itself in clothes to interpret reality.\u201d'
  );
  await typewriter(s1AttrText, s1ACursor, '— Karl Lagerfeld.');

  // 3-second hold — cursors already hidden by typewriter
  await sleep(3000);

  // Fade out Stage 1 over 800ms
  stage1.style.transition = 'opacity 800ms ease-in-out';
  stage1.style.opacity    = '0';
  await sleep(800);
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
    'garments, the designers, and the icons who wore them.'
  );
  await typewriter(s2CtaText, s2CCursor, 'Choose your era.');

  // 600ms then fade in button
  await sleep(600);
  introBtn.style.pointerEvents = 'auto';
  introBtn.style.opacity       = '1';

  // Button click — fade out the entire overlay over 800ms, reveal character selector
  introBtn.addEventListener('click', async () => {
    overlay.style.transition = 'opacity 800ms ease-in-out';
    overlay.style.opacity    = '0';
    await sleep(800);
    overlay.style.display = 'none';
  });
}

// ----------------------------------------------------------
// CHARACTER DETAIL — flash sequence + detail screen
// ----------------------------------------------------------

// Token used to cancel an in-progress detail typewriter when back is clicked.
let detailToken = 0;

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
// Detects the working image format once before the loop.
async function runFlash(index) {
  const character    = CHARACTERS[index];
  const flashOverlay = document.getElementById('flash-overlay');
  const flashImg     = document.getElementById('flash-img');

  document.getElementById('app').style.visibility = 'hidden';
  flashOverlay.style.display = 'block';

  const ext = await detectFlashFormat(character);

  for (let i = 0; i < 30; i++) {
    const num = String(i).padStart(2, '0');
    flashImg.src = `${character.flashFolder}${character.flashPrefix}-${num}.${ext}`;
    await sleep(100);
  }

  flashImg.src = '';
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

  // Show overlay
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
});
