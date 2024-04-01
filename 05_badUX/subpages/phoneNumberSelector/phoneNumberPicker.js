document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('phoneNr');
    input.addEventListener('keydown', (event) => {
        event.preventDefault();
    });
    input.addEventListener('change', (event) => {
       // Todo - validate phone number
    });
});