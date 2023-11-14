function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxActionInputEl = document.querySelector('#controls input');//інпут
const boxCreateActionEl = document.querySelector('[data-create]');//кнопка створення боксів
const boxDestroyActionEl = document.querySelector('[data-destroy]');//кнопка видалення боксів
const boxParentEl = document.querySelector('#boxes');//контейнер для боксів

let boxes = [];//створюємо масив куди будемо складати бокси
let box;//створюємо змінну в яку будемо записувати поточний бокс
let size = 30;//створюємо розмір який збільшуватиметься з кожним наступним боксом

//--------параметри стилів батьківського контейнера для боксів--------
boxParentEl.style.display = 'flex';
boxParentEl.style.gap = '10px';
boxParentEl.style.flexWrap = 'wrap';
boxParentEl.style.margin = '10px 30px';
//-------------------------------------------------------

boxDestroyActionEl.addEventListener('click', destroyBoxes);//створюємо слухача для кнопки знищення
boxCreateActionEl.addEventListener('click', () => {
  //перевіряємо умову і знищуємо зайві пробіли - якщо умова не виконується то викликаємо повідомлення помилки
  if (
    Number(boxActionInputEl.value.trim()) > Number(boxActionInputEl.max) ||
    Number(boxActionInputEl.value.trim()) < Number(boxActionInputEl.min)
  ) {
    alert('Будь ласка, введіть число від 1 до 100');
  } else {
    createBoxes(boxActionInputEl.value.trim()); //якщо умови виконано то викликаємо функцію створення боксів і передаємо значення інпуту
  }
  boxActionInputEl.value = ''; // значення інпуту обнуляємо
});//створюємо слухача для кнопки створення

function createBoxes(amount) {
  //--------Створюємо цикл який перебирає числа від 0 до введенного, на кожній ітерації створює бокс, вносить його параметри
  //збільшує розміри для наступного боксу і додає бокс до масиву
  for (let i = 0; i < amount; i+=1) {
    box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxParentEl.append(...boxes);//відправляємо значення усього масиву до батьківського контейнера
}

function destroyBoxes() {
  boxParentEl.innerHTML = ''; //очищуємо HTML
  boxes.splice(0, boxes.length); //видаляємо усі бокси з масиву
}
