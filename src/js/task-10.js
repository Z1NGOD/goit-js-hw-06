function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає 
// кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх
// у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і 
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.


const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let amount = 0;

btnCreateEl.addEventListener('click', onCreateBtnClick);

btnDestroyEl.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  amount = inputEl.value;
  createBoxes(amount);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
