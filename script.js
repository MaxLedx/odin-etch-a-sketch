const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');

function createGrid(size) {
    gridContainer.innerHTML = ''; // Clear existing squares

    // Calculate the size of each square based on the grid size
    const squareSize = 800 / size; // 800px fixed width for the grid

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(square);
    }
}

function clearGrid() {
    // Remove all child nodes from the grid container
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resizeGrid() {
    let newSize = prompt("Enter new grid size (1-100):");
    newSize = Math.max(1, Math.min(newSize, 100)); // Limit size between 1 and 100
    createGrid(newSize);
}

clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);

// Initialize the grid with a default size
createGrid(16);
