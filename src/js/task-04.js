// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});


