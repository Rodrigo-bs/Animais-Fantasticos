export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;

      return {
        element: section,
        offsetTop: Math.floor(sectionTop - this.windowMetade),
      };
    });
  }

  checkDistance() {
    const scroll = window.pageYOffset;
    this.distance.forEach((item) => {
      if (scroll > item.offsetTop) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
