// Polyfills:
// - classList

export default class Modal {

  constructor() {
    this.init();
  }

  init() {
    let navLinks = document.querySelectorAll('.js-smooth-link, .js-nav-link');

    [].forEach.call(navLinks, (el) => {
      el.addEventListener('click', (ev) => {
        let navLinksActive = document.querySelectorAll('.js-nav-link');
        const elClasses = ev.target.classList;

        [].forEach.call(navLinksActive, (el) => {
          el.parentNode.classList.remove('active');
        });

        ev.preventDefault();
        this.smoothScroll(ev.target.href.split('#')[1]);

        if (elClasses.contains('js-nav-link') && !elClasses.contains('active')) {
          ev.target.parentNode.classList.add('active');
        }
      }, false);
    });
  }

  smoothScroll(el) {
    let element = document.querySelector(`#${el}`);
    Velocity(element, "scroll", { duration: 600, easing: "easeOutSine" });
  }

}
