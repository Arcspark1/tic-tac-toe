const gameBoard = (() => {
    const board_section = document.querySelector(".board");
    const board = [];


    const clickedCell = function() {
        let cellId = this.classList.item(0);
        cellId = cellId.replace("cell-", "");
        console.log(cellId);
        update_cell(`${cellId}`, "x");
    }        
        
    //for loop to generate the cell elements in the board section
    //sets an onclick event to update aray and set text content
    for (let i = 0; i < 9; i++){
        const newCell = document.createElement("div");
        newCell.classList.add(`cell-${i}`);
        newCell.onclick = clickedCell;
        board_section.appendChild(newCell);
        board[i] = "";
    }

    //Updates The cell based on index and what symbol either "x" or "o"
    // adds the symbol to the array, and adds the symbol to the text content
    const update_cell = (index, symbol) => {
        board[index] = symbol;
        const selected_cell = document.querySelector(`.cell-${index}`);
        selected_cell.textContent = `${symbol}`;
    }

    return{board, update_cell};
})();
