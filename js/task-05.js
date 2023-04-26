const refs = {
    inputEl: document.getElementById(`name-input`),
    outputEL: document.getElementById(`name-output`),

}    

console.log(refs.inputEl);
console.log(refs.outputEL);

refs.inputEl.addEventListener("input", onInput);

function onInput(event) { 
    console.log(event.currentTarget.value)
    refs.outputEL.textContent = event.currentTarget.value
}
