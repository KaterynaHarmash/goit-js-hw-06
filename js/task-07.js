const inputFontSizeRef = document.querySelector('input#font-size-control');
const outputRef = document.querySelector('span#text');

inputFontSizeRef.addEventListener('input', inputChangeHandler);

function inputChangeHandler(event) {
    outputRef.style.fontSize = `${inputFontSizeRef.value}px`;
}
// 