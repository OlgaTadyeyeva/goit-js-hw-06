function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(`.change-color`);
const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(`.color`);



btnEl.addEventListener("click", changeColor)

function changeColor() { 
  spanColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanColorEl.textContent;

}