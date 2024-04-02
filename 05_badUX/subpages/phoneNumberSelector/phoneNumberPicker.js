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
    const input = document.getElementById('phoneNr');
    const value = parseInt(input.value) ? parseInt(input.value) : 0;
    input.value = value + 1;
    input.innerText = String(value + 1);
    input.dispatchEvent(new Event('change'));
};

const decrease = () => {
    const input = document.getElementById('phoneNr');
    const value = parseInt(input.value) ? parseInt(input.value) : 0;
    if(value === 0) return;
    input.value = value - 1;
    input.innerText = String(value - 1);
    input.dispatchEvent(new Event('change'));
};