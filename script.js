const GRID_SIZE_IN_PX = 1000;

const button = document.querySelector(".button");
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    const size = prompt('Grid size: 1 to 100', '16');
    const parsedSize = Number.parseInt(size);
    if (parsedSize !== NaN && parsedSize >= 1 && parsedSize <= 100) {
        cleanGrid();
        createGrid(parsedSize)
    }
});

createGrid();

function createGrid(squaresPerSide = 16) {
    const squareSizeInPx = GRID_SIZE_IN_PX / squaresPerSide;
    for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSizeInPx}px`;
        square.style.height = `${squareSizeInPx}px`;
        square.classList.add('square');
        square.addEventListener('mouseover', () => square.classList.add('square-colored'));
        container.appendChild(square);
    }
}

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function cleanGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}