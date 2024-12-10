const grid = document.getElementById("root");
let gridBlocks = 16;
let gridArea = gridBlocks * gridBlocks;
let blockSize = grid.clientWidth / gridBlocks - 2;

for (let i = 0; i < gridArea; i++) {
    let block = document.createElement("div");
    block.classList.add("grid-block"); 
    block.style.width = `${blockSize}px`
    
    grid.appendChild(block);
}