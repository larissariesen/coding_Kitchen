const spin = () => {
    const resultDiv = document.getElementById('result');
    const options = document.querySelectorAll('.option');
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex].textContent;
    const intervalId = setInterval(() => {
        options[0].style.backgroundColor = 'green';
        options[1].style.backgroundColor = 'transparent';
    }, 300);

    const intervalId2 = setInterval(() => {
        options[1].style.backgroundColor = 'green';
        options[0].style.backgroundColor = 'transparent';
    }, 300);

    setTimeout(() => {
        clearInterval(intervalId);
        clearInterval(intervalId2);
        options.forEach(option => {
            option.style.backgroundColor = 'transparent';
        });
        options[randomIndex].style.backgroundColor = 'green';
        resultDiv.textContent = `Result: ${selectedOption}`;
    }, 3000);
}