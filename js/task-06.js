// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (e) => {
    if (e.target.value.length === Number(inputEl.dataset.length)) {
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        return;
    }
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
});
