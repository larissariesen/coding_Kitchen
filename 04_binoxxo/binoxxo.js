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

document.addEventListener("DOMContentLoaded", function() {
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
                if(cell.textContent === '') {
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
        if(cell.textContent === '') {
            cell.style.backgroundColor = 'white';
        }
    });
}

const checkBinoxxo = () => {
    let errors = 0;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (cell.textContent !== switchedSolvedBinoxxo[cell.dataset.row][cell.dataset.col]) {
            cell.style.backgroundColor = 'red';
            errors++;
        }
    });
    if (errors === 0) {
        alert('Congratulations! You solved the puzzle!');
    } else {
        alert(`There are ${errors} errors in the puzzle.`);
    }
}

const checkRows = () => {

}

const checkColumns = () => {

}
