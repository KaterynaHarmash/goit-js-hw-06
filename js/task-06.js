const inputRef = document.querySelector('#validation-input');
const maxLength = inputRef.dataset.length;

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === Number(maxLength)) {
        inputRef.classList.add('valid');
    } else if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
    }
});
inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
});
