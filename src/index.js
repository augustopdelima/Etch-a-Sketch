
const MAX_WINDOW_SIZE = 800;

function addHover() {
    const grid = document.getElementById("root");
    grid.addEventListener("mouseover", (event) => {

        console.log(event.target.tagName);

        if (event.target.tagName != "DIV") {
            return;
        }

        const block = document.getElementById(event.target.id);
        block.style.background = "black";
    });
}


function createGrid(gridBlocks = 16) {
    const grid = document.getElementById("root");
    let gridArea = gridBlocks * gridBlocks;

    let windowWidth = window.innerWidth > MAX_WINDOW_SIZE ? MAX_WINDOW_SIZE : window.innerWidth;

    const gridSize = Math.floor(windowWidth / gridBlocks) * gridBlocks;
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;

    let blockSize = gridSize / gridBlocks;

    for (let i = 0; i < gridArea; i++) {
        let block = document.createElement("div");
        block.id = i;
        block.classList.add("grid-block");
        block.style.height = `${blockSize}px`;
        block.style.width = `${blockSize}px`;

        grid.appendChild(block);
    }
}

function removeGrid(){
    const grid = document.getElementById("root");
    let child = grid.lastElementChild;
    while(child){
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function handleChangeGridDisplay() {
    const input = document.getElementById("input-grid");
    const rangeNumber = document.getElementById("range-number");

    input.addEventListener("change", (event) => {
        let value = Number(event.target.value);

        if(value < 1) return;
        if(value > 100) return;
        rangeNumber.textContent = value;
        removeGrid();
        createGrid(value);
        
    });
}

createGrid();
addHover();
handleChangeGridDisplay();
