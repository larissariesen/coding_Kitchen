const initialBinoxxo = [
    ['', 'O', '', '', '', ''],
    ['O', '', 'O', 'O', '', ''],
    ['', '', 'X', 'X', '', ''],
    ['', 'O', '', 'X', 'X', ''],
    ['', 'X', '', '', '', 'O'],
    ['', '', 'X', '', '', 'X']
];

const solvedBinoxxo = [
    ['X', 'O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'X', 'X'],
    ['O', 'O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'X', 'O'],
    ['X', 'X', 'O', 'O', 'X', 'O'],
    ['O', 'X', 'X', 'O', 'O', 'X']
];

// Switch the rows and columns of the initialBinoxxo array, so it looks like initialBinoxxo
const switchedBinoxxo = initialBinoxxo[0].map((col, i) => initialBinoxxo.map(row => row[i]));
const switchedSolvedBinoxxo = solvedBinoxxo[0].map((col, i) => solvedBinoxxo.map(row => row[i]));

document.addEventListener("DOMContentLoaded", function () {
    const binoxxoContainer = document.getElementById('binoxxoContainer');

    const generateGameBoard = (size) => {
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i.toString();
                cell.dataset.col = j.toString();
                cell.textContent = switchedBinoxxo[i][j];
                if (cell.textContent === '') {
                    cell.classList.add('clickable');
                    cell.addEventListener('click', handleCellClick);
                } else {
                    cell.style.backgroundColor = 'lightgray';
                }
                row.appendChild(cell);
            }

            binoxxoContainer.appendChild(row);
        }
    }

    // Generate a 6x6 game board
    generateGameBoard(6);
});

const handleCellClick = (event) => {
    const cell = event.target;
    if (cell.textContent === 'O') {
        cell.textContent = '';
    } else if (cell.textContent === 'X') {
        cell.textContent = 'O';
    } else if (cell.textContent === '') {
        cell.textContent = 'X';
    }
}

const resetBinoxxo = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = switchedBinoxxo[cell.dataset.row][cell.dataset.col];
        if (cell.textContent === '') {
            cell.style.backgroundColor = 'white';
        }
    });
    const errorElement = document.getElementById('messages');
    errorElement.innerHTML = '';
}

const checkBinoxxo = () => {
    let errorCells = [];
    let notFinishedCells = [];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (cell.textContent === '') {
            notFinishedCells.push(cell);
        } else if (cell.textContent !== switchedSolvedBinoxxo[cell.dataset.row][cell.dataset.col]) {
            errorCells.push(cell);
        }
    });
    if (errorCells.length === 0 && notFinishedCells.length === 0) {
        showSuccessElement();
    } else if (notFinishedCells.length > 0) {
        showNotFinishedElement(notFinishedCells);
    } else if (notFinishedCells.length <= 0 && errorCells.length > 0) {
        showErrorElement(errorCells);
    }
}

const showErrorElement = (errors) => {
    errors.forEach(cell => {
        cell.style.backgroundColor = 'red';
    });
    setTimeout(() => {
        errors.forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    }, 3000);
    const errorElement = document.getElementById('messages');
    errorElement.innerText = `There are ${errors.length} errors in the puzzle`;
}

const showNotFinishedElement = (cells) => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'lightcoral';
    });
    setTimeout(() => {
        cells.forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    }, 3000);
    const errorElement = document.getElementById('messages');
    errorElement.innerText = `There are cells that are not finished yet!`;
}

const showSuccessElement = () => {
    const successElement = document.getElementById('messages');
    successElement.style.color = 'green';
    successElement.innerText = `Congratulations! You solved the puzzle!`;

    const confettiContainer = document.getElementById('confetti');

    // Create and append multiple confetti elements
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`; // Random horizontal position
        confetti.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay

        confetti.style.backgroundColor = getRandomColor();

        confettiContainer.appendChild(confetti);
    }
}

// Function to generate a random color in hexadecimal format
// ChatGpt
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}