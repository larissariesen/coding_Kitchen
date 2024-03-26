const formula1Quiz = [
    {
        question: "Who holds the record for the most Formula 1 World Championships?",
        options: ["Lewis Hamilton", "Max Verstappen", "Ayrton Senna", "Alain Prost"],
        answer: 0, // Correct answer index (B)
    },
    {
        question: "Which team has won the most Constructors' Championships in Formula 1?",
        options: ["Mercedes", "Ferrari", "Red Bull Racing", "McLaren"],
        answer: 1, // Correct answer index (B)
    },
    /*{
        question: "What is the iconic circuit known as 'La Sarthe,' famous for hosting the 24 Hours of Le Mans, not used for Formula 1 races?",
        options: ["Circuit de Spa-Francorchamps", "Circuit de Monaco", "Circuit de Barcelona-Catalunya", "Circuit de Paul Ricard"],
        answer: 3, // Correct answer index (D)
    },
    {
        question: "Which driver is known as 'The Iceman' in Formula 1?",
        options: ["Sebastian Vettel", "Fernando Alonso", "Kimi Räikkönen", "Daniel Ricciardo"],
        answer: 2, // Correct answer index (C)
    },
    {
        question: "In what year did Ayrton Senna tragically lose his life during a race?",
        options: ["1990", "1992", "1994", "1996"],
        answer: 2, // Correct answer index (C)
    }*/
];
let playerAnswers = [];

let currentQuestionIndex = 0;

const displayQuestion = () => {
    const questionContainer = document.querySelector('form');
    const currentQuestion = formula1Quiz[currentQuestionIndex];

    if (currentQuestion) {
        questionContainer.innerHTML = "";

        const questionElement = document.createElement('h2');
        questionElement.textContent = currentQuestion.question;
        questionContainer.appendChild(questionElement);

        currentQuestion.options.forEach((option, index) => {
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'answer';
            radioInput.value = index;
            radioInput.id = `option${index}`

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            // so text is clickable as well - needs to match witch id of radioBtn
            optionLabel.htmlFor = `option${index}`;

            questionContainer.appendChild(radioInput);
            questionContainer.appendChild(optionLabel);
            questionContainer.appendChild(document.createElement('br'));
        });

        // Add button to navigate to the next question
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next Question';
        nextButton.addEventListener('click', handleNextQuestion);
        questionContainer.appendChild(nextButton);
    }
    if (currentQuestionIndex === formula1Quiz.length) {
        questionContainer.innerHTML = "";
        showResults();
    }
}

const handleNextQuestion = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        playerAnswers.push(parseInt(selectedOption.value));
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Please select an answer before moving to the next question.');
    }
}

const showResults = () => {
    const resultContainer = document.getElementById('result');
    const resultElement = document.createElement('h2');
    resultElement.textContent = "Results";
    resultContainer.appendChild(resultElement);

    let correctCount = 0; // Counter for correct answers

    playerAnswers.forEach((answer, index) => {
        const isCorrect = formula1Quiz[index].answer === answer;
        showResultItem(answer, isCorrect);

        if (isCorrect) {
            correctCount++;
        }
    });
    const correctPercentage = (correctCount / formula1Quiz.length) * 100;
    showResultInPercentage(correctPercentage);

    document.getElementsByClassName('resetButton')[0].style.display = 'block';
}

const showResultInPercentage = (correctPercentage) => {
    // with help of https://dev.to/alwarg/how-to-create-an-responsive-percentage-circle-4gg7
    document.getElementById('circle').style.display = 'block';

    const radius = document.getElementsByTagName('circle')[0].getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    const dashLength = (correctPercentage / 100) * circumference;
    const strokeDasharray = `${dashLength}, ${circumference - dashLength}`;
    document.getElementById('percentage-text').textContent = `${correctPercentage}%`;
    document.getElementById('success-value').setAttribute('stroke-dasharray', strokeDasharray);
}

const showResultItem = (answer, correct) => {
    const questionContainer = document.getElementById('result');
    const resultElement = document.createElement('p');
    resultElement.textContent = `Question ${playerAnswers.indexOf(answer) + 1}: ${correct === true ? 'Correct' : 'Wrong'}`;
    questionContainer.appendChild(resultElement);
}

const resetQuiz = () => {
    currentQuestionIndex = 0;
    playerAnswers = [];
    displayQuestion();
    document.getElementById('result').innerHTML = "";
    document.getElementsByClassName('resetButton')[0].style.display = 'none';
}

window.onload = () => {
    displayQuestion();
};
