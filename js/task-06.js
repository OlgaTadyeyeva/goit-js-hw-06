const inputEl = document.getElementById(`validation-input`);

const dataLength = inputEl.getAttribute(`data-length`);

inputEl.addEventListener("blur", onInputBlur);


function onInputBlur(event) { 
     const value = event.currentTarget.value.trim().length
    if (value === Number(dataLength)) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`);
    }

    else {
        inputEl.classList.remove(`valid`);
        inputEl.classList.add(`invalid`);
    }

}

