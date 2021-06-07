import AnimaNumeros from './anima-numeros.js';

export default class FetchAnimais {
  constructor(url, numberContainer, className) {
    this.url = url;
    this.className = className;
    this.numberContainer = document.querySelector(numberContainer);
  }

  createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add(this.className);
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  createNumber(r) {
    r.forEach((animal) => {
      const divAnimal = this.createAnimal(animal);
      this.numberContainer.appendChild(divAnimal);
    });

    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  fetchAnimais(url) {
    try {
      fetch(url)
        .then((r) => r.json())
        .then((r) => this.createNumber(r));
    } catch (erro) {
      console.log(erro);
    }
  }

  init() {
    if (this.className && this.numberContainer) {
      this.fetchAnimais(this.url);
    }
  }
}
