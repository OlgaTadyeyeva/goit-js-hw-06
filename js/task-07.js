const refs = {
    inputEl: document.getElementById(`font-size-control`),
    spanEl: document.getElementById(`text`),
}

console.log(refs);

refs.inputEl.addEventListener("input", onInput)


function onInput(event) {
    refs.spanEl.style.fontSize = `${event.currentTarget.value}px`
}