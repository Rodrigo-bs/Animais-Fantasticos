export default class InitScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = options === undefined ? { behavior: 'smooth', block: 'start' } : options;

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addlinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) this.addlinkEvent();

    return this;
  }
}
