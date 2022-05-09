const keysData = {
  keyEn: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyEnUp: [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyEnCaps: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyRu: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyRuUp: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyRuCaps: [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctr', '◄', '▼', '►', 'Lang'],
  ],
  keyCodes: [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
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
        let keyEn;
        let keyRu;

        if (this.lang === 'en') {
          keyEn = `<span class = "en"><span class = "normal">${this.keys.keyEn[i][j]}</span><span class = "shift hidden">${this.keys.keyEnUp[i][j]}</span><span class = "caps hidden">${this.keys.keyEnCaps[i][j]}</span></span>`;
          keyRu = `<span class = "ru hidden"><span class = "normal">${this.keys.keyRu[i][j]}</span><span class = "shift hidden">${this.keys.keyRuUp[i][j]}</span><span class = "caps hidden">${this.keys.keyRuCaps[i][j]}</span></span>`;
        } else {
          keyEn = `<span class = "en hidden"><span class = "normal">${this.keys.keyEn[i][j]}</span><span class = "shift hidden">${this.keys.keyEnUp[i][j]}</span><span class = "caps hidden">${this.keys.keyEnCaps[i][j]}</span></span>`;
          keyRu = `<span class = "ru"><span class = "normal">${this.keys.keyRu[i][j]}</span><span class = "shift hidden">${this.keys.keyRuUp[i][j]}</span><span class = "caps hidden">${this.keys.keyRuCaps[i][j]}</span></span>`;
        }

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

    const keyNormalCollCurrentLang = this.main.querySelectorAll(`.${this.lang} .normal`);
    const keyCapsCollCurrentLang = this.main.querySelectorAll(`.${this.lang} .caps`);
    if (this.caps) {
      keyNormalCollCurrentLang.forEach((item) => {
        item.classList.add('hidden');
      });

      keyCapsCollCurrentLang.forEach((item) => {
        item.classList.remove('hidden');
      });
    } else {
      keyNormalCollCurrentLang.forEach((item) => {
        item.classList.remove('hidden');
      });

      keyCapsCollCurrentLang.forEach((item) => {
        item.classList.add('hidden');
      });
    }

    localStorage.setItem('lang', this.lang);
  }

  addLetterToTextarea(event) {
    const { lang } = this;
    const element = event.target.closest('.key') || document.querySelector(`.${event.code}`);

    if (!element) return;

    /* КОСТЫЛЬ!!! */
    const keyProgr = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'Space', 'AltRight', 'changeLang'];
    for (let i = 0; i < keyProgr.length; i += 1) {
      if (element.classList.contains(keyProgr[i])) return;
    }

    const keyCollection = element.querySelector(`.${lang}`).children;

    let keyInner = '';
    for (let i = 0; i < keyCollection.length; i += 1) {
      if (!keyCollection[i].matches('.hidden')) {
        keyInner = keyCollection[i].textContent;
      }
    }

    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.setRangeText(keyInner, textarea.selectionStart, textarea.selectionEnd, 'end');
  }

  onCapsLock(event) {
    const keyNormalColl = this.main.querySelectorAll(`.${this.lang} .normal`);
    const keyCapsColl = this.main.querySelectorAll(`.${this.lang} .caps`);
    const keyShiftColl = this.main.querySelectorAll(`.${this.lang} .shift`);

    const keyCaps = document.querySelector(`.${event.code}`) || this.main.querySelector('.CapsLock');

    if (!this.caps) {
      this.caps = true;

      if (this.shift) {
        keyCapsColl.forEach((item) => item.classList.add('hidden'));
        keyNormalColl.forEach((item) => item.classList.add('hidden'));
        keyShiftColl.forEach((item) => item.classList.remove('hidden'));
        keyCaps.classList.toggle('active');
        return;
      }

      keyNormalColl.forEach((item) => item.classList.add('hidden'));
      keyCapsColl.forEach((item) => item.classList.remove('hidden'));
    } else {
      this.caps = false;

      if (this.shift) {
        keyCapsColl.forEach((item) => item.classList.add('hidden'));
        keyNormalColl.forEach((item) => item.classList.add('hidden'));
        keyShiftColl.forEach((item) => item.classList.remove('hidden'));
        keyCaps.classList.toggle('active');
        return;
      }

      keyNormalColl.forEach((item) => item.classList.remove('hidden'));
      keyCapsColl.forEach((item) => item.classList.add('hidden'));
    }

    keyCaps.classList.toggle('active');
  }

  onShift() {
    const keyNormalColl = this.main.querySelectorAll(`.${this.lang} .normal`);
    const keyShiftColl = this.main.querySelectorAll(`.${this.lang} .shift`);
    const keyCapsColl = this.main.querySelectorAll(`.${this.lang} .caps`);

    this.shift = true;

    if (this.caps) {
      keyCapsColl.forEach((item) => item.classList.add('hidden'));
      keyNormalColl.forEach((item) => item.classList.add('hidden'));
      keyShiftColl.forEach((item) => item.classList.remove('hidden'));
      return;
    }

    keyNormalColl.forEach((item) => item.classList.add('hidden'));
    keyShiftColl.forEach((item) => item.classList.remove('hidden'));
  }

  offShift() {
    const keyNormalColl = this.main.querySelectorAll(`.${this.lang} .normal`);
    const keyShiftColl = this.main.querySelectorAll(`.${this.lang} .shift`);
    const keyCapsColl = this.main.querySelectorAll(`.${this.lang} .caps`);

    this.shift = false;

    if (this.caps) {
      keyCapsColl.forEach((item) => item.classList.remove('hidden'));
      keyNormalColl.forEach((item) => item.classList.add('hidden'));
      keyShiftColl.forEach((item) => item.classList.add('hidden'));
      return;
    }

    keyNormalColl.forEach((item) => item.classList.remove('hidden'));
    keyShiftColl.forEach((item) => item.classList.add('hidden'));
  }

  static addParagraph() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
  }

  static addHorizontalIndent() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
  }

  static addSpace() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
  }

  static onBackspace() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end || (start === 0 && end === 0)) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
      return;
    }

    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  }

  static onDelete() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end || (start === textarea.value.length && end === textarea.value.length)) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
      return;
    }

    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
  }

  static addActiveClass(event) {
    const element = event.target.closest('.key') || document.querySelector(`.${event.code}`);

    if (!element) return;

    if (element.classList.contains('CapsLock')) return;
    element.classList.add('active');
  }

  removeActiveClass(event) {
    const element = document.querySelector(`.${event.code}`) || document.querySelector('.keyboard');
    const textarea = document.querySelector('.textarea');

    if (!element) return;
    if (element.matches('.key')) {
      if (element.matches('.CapsLock')) return;
      element.classList.remove('active');
      return;
    }

    const elementsActive = element.querySelectorAll('.key.active');
    const shift = element.querySelector('.ShiftLeft');

    for (let i = 0; i < elementsActive.length; i += 1) {
      if (!elementsActive[i].classList.contains('CapsLock')) {
        elementsActive[i].classList.remove('active');
      }
    }

    if (this.shift) {
      shift.classList.add('active');
    }

    localStorage.setItem('textareaValue', textarea.value);
  }

  keydownKeyboard(event) {
    const key = this.main.querySelector(`.${event.code}`);
    event.preventDefault();
    Keyboard.addActiveClass(event);

    if (key && key.classList.contains('Backspace')) {
      Keyboard.onBackspace();
      return;
    }

    if (key && key.classList.contains('Delete')) {
      Keyboard.onDelete();
      return;
    }

    if (key && key.classList.contains('Tab')) {
      event.preventDefault();
      Keyboard.addHorizontalIndent();
      return;
    }

    if (key && key.classList.contains('CapsLock')) {
      if (event.repeat) {
        return;
      }
      this.onCapsLock(event);
      return;
    }

    if (key && key.classList.contains('Enter')) {
      Keyboard.addParagraph();
      return;
    }

    if (key && key.classList.contains('ShiftLeft')) {
      if (event.repeat) {
        return;
      }

      this.onShift();
      return;
    }

    if (key && key.classList.contains('Space')) {
      Keyboard.addSpace();
      return;
    }

    if (key && (key.classList.contains('ControlLeft') || key.classList.contains('AltLeft'))) {
      event.preventDefault();

      if (event.repeat) {
        return;
      }

      if (event.altKey && event.ctrlKey) {
        this.toggleLang();
      }
      return;
    }

    this.addLetterToTextarea(event);
  }

  keyupKeyboard(event) {
    const textarea = document.querySelector('.textarea');
    if (event.code === 'ShiftLeft') {
      this.offShift();
    }
    this.removeActiveClass(event);
    localStorage.setItem('textareaValue', textarea.value);
  }

  // getPosCursor(event) {
  //   const el = event.currentTarget;
  //   this.posTextareaStart = el.selectionStart;
  //   this.posTextareaEnd = el.selectionEnd;
  // }

  // static onFocus() {
  //   const textarea = document.querySelector('.textarea');
  //   textarea.focus();
  //   // console.dir(textarea.selectionStart);
  // }

  // getPosCursor() {
  //   const textarea = document.querySelector('.textarea');
  //   this.posCursor = textarea.selectionStart;
  //   // console.log(this.posCursor);
  // }
}

/* ------------------------------------------------------------------------- */

const titleHeader = 'RSS Virtual Keyboard';
const descriptionOS = 'Windows';
const descriptionOSKey = 'ctrl + alt';

const { body } = document;

const container = getElement('div', 'container');
const title = getElement('h1', 'title title-h1', titleHeader);
const textarea = getElement('textarea', 'textarea', '');
textarea.value = localStorage.getItem('textareaValue');

body.prepend(container);
container.append(title);
container.append(textarea);

const keyboard = new Keyboard();
keyboard.lang = localStorage.getItem('lang');
keyboard.init();
keyboard.initKeys();

container.append(getElement('p', 'description', descriptionOS));
container.append(getElement('p', 'description', descriptionOSKey));

/* Клавиша изм языка */
const changeLang = document.querySelector('.changeLang');
changeLang.addEventListener('click', keyboard.toggleLang.bind(keyboard));

/* Добавление буквы в textarea */
keyboard.main.addEventListener('mousedown', Keyboard.addActiveClass);
keyboard.main.addEventListener('mouseup', keyboard.removeActiveClass.bind(keyboard));

keyboard.main.addEventListener('mousedown', keyboard.addLetterToTextarea.bind(keyboard));

const enter = document.querySelector('.Enter');
const space = document.querySelector('.Space');
const tab = document.querySelector('.Tab');
const backspace = document.querySelector('.Backspace');
const deleteKey = document.querySelector('.Delete');
const capslock = document.querySelector('.CapsLock');
const shift = document.querySelector('.ShiftLeft');

enter.addEventListener('mousedown', Keyboard.addParagraph);
space.addEventListener('mousedown', Keyboard.addSpace);
tab.addEventListener('mousedown', Keyboard.addHorizontalIndent);
backspace.addEventListener('mousedown', Keyboard.onBackspace);
deleteKey.addEventListener('mousedown', Keyboard.onDelete);
capslock.addEventListener('click', keyboard.onCapsLock.bind(keyboard));
shift.addEventListener('mousedown', keyboard.onShift.bind(keyboard));
shift.addEventListener('mouseup', keyboard.offShift.bind(keyboard));

// textarea.addEventListener('blur', Keyboard.onFocus);
// textarea.addEventListener('click', keyboard.getPosCursor);
// keyboard.main.addEventListener('click', Keyboard.onFocus);

/* События клавиатуры */
document.addEventListener('keydown', keyboard.keydownKeyboard.bind(keyboard));
document.addEventListener('keyup', keyboard.keyupKeyboard.bind(keyboard));

// textarea.addEventListener('click', focusText);

// function focusText(event) {
//   const element = event.currentTarget;
//   element.setRangeText('testString', element.selectionStart, element.selectionEnd, 'end');
//   // console.log(element.selectionStart, element.selectionEnd);
// }
