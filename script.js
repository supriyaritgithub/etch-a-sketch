const container = document.querySelector(".grid-container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");

        gridCell.addEventListener("mouseover", function(event) {
            event.target.classList.add("color");
        });

        container.appendChild(gridCell);
    }
}

createGrid(16);