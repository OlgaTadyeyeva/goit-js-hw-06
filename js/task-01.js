const items = document.querySelectorAll(".item");
console.log(`Number of Categories: ${items.length}`);


items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

