const inputEl = document.getElementById(`validation-input`);

const dataLength = inputEl.getAttribute(`data-length`);

inputEl.addEventListener("blur", onInputBlur);


function onInputBlur(event) {
    const value = event.currentTarget.value.trim().length
    if (value === Number(dataLength)) {
        changeClass(`valid`, `invalid`)
    }

    else {
        changeClass(`invalid`, `valid`)
    }
   
}

function changeClass(a, b) { 
    inputEl.classList.add(a);
    inputEl.classList.remove(b)

}
