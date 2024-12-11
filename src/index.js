
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
    let blockSize = grid.clientWidth / gridBlocks - 2;

    for (let i = 0; i < gridArea; i++) {
        let block = document.createElement("div");
        block.id = i;
        block.classList.add("grid-block");
        block.style.width = `${blockSize}px`

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

    input.addEventListener("change", (event) => {
        let value = Number(event.target.value);

        if(value < 1) return;
        if(value > 100) return;

        removeGrid();
        createGrid(value);
    });
}

createGrid();
addHover();
handleChangeGridDisplay();
