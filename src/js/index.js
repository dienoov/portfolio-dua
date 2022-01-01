require('../css/app.scss');

const heroTemplate = require('../views/components/hero.pug');
const firstWorkTemplate = require('../views/components/works/first.pug');
const secondWorkTemplate = require('../views/components/works/second.pug');
const thirdWorkTemplate = require('../views/components/works/third.pug');
const aboutTemplate = require('../views/components/about.pug');

const main = document.body.querySelector('main');

main.insertAdjacentHTML('beforeend', heroTemplate());
main.insertAdjacentHTML('beforeend', firstWorkTemplate());
main.insertAdjacentHTML('beforeend', secondWorkTemplate());
main.insertAdjacentHTML('beforeend', thirdWorkTemplate());
main.insertAdjacentHTML('beforeend', aboutTemplate());

const horizontalScroll = (ev) => { main.scrollLeft += ev.deltaY; };
const resetScroll = () => {
  window.scrollTo(0, 0);
  main.scrollTo(0, 0);
};

if (window.screen.availHeight < window.screen.availWidth) {
  main.addEventListener('wheel', horizontalScroll);
}

window.addEventListener('resize', () => {
  if (window.screen.availHeight < window.screen.availWidth) {
    resetScroll();
    main.addEventListener('wheel', horizontalScroll);
  } else {
    resetScroll();
    main.removeEventListener('wheel', horizontalScroll);
  }
});
