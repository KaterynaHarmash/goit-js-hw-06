function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButtonRef = document.querySelector('button.change-color');
const outputColorValueRef = document.querySelector('span.color');

changeColorButtonRef.addEventListener('click', onChangeColorClickHandler);

function onChangeColorClickHandler() {
  const changeBgElementRef = document.querySelector('body');
  changeBgElementRef.style.backgroundColor = getRandomHexColor();
  outputColorValueRef.textContent = changeBgElementRef.style.backgroundColor;
}