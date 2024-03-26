const initialBinoxxo = [
    ['', 'O', '', '', '', ''],
    ['O', '', 'O', 'O', '', ''],
    ['', '', 'X', 'X', '', ''],
    ['', 'O', '', 'X', 'X', ''],
    ['', 'X', '', '', '', 'O'],
    ['', '', 'X', '', '', 'X']
];

// Switch the rows and columns of the initialBinoxxo array, so it looks like the example above
const switchedBinoxxo = initialBinoxxo[0].map((col, i) => initialBinoxxo.map(row => row[i]));


document.addEventListener("DOMContentLoaded", function() {
    const binoxxoContainer = document.getElementById('binoxxoContainer');

    // Function to generate the game board grid
    function generateGameBoard(size) {
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
                }
                row.appendChild(cell);
            }

            binoxxoContainer.appendChild(row);
        }
    }

    function handleCellClick(event) {
        const cell = event.target;
        if (cell.textContent === 'O') {
            cell.textContent = '';
        } else if (cell.textContent === 'X') {
            cell.textContent = 'O';
        } else if (cell.textContent === '') {
            cell.textContent = 'X';
        }
    }

    // Generate a 6x6 game board
    generateGameBoard(6);
});
