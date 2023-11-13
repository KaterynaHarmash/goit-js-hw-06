const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsMarkup = ingredients.map(ingredient => createListElement(ingredient));
const ingredientsListRef = document.querySelector('#ingredients');

function createListElement(ingredient) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
}

ingredientsListRef.append(...ingredientsMarkup);