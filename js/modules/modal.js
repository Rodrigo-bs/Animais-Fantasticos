export default class Modal {
  constructor(open, close, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.containerModal = document.querySelector(container);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  cliqueForaModal(event) {
    if (event.target === event.currentTarget) this.toggleModal(event);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener('click', this.toggleModal);
      this.botaoFechar.addEventListener('click', this.toggleModal);
      this.containerModal.addEventListener('click', this.cliqueForaModal);
    }
  }
}
