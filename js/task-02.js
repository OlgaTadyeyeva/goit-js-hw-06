const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(el => {

const productEL = document.createElement("li");
productEL.classList.add("item");
productEL.textContent = el;
  
return productEL

})

const ul = document.querySelector("ul");

ul.append(...elements)

console.log(ul)