// selector.js — Session 4: Carousel navigation + character selection

// ----------------------------------------------------------
// CHARACTER DATA
// Paths use ./src/assets/images/ — correct format for Vite dev server.
// ----------------------------------------------------------
const CHARACTERS = [
  {
    era:           '1960s',
    bgColor:       '#3E2A35',
    characterImg:  './src/assets/images/character-60s-FINAL.png',
    backgroundImg: './src/assets/images/background-60s-FINAL.png',
  },
  {
    era:           '1970s',
    bgColor:       '#4A4A4A',
    characterImg:  './src/assets/images/character-70s-FINAL.png',
    backgroundImg: './src/assets/images/background-70s-FINAL.png',
  },
  {
    era:           '1980s',
    bgColor:       '#555B60',
    characterImg:  './src/assets/images/character-80s-FINAL.png',
    backgroundImg: './src/assets/images/background-80s-FINAL.png',
  },
  {
    era:           '1990s',
    bgColor:       '#B2B2B2',
    characterImg:  './src/assets/images/character-90s-FINAL.png',
    backgroundImg: './src/assets/images/background-90s-FINAL.png',
  },
  {
    era:           '2000s',
    bgColor:       '#4D5663',
    characterImg:  './src/assets/images/character-00s-FINAL.png',
    backgroundImg: './src/assets/images/background-00s-FINAL.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const overlay     = document.getElementById('intro-overlay');
  const btnPrev     = document.getElementById('btn-prev');
  const btnNext     = document.getElementById('btn-next');
  const cards       = Array.from(document.querySelectorAll('.character-card'));
  const indicators  = Array.from(document.querySelectorAll('.indicator'));

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

  // ----------------------------------------------------------
  // INTRO OVERLAY
  // JS overrides the CSS animation: hold 2s, then fade 600ms.
  // ----------------------------------------------------------
  overlay.style.animation  = 'none';
  overlay.style.opacity    = '1';
  overlay.style.transition = 'opacity 600ms ease-in-out';

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.visibility = 'hidden';
    }, 600);
  }, 2000);

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
  // CHARACTER SELECTION
  // Click the character image to select.
  // Only one card selected at a time.
  // Selected card holds full-color state (.selected CSS class).
  // Selection persists across carousel navigation.
  // ----------------------------------------------------------
  cards.forEach((card) => {
    const img = card.querySelector('.character-image-placeholder');

    img.addEventListener('click', () => {
      const clickedIndex = cards.indexOf(card);

      // Deselect the previous selection if it's a different card
      if (selectedIndex !== -1 && selectedIndex !== clickedIndex) {
        cards[selectedIndex].classList.remove('selected');
      }

      selectedIndex = clickedIndex;
      card.classList.add('selected');
    });
  });
});
