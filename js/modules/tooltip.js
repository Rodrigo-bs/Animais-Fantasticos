export default class Tooltip {
  constructor(list) {
    this.tooltips = document.querySelectorAll(list);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };
    this.onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', this.onMouseLeave);
        this.element.removeEventListener('mousemove', this.onMouseMove);
      },
    };
  }

  criarTooltipBox(element) {
    console.log(this);
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    const tooltipBox = this.criarTooltipBox(currentTarget);

    this.onMouseMove.tooltipBox = tooltipBox;
    currentTarget.addEventListener('mousemove', this.onMouseMove);

    this.onMouseLeave.tooltipBox = tooltipBox;
    this.onMouseLeave.element = currentTarget;
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  init() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', (event) => this.onMouseOver(event));
    });
  }
}
