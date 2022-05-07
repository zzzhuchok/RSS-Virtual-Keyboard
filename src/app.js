const keysData = {
  keyEn: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Entr'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyEnUp: [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Entr'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyEnCaps: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Entr'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyRu: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Entr'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyRuUp: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Entr'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyRuCaps: [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Entr'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', 'Left', 'Down', 'Right', 'Lang'],
  ],
  keyCodes: [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'changeLang'],
  ],
};

function getElement(tag, classSel, inner = '') {
  const el = document.createElement(tag);
  el.classList = classSel;
  el.innerHTML = inner;
  return el;
}

/* ---------------------------------------------------------------------------------------------- */

class Keyboard {
  constructor() {
    this.main = null;
    this.keys = keysData;

    this.lang = 'en';
    this.caps = false;
    this.shift = false;
  }

  init() {
    this.main = document.createElement('div');
    this.main.classList = 'keyboard';
    this.main.setAttribute('id', 'keyboard');

    const container = document.querySelector('.container');
    container.appendChild(this.main);
  }

  initKeys() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 5; i += 1) {
      const row = document.createElement('div');
      row.classList = 'row';
      this.main.appendChild(row);

      for (let j = 0; j < this.keys.keyEn[i].length; j += 1) {
        const btn = document.createElement('div');
        const keyEn = `<span class = "en"><span class = "normal">${this.keys.keyEn[i][j]}</span><span class = "shift hidden">${this.keys.keyEnUp[i][j]}</span><span class = "caps hidden">${this.keys.keyEnCaps[i][j]}</span></span>`;
        const keyRu = `<span class = "ru hidden"><span class = "normal">${this.keys.keyRu[i][j]}</span><span class = "shift hidden">${this.keys.keyRuUp[i][j]}</span><span class = "caps hidden">${this.keys.keyRuCaps[i][j]}</span></span>`;
        btn.classList = `key ${this.keys.keyCodes[i][j]}`;

        btn.insertAdjacentHTML('beforeend', keyEn);
        btn.insertAdjacentHTML('beforeend', keyRu);

        row.appendChild(btn);
      }
      fragment.appendChild(row);
    }
    this.main.appendChild(fragment);
  }

  toggleLang() {
    const keyEn = document.querySelectorAll('.keyboard .en');
    const keyRu = document.querySelectorAll('.keyboard .ru');

    keyEn.forEach((item) => {
      item.classList.toggle('hidden');
    });

    keyRu.forEach((item) => {
      item.classList.toggle('hidden');
    });

    if (keyEn[0].classList.contains('hidden')) {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
  }

  addLetterToTextarea(event) {
    const { lang } = this;
    const element = event.target.closest('.key');

    if (element === null) return;

    /* КОСТЫЛЬ!!! */
    const keyProgr = ['Backspace', 'Enter'];
    for (let i = 0; i < keyProgr.length; i += 1) {
      if (element.classList.contains(keyProgr[i])) return;
    }

    const keyCollection = element.querySelector(`.${lang}`).children;

    let keyInner = '';
    for (let i = 0; i < keyCollection.length; i += 1) {
      if (!keyCollection[i].matches('.hidden')) {
        keyInner = keyCollection[i].innerHTML;
      }
    }

    const textarea = document.querySelector('.textarea');
    textarea.value += keyInner;
  }

  static addParagraph(event) {
    const element = event.target.closest('.Enter');
    if (!element) return;

    const textarea = document.querySelector('.textarea');
    textarea.value += '\n';
  }

  static removeSymbolText(event) {
    const element = event.target.closest('.Backspace');
    if (!element) return;

    const textarea = document.querySelector('.textarea');
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }

  static addActiveClass(event) {
    const element = event.target.closest('.key');

    if (element === null) return;
    element.classList.add('active');
  }

  static removeActiveClass(event) {
    const element = event.target.closest('.key');

    if (!element) return;
    element.classList.remove('active');
  }
}

/* ------------------------------------------------------------------------- */

const titleHeader = 'RSS Virtual Keyboard';
// const descriptionOS = 'Windows';
// const descriptionOSKey = 'ctrl + alt';

const { body } = document;

const container = getElement('div', 'container');
const title = getElement('h1', 'title title-h1', titleHeader);
const textarea = getElement('textarea', 'textarea', '');

body.prepend(container);
container.append(title);
container.append(textarea);

const keyboard = new Keyboard();
keyboard.init();
keyboard.initKeys();

// container.append(getElement('p', 'description', descriptionOS));
// container.append(getElement('p', 'description', descriptionOSKey));

/* Клавиша изм языка */
const changeLang = document.querySelector('.changeLang');
changeLang.addEventListener('click', keyboard.toggleLang.bind(keyboard));

/* Добавление буквы в textarea */
keyboard.main.addEventListener('mousedown', Keyboard.addActiveClass);
keyboard.main.addEventListener('mouseup', Keyboard.removeActiveClass);
keyboard.main.addEventListener('click', Keyboard.addParagraph);
keyboard.main.addEventListener('click', Keyboard.removeSymbolText);
keyboard.main.addEventListener('click', keyboard.addLetterToTextarea.bind(keyboard));
