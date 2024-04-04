document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('phoneNr');
    input.addEventListener('keydown', (event) => {
        event.preventDefault();
    });
    input.addEventListener('change', (event) => {
        const phoneNumber = event.target.value;
        const swissPhoneNumberPattern = /^(?:\s*\d\s*){9}$/;

        if (swissPhoneNumberPattern.test(phoneNumber)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    });
});

const increase = () => {
    const inputGroup = document.getElementsByClassName('input-group')[0];
    const input = document.getElementById('phoneNr');
    const increaseBtn = document.getElementById('increaseButton');
    const decreaseBtn = document.getElementById('decreaseButton');
    const value = parseInt(input.value) ? parseInt(input.value) : 0;
    const newVal = value + 1;
    input.value = newVal;
    input.innerText = String(newVal);
    inputGroup.innerHTML = '';
    if(newVal%2 === 1) {
        inputGroup.appendChild(decreaseBtn)
        inputGroup.appendChild(input)
        inputGroup.appendChild(increaseBtn)
    } else {
        inputGroup.appendChild(increaseBtn)
        inputGroup.appendChild(input)
        inputGroup.appendChild(decreaseBtn)
    }
    input.dispatchEvent(new Event('change'));
};

const decrease = () => {
    const inputGroup = document.getElementsByClassName('input-group')[0];
    const input = document.getElementById('phoneNr');
    const increaseBtn = document.getElementById('increaseButton');
    const decreaseBtn = document.getElementById('decreaseButton');
    const value = parseInt(input.value) ? parseInt(input.value) : 0;
    const newVal = value - 1;
    if(value === 0) return;
    input.value = newVal;
    input.innerText = String(newVal);
    if(newVal%2 === 0) {
        inputGroup.appendChild(decreaseBtn)
        inputGroup.appendChild(input)
        inputGroup.appendChild(increaseBtn)
    } else {
        inputGroup.appendChild(increaseBtn)
        inputGroup.appendChild(input)
        inputGroup.appendChild(decreaseBtn)
    }
    input.dispatchEvent(new Event('change'));
};