if (Reveal) {
  const deck = new Reveal(document.querySelector('article'), {
    embedded: true,
    hash: true,
    history: true,
    controls: false,
    controlsTutorial: false,
    progress: false,
    disableLayout: true,
  });

  function slideProgress(current, total) {
    let el = document.querySelector('footer .slide-progress');
    if (el) {
      el.innerText = `${current} / ${total}`;
    }
  }

  deck.on('slidechanged', event => {
    slideProgress(event.indexh + 1, deck.getSlides().length)
  });

  deck.initialize();
  slideProgress(1, deck.getSlides().length);
}
