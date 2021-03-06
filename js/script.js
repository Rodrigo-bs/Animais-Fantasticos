import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import FetchAnimais from './modules/fetch-animais.js';
import DropdownMenu from './modules/dropdown-menu.js';
import SrollAnima from './modules/sroll-anima.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const fecthAnimais = new FetchAnimais('http://127.0.0.1:5500/animaisapi.json', '.numeros-grid', 'numero-animal');
fecthAnimais.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', 'active');
dropdownMenu.init();

const srollAnima = new SrollAnima('[data-anime="scroll"]');
srollAnima.init();

initFetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

initMenuMobile();
initFuncionamento();
