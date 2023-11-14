const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const emailInputName = form.querySelector('input[type="email"]').name;
    const passwordInputName = form.querySelector('input[type="password"]').name;

    const email = event.currentTarget.elements[emailInputName].value;
    const password = event.currentTarget.elements[passwordInputName].value;

    

    if (email === '' || password === '') {
        alert('Усі дані повинні бути заповнені!');
    } else {
        const userData = {
            [emailInputName]: email,
            [passwordInputName]:password
        };
        console.log(userData);
        form.reset();
    }
}
