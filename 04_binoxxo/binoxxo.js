const binoxxoContainer = document.getElementById('binoxxoContainer');

// Function to generate the game board grid
function generateGameBoard(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            row.appendChild(cell);
        }

        binoxxoContainer.appendChild(row);
    }
}

function handleCellClick(event) {
    const cell = event.target;
    // TODO
}

// Generate a 6x6 game board
generateGameBoard(6);
