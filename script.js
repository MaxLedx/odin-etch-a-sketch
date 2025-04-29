const CONTAINER_SIZE = 960;

const button = document.querySelector('#grid-size-button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    try {
        let size = parseInt(prompt('Size'));
        size = Math.abs(size);
        if (size > 100) {
            size = 100;
        }
        cleanGrid();
        setupGrid(size);
    } catch (error) {
        cleanGrid();
        setupGrid();
    }
});

window.addEventListener('load', () => {
    cleanGrid();
    setupGrid();
});

function cleanGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function setupGrid(squaresPerSide = 16) {
    const squareCount = squaresPerSide * squaresPerSide;
    const squareSize = CONTAINER_SIZE / squaresPerSide;
    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement('div');
        square.style = `width: ${squareSize}px; height: ${squareSize}px;`
        square.addEventListener('mouseover', event => {
            event.target.classList.add('color');
        });
        container.appendChild(square);
    }
}