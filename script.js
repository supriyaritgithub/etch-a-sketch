const container = document.querySelector('.grid-container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    container.insertAdjacentElement('beforeend', gridCell);
}