const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', onImputChange);

function onImputChange(event) {
    if (inputRef.value === '') {
        return outputRef.textContent = "Anonymous";
    }
    return outputRef.textContent=inputRef.value;
}