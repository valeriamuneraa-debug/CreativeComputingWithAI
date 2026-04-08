// selector.js — Carousel navigation + character selection + intro sequence + character detail

// ----------------------------------------------------------
// ASSET IMPORTS — processed by Vite for correct production paths
// ----------------------------------------------------------
import char60s  from '../assets/images/character-60s-FINAL.png'
import char70s  from '../assets/images/character-70s-FINAL.png'
import char80s  from '../assets/images/character-80s-FINAL.png'
import char90s  from '../assets/images/character-90s-FINAL.png'
import char00s  from '../assets/images/character-00s-FINAL.png'
import bg60s    from '../assets/images/background-60s-FINAL.png'
import bg70s    from '../assets/images/background-70s-FINAL.png'
import bg80s    from '../assets/images/background-80s-FINAL.png'
import bg90s    from '../assets/images/background-90s-FINAL.png'
import bg00s    from '../assets/images/background-00s-FINAL.png'
import mood60s  from '../assets/images/moodboard-60s.jpg'
import mood70s  from '../assets/images/moodboard-70s.jpg'
import mood80s  from '../assets/images/moodboard-80s.jpg'
import mood90s  from '../assets/images/moodboard-90s.jpg'
import mood00s  from '../assets/images/moodboard-00s.jpg'
import audio60s from '../assets/audio/audio-60s.mp3'
import audio70s from '../assets/audio/audio-70s.mp3'
import audio80s from '../assets/audio/audio-80s.mp3'
import audio90s from '../assets/audio/audio-90s.mp3'
import audio00s from '../assets/audio/audio-00s.mp3'

import twiggy00 from '../assets/images/Twiggy/twiggy-00.jpeg'
import twiggy01 from '../assets/images/Twiggy/twiggy-01.jpeg'
import twiggy02 from '../assets/images/Twiggy/twiggy-02.jpeg'
import twiggy03 from '../assets/images/Twiggy/twiggy-03.jpeg'
import twiggy04 from '../assets/images/Twiggy/twiggy-04.jpeg'
import twiggy05 from '../assets/images/Twiggy/twiggy-05.jpeg'
import twiggy06 from '../assets/images/Twiggy/twiggy-06.jpeg'
import twiggy07 from '../assets/images/Twiggy/twiggy-07.jpeg'
import twiggy08 from '../assets/images/Twiggy/twiggy-08.jpeg'
import twiggy09 from '../assets/images/Twiggy/twiggy-09.jpeg'
import twiggy10 from '../assets/images/Twiggy/twiggy-10.jpeg'
import twiggy11 from '../assets/images/Twiggy/twiggy-11.jpeg'
import twiggy12 from '../assets/images/Twiggy/twiggy-12.jpeg'
import twiggy13 from '../assets/images/Twiggy/twiggy-13.jpeg'
import twiggy14 from '../assets/images/Twiggy/twiggy-14.jpeg'
import twiggy15 from '../assets/images/Twiggy/twiggy-15.jpeg'
import twiggy16 from '../assets/images/Twiggy/twiggy-16.jpeg'
import twiggy17 from '../assets/images/Twiggy/twiggy-17.jpeg'
import twiggy18 from '../assets/images/Twiggy/twiggy-18.jpeg'
import twiggy19 from '../assets/images/Twiggy/twiggy-19.jpeg'
import twiggy20 from '../assets/images/Twiggy/twiggy-20.jpeg'
import twiggy21 from '../assets/images/Twiggy/twiggy-21.jpeg'
import twiggy22 from '../assets/images/Twiggy/twiggy-22.jpeg'
import twiggy23 from '../assets/images/Twiggy/twiggy-23.jpeg'
import twiggy24 from '../assets/images/Twiggy/twiggy-24.jpeg'
import twiggy25 from '../assets/images/Twiggy/twiggy-25.jpeg'
import twiggy26 from '../assets/images/Twiggy/twiggy-26.jpeg'
import twiggy27 from '../assets/images/Twiggy/twiggy-27.jpeg'
import twiggy28 from '../assets/images/Twiggy/twiggy-28.jpeg'
import twiggy29 from '../assets/images/Twiggy/twiggy-29.jpeg'

import laurenHutton00 from '../assets/images/LaurenHutton/lauren-hutton-00.jpeg'
import laurenHutton01 from '../assets/images/LaurenHutton/lauren-hutton-01.jpeg'
import laurenHutton02 from '../assets/images/LaurenHutton/lauren-hutton-02.jpeg'
import laurenHutton03 from '../assets/images/LaurenHutton/lauren-hutton-03.jpeg'
import laurenHutton04 from '../assets/images/LaurenHutton/lauren-hutton-04.jpeg'
import laurenHutton05 from '../assets/images/LaurenHutton/lauren-hutton-05.jpeg'
import laurenHutton06 from '../assets/images/LaurenHutton/lauren-hutton-06.jpeg'
import laurenHutton07 from '../assets/images/LaurenHutton/lauren-hutton-07.jpeg'
import laurenHutton08 from '../assets/images/LaurenHutton/lauren-hutton-08.jpeg'
import laurenHutton09 from '../assets/images/LaurenHutton/lauren-hutton-09.jpeg'
import laurenHutton10 from '../assets/images/LaurenHutton/lauren-hutton-10.jpeg'
import laurenHutton11 from '../assets/images/LaurenHutton/lauren-hutton-11.jpeg'
import laurenHutton12 from '../assets/images/LaurenHutton/lauren-hutton-12.jpeg'
import laurenHutton13 from '../assets/images/LaurenHutton/lauren-hutton-13.jpeg'
import laurenHutton14 from '../assets/images/LaurenHutton/lauren-hutton-14.jpeg'
import laurenHutton15 from '../assets/images/LaurenHutton/lauren-hutton-15.jpeg'
import laurenHutton16 from '../assets/images/LaurenHutton/lauren-hutton-16.jpeg'
import laurenHutton17 from '../assets/images/LaurenHutton/lauren-hutton-17.jpeg'
import laurenHutton18 from '../assets/images/LaurenHutton/lauren-hutton-18.jpeg'
import laurenHutton19 from '../assets/images/LaurenHutton/lauren-hutton-19.jpeg'
import laurenHutton20 from '../assets/images/LaurenHutton/lauren-hutton-20.jpeg'
import laurenHutton21 from '../assets/images/LaurenHutton/lauren-hutton-21.jpeg'
import laurenHutton22 from '../assets/images/LaurenHutton/lauren-hutton-22.jpeg'
import laurenHutton23 from '../assets/images/LaurenHutton/lauren-hutton-23.jpeg'
import laurenHutton24 from '../assets/images/LaurenHutton/lauren-hutton-24.jpeg'
import laurenHutton25 from '../assets/images/LaurenHutton/lauren-hutton-25.jpeg'
import laurenHutton26 from '../assets/images/LaurenHutton/lauren-hutton-26.jpeg'
import laurenHutton27 from '../assets/images/LaurenHutton/lauren-hutton-27.jpeg'
import laurenHutton28 from '../assets/images/LaurenHutton/lauren-hutton-28.jpeg'
import laurenHutton29 from '../assets/images/LaurenHutton/lauren-hutton-29.jpeg'

import christieBrinkley00 from '../assets/images/ChristieBrinkley/christie-brinkley-00.jpeg'
import christieBrinkley01 from '../assets/images/ChristieBrinkley/christie-brinkley-01.jpeg'
import christieBrinkley02 from '../assets/images/ChristieBrinkley/christie-brinkley-02.jpeg'
import christieBrinkley03 from '../assets/images/ChristieBrinkley/christie-brinkley-03.jpeg'
import christieBrinkley04 from '../assets/images/ChristieBrinkley/christie-brinkley-04.jpeg'
import christieBrinkley05 from '../assets/images/ChristieBrinkley/christie-brinkley-05.jpeg'
import christieBrinkley06 from '../assets/images/ChristieBrinkley/christie-brinkley-06.jpeg'
import christieBrinkley07 from '../assets/images/ChristieBrinkley/christie-brinkley-07.jpeg'
import christieBrinkley08 from '../assets/images/ChristieBrinkley/christie-brinkley-08.jpeg'
import christieBrinkley09 from '../assets/images/ChristieBrinkley/christie-brinkley-09.jpeg'
import christieBrinkley10 from '../assets/images/ChristieBrinkley/christie-brinkley-10.jpeg'
import christieBrinkley11 from '../assets/images/ChristieBrinkley/christie-brinkley-11.jpeg'
import christieBrinkley12 from '../assets/images/ChristieBrinkley/christie-brinkley-12.jpeg'
import christieBrinkley13 from '../assets/images/ChristieBrinkley/christie-brinkley-13.jpeg'
import christieBrinkley14 from '../assets/images/ChristieBrinkley/christie-brinkley-14.jpeg'
import christieBrinkley15 from '../assets/images/ChristieBrinkley/christie-brinkley-15.jpeg'
import christieBrinkley16 from '../assets/images/ChristieBrinkley/christie-brinkley-16.jpeg'
import christieBrinkley17 from '../assets/images/ChristieBrinkley/christie-brinkley-17.jpeg'
import christieBrinkley18 from '../assets/images/ChristieBrinkley/christie-brinkley-18.jpeg'
import christieBrinkley19 from '../assets/images/ChristieBrinkley/christie-brinkley-19.jpeg'
import christieBrinkley20 from '../assets/images/ChristieBrinkley/christie-brinkley-20.jpeg'
import christieBrinkley21 from '../assets/images/ChristieBrinkley/christie-brinkley-21.jpeg'
import christieBrinkley22 from '../assets/images/ChristieBrinkley/christie-brinkley-22.jpeg'
import christieBrinkley23 from '../assets/images/ChristieBrinkley/christie-brinkley-23.jpeg'
import christieBrinkley24 from '../assets/images/ChristieBrinkley/christie-brinkley-24.jpeg'
import christieBrinkley25 from '../assets/images/ChristieBrinkley/christie-brinkley-25.jpeg'
import christieBrinkley26 from '../assets/images/ChristieBrinkley/christie-brinkley-26.jpeg'
import christieBrinkley27 from '../assets/images/ChristieBrinkley/christie-brinkley-27.jpeg'
import christieBrinkley28 from '../assets/images/ChristieBrinkley/christie-brinkley-28.jpeg'
import christieBrinkley29 from '../assets/images/ChristieBrinkley/christie-brinkley-29.jpeg'

import kateMoss00 from '../assets/images/KateMoss/kate-moss-00.jpeg'
import kateMoss01 from '../assets/images/KateMoss/kate-moss-01.jpeg'
import kateMoss02 from '../assets/images/KateMoss/kate-moss-02.jpeg'
import kateMoss03 from '../assets/images/KateMoss/kate-moss-03.jpeg'
import kateMoss04 from '../assets/images/KateMoss/kate-moss-04.jpeg'
import kateMoss05 from '../assets/images/KateMoss/kate-moss-05.jpeg'
import kateMoss06 from '../assets/images/KateMoss/kate-moss-06.jpeg'
import kateMoss07 from '../assets/images/KateMoss/kate-moss-07.jpeg'
import kateMoss08 from '../assets/images/KateMoss/kate-moss-08.jpeg'
import kateMoss09 from '../assets/images/KateMoss/kate-moss-09.jpeg'
import kateMoss10 from '../assets/images/KateMoss/kate-moss-10.jpeg'
import kateMoss11 from '../assets/images/KateMoss/kate-moss-11.jpeg'
import kateMoss12 from '../assets/images/KateMoss/kate-moss-12.jpeg'
import kateMoss13 from '../assets/images/KateMoss/kate-moss-13.jpeg'
import kateMoss14 from '../assets/images/KateMoss/kate-moss-14.jpeg'
import kateMoss15 from '../assets/images/KateMoss/kate-moss-15.jpeg'
import kateMoss16 from '../assets/images/KateMoss/kate-moss-16.jpeg'
import kateMoss17 from '../assets/images/KateMoss/kate-moss-17.jpeg'
import kateMoss18 from '../assets/images/KateMoss/kate-moss-18.jpeg'
import kateMoss19 from '../assets/images/KateMoss/kate-moss-19.jpeg'
import kateMoss20 from '../assets/images/KateMoss/kate-moss-20.jpeg'
import kateMoss21 from '../assets/images/KateMoss/kate-moss-21.jpeg'
import kateMoss22 from '../assets/images/KateMoss/kate-moss-22.jpeg'
import kateMoss23 from '../assets/images/KateMoss/kate-moss-23.jpeg'
import kateMoss24 from '../assets/images/KateMoss/kate-moss-24.jpeg'
import kateMoss25 from '../assets/images/KateMoss/kate-moss-25.jpeg'
import kateMoss26 from '../assets/images/KateMoss/kate-moss-26.jpeg'
import kateMoss27 from '../assets/images/KateMoss/kate-moss-27.jpeg'
import kateMoss28 from '../assets/images/KateMoss/kate-moss-28.jpeg'
import kateMoss29 from '../assets/images/KateMoss/kate-moss-29.jpeg'

import giseleBundchen00 from '../assets/images/GiseleBundchen/gisele-bundchen-00.jpeg'
import giseleBundchen01 from '../assets/images/GiseleBundchen/gisele-bundchen-01.jpeg'
import giseleBundchen02 from '../assets/images/GiseleBundchen/gisele-bundchen-02.jpeg'
import giseleBundchen03 from '../assets/images/GiseleBundchen/gisele-bundchen-03.jpeg'
import giseleBundchen04 from '../assets/images/GiseleBundchen/gisele-bundchen-04.jpeg'
import giseleBundchen05 from '../assets/images/GiseleBundchen/gisele-bundchen-05.jpeg'
import giseleBundchen06 from '../assets/images/GiseleBundchen/gisele-bundchen-06.jpeg'
import giseleBundchen07 from '../assets/images/GiseleBundchen/gisele-bundchen-07.jpeg'
import giseleBundchen08 from '../assets/images/GiseleBundchen/gisele-bundchen-08.jpeg'
import giseleBundchen09 from '../assets/images/GiseleBundchen/gisele-bundchen-09.jpeg'
import giseleBundchen10 from '../assets/images/GiseleBundchen/gisele-bundchen-10.jpeg'
import giseleBundchen11 from '../assets/images/GiseleBundchen/gisele-bundchen-11.jpeg'
import giseleBundchen12 from '../assets/images/GiseleBundchen/gisele-bundchen-12.jpeg'
import giseleBundchen13 from '../assets/images/GiseleBundchen/gisele-bundchen-13.jpeg'
import giseleBundchen14 from '../assets/images/GiseleBundchen/gisele-bundchen-14.jpeg'
import giseleBundchen15 from '../assets/images/GiseleBundchen/gisele-bundchen-15.jpeg'
import giseleBundchen16 from '../assets/images/GiseleBundchen/gisele-bundchen-16.jpeg'
import giseleBundchen17 from '../assets/images/GiseleBundchen/gisele-bundchen-17.jpeg'
import giseleBundchen18 from '../assets/images/GiseleBundchen/gisele-bundchen-18.jpeg'
import giseleBundchen19 from '../assets/images/GiseleBundchen/gisele-bundchen-19.jpeg'
import giseleBundchen20 from '../assets/images/GiseleBundchen/gisele-bundchen-20.jpeg'
import giseleBundchen21 from '../assets/images/GiseleBundchen/gisele-bundchen-21.jpeg'
import giseleBundchen22 from '../assets/images/GiseleBundchen/gisele-bundchen-22.jpeg'
import giseleBundchen23 from '../assets/images/GiseleBundchen/gisele-bundchen-23.jpeg'
import giseleBundchen24 from '../assets/images/GiseleBundchen/gisele-bundchen-24.jpeg'
import giseleBundchen25 from '../assets/images/GiseleBundchen/gisele-bundchen-25.jpeg'
import giseleBundchen26 from '../assets/images/GiseleBundchen/gisele-bundchen-26.jpeg'
import giseleBundchen27 from '../assets/images/GiseleBundchen/gisele-bundchen-27.jpeg'
import giseleBundchen28 from '../assets/images/GiseleBundchen/gisele-bundchen-28.jpeg'
import giseleBundchen29 from '../assets/images/GiseleBundchen/gisele-bundchen-29.jpeg'

// ----------------------------------------------------------
// FLASH IMAGE ARRAYS — ordered 00–29 per character
// ----------------------------------------------------------
const twiggyFlash = [
  twiggy00, twiggy01, twiggy02, twiggy03, twiggy04, twiggy05,
  twiggy06, twiggy07, twiggy08, twiggy09, twiggy10, twiggy11,
  twiggy12, twiggy13, twiggy14, twiggy15, twiggy16, twiggy17,
  twiggy18, twiggy19, twiggy20, twiggy21, twiggy22, twiggy23,
  twiggy24, twiggy25, twiggy26, twiggy27, twiggy28, twiggy29,
];
const laurenHuttonFlash = [
  laurenHutton00, laurenHutton01, laurenHutton02, laurenHutton03, laurenHutton04, laurenHutton05,
  laurenHutton06, laurenHutton07, laurenHutton08, laurenHutton09, laurenHutton10, laurenHutton11,
  laurenHutton12, laurenHutton13, laurenHutton14, laurenHutton15, laurenHutton16, laurenHutton17,
  laurenHutton18, laurenHutton19, laurenHutton20, laurenHutton21, laurenHutton22, laurenHutton23,
  laurenHutton24, laurenHutton25, laurenHutton26, laurenHutton27, laurenHutton28, laurenHutton29,
];
const christieBrinkleyFlash = [
  christieBrinkley00, christieBrinkley01, christieBrinkley02, christieBrinkley03, christieBrinkley04, christieBrinkley05,
  christieBrinkley06, christieBrinkley07, christieBrinkley08, christieBrinkley09, christieBrinkley10, christieBrinkley11,
  christieBrinkley12, christieBrinkley13, christieBrinkley14, christieBrinkley15, christieBrinkley16, christieBrinkley17,
  christieBrinkley18, christieBrinkley19, christieBrinkley20, christieBrinkley21, christieBrinkley22, christieBrinkley23,
  christieBrinkley24, christieBrinkley25, christieBrinkley26, christieBrinkley27, christieBrinkley28, christieBrinkley29,
];
const kateMossFlash = [
  kateMoss00, kateMoss01, kateMoss02, kateMoss03, kateMoss04, kateMoss05,
  kateMoss06, kateMoss07, kateMoss08, kateMoss09, kateMoss10, kateMoss11,
  kateMoss12, kateMoss13, kateMoss14, kateMoss15, kateMoss16, kateMoss17,
  kateMoss18, kateMoss19, kateMoss20, kateMoss21, kateMoss22, kateMoss23,
  kateMoss24, kateMoss25, kateMoss26, kateMoss27, kateMoss28, kateMoss29,
];
const giseleBundchenFlash = [
  giseleBundchen00, giseleBundchen01, giseleBundchen02, giseleBundchen03, giseleBundchen04, giseleBundchen05,
  giseleBundchen06, giseleBundchen07, giseleBundchen08, giseleBundchen09, giseleBundchen10, giseleBundchen11,
  giseleBundchen12, giseleBundchen13, giseleBundchen14, giseleBundchen15, giseleBundchen16, giseleBundchen17,
  giseleBundchen18, giseleBundchen19, giseleBundchen20, giseleBundchen21, giseleBundchen22, giseleBundchen23,
  giseleBundchen24, giseleBundchen25, giseleBundchen26, giseleBundchen27, giseleBundchen28, giseleBundchen29,
];

// ----------------------------------------------------------
// CHARACTER DATA
// ----------------------------------------------------------
const CHARACTERS = [
  {
    era:           '1960s',
    name:          'Twiggy',
    bgColor:       '#3E2A35',
    characterImg:  char60s,
    backgroundImg: bg60s,
    flashImages:   twiggyFlash,
    moodboard:     mood60s,
    audio:         audio60s,
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
    characterImg:  char70s,
    backgroundImg: bg70s,
    flashImages:   laurenHuttonFlash,
    moodboard:     mood70s,
    audio:         audio70s,
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
    characterImg:  char80s,
    backgroundImg: bg80s,
    flashImages:   christieBrinkleyFlash,
    moodboard:     mood80s,
    audio:         audio80s,
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
    characterImg:  char90s,
    backgroundImg: bg90s,
    flashImages:   kateMossFlash,
    moodboard:     mood90s,
    audio:         audio90s,
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
    characterImg:  char00s,
    backgroundImg: bg00s,
    flashImages:   giseleBundchenFlash,
    moodboard:     mood00s,
    audio:         audio00s,
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

  console.log('runFlash started — bridge shown');
  document.body.style.transition = 'none';
  document.getElementById('bridge-overlay').style.display = 'block';
  document.getElementById('app').style.visibility = 'hidden';
  flashOverlay.style.display = 'block';

  // Build img elements from Vite-imported URLs, inject hidden, wait for full decode.
  const imgs = character.flashImages.map(src => {
    const el = document.createElement('img');
    el.src   = src;
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

  // Cover the gap before detail screen builds — show detail overlay at opacity 0
  // so there is never a moment where neither overlay is covering the background.
  console.log('flash ending — detail overlay set to display block opacity 0');
  const detailOverlay = document.getElementById('detail-overlay');
  detailOverlay.style.transition = 'none';
  detailOverlay.style.opacity    = '0';
  detailOverlay.style.display    = 'block';

  // Clean up injected elements and hide flash overlay.
  imgs.forEach(el => el.remove());
  flashOverlay.style.display = 'none';
}

// Shows the character detail screen after the flash sequence completes.
async function showDetail(index) {
  console.log('showDetail started');
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

  // Sync mute button label to current state
  const muteBtn = document.getElementById('detail-mute');
  muteBtn.textContent = isMuted ? '\u266a unmute' : '\u266a mute';

  // Fade the detail overlay in (already display:block at opacity:0 from runFlash)
  console.log('detail fading in');
  detailOverlay.style.transition = 'opacity 300ms ease-in-out';
  detailOverlay.style.opacity    = '1';

  // Detail overlay is now fully visible — release the black bridge
  document.getElementById('bridge-overlay').style.display = 'none';
  console.log('bridge hidden');
  document.body.style.transition = 'background-color 400ms ease-in-out';

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
