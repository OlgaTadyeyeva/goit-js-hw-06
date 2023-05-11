const refs = {
    inputEl: document.getElementById(`name-input`),
    outputEl: document.getElementById(`name-output`),

}    

console.log(refs.inputEl);
console.log(refs.outputEl.textContent);


refs.inputEl.addEventListener("input", onInput);

function onInput(event) { 
    console.log(event.currentTarget.value)
    refs.outputEl.textContent = event.currentTarget.value


    
    if (refs.inputEl.value.trim() === ``) {
        refs.outputEl.textContent = `Anonymous`
    } else {
        refs.outputEl.textContent = event.currentTarget.value
    }


}
