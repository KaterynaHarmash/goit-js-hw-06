const actionsRef = document.querySelectorAll('#counter button');
const actionResaultRef = document.querySelector('#value');
let counterValue = 0;
let decrementActionRef;
let incrementActionRef;

actionsRef.forEach(action => {
    if (action.dataset.action === 'decrement') {
        return decrementActionRef = action;
    }
    return incrementActionRef = action
});

decrementActionRef.addEventListener('click', (event) => {
    counterValue -= 1;
    actionResaultRef.textContent = counterValue;
})

incrementActionRef.addEventListener('click', () => {
    counterValue += 1;
    actionResaultRef.textContent = counterValue;
})



