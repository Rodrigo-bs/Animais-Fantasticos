import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, className) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.className = className;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    event.currentTarget.classList.add(this.className);

    this.dropdownMenus.forEach((menu) => {
      outsideClick(menu, ['touchstart', 'click'], () => {
        menu.classList.remove(this.className);
      });
    });
  }

  adicionarEvents() {
    this.dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.adicionarEvents();
  }
}
