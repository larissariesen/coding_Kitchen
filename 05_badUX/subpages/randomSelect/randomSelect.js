const spin = () => {
    const resultDiv = document.getElementById('result');
    const options = document.querySelectorAll('.option');
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex].textContent;
    let currentIndex = 0;
    resultDiv.innerText = '';

    const intervalId = setInterval(() => {
        options.forEach((option, index) => {
            if (index === currentIndex) {
                option.style.backgroundColor = currentIndex === 1 ? 'hotpink' : 'deepskyblue';
            } else {
                option.style.backgroundColor = 'transparent';
            }
        });
        currentIndex = (currentIndex + 1) % options.length;
    }, 200);

    setTimeout(() => {
        clearInterval(intervalId);
        options.forEach(option => {
            option.style.backgroundColor = 'transparent';
        });
        options[randomIndex].style.backgroundColor = randomIndex === 1 ? 'hotpink' : 'deepskyblue';
        resultDiv.textContent = `Result: ${selectedOption}`;
    }, 3000);
}