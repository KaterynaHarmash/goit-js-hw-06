const inputRef = document.querySelector('#validation-input');
const maxLength = inputRef.dataset.length;

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length > maxLength) {
        inputRef.classList.add('invalid');
    } else if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('valid');
    }
});
inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
});
