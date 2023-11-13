const categoriesListRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesListRef.length}`);

categoriesListRef.forEach(item => {
    let cathegoryName = item.firstElementChild.textContent;
    let cathegoryItemsLength = Number(item.lastElementChild.children.length);

    console.log(``);
    console.log(`Category: ${cathegoryName}`);
    console.log(`Elements: ${cathegoryItemsLength}`);
});