const container = document.querySelector(".grid-container");
const gridSize = 16;
const resetButton = document.querySelector(".reset");
const square = document.querySelector("div");

function createGrid () {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        container.insertAdjacentElement('beforeend', gridCell);
    }
}

square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", ".color");
});

resetButton.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid();
});

createGrid();