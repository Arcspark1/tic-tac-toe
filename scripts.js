const gameBoard = (() => {
    const board_section = document.querySelector(".board");
    const board = [];


    const clickedCell = function() {
        let cellId = this.classList.item(0);
        cellId = cellId.replace("cell-", "");
        console.log(cellId);
        updateCell(`${cellId}`, "x");
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

    ///Check Win Condition
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    ///Checking for win condition, Loops through each array pre determined to check that 3 in a row of either o's or x's are the same.
    ///if 3 in a row are detected it will return a string of either player one for "o" or player two for "x"
    const checkWinCondition = () => {
        let win = "";
        winConditions.forEach(winCon => {
           let countPlayerOne = 0;
           let countPlayerTwo = 0;
           winCon.forEach(index => {
               if(board[index]=== "o"){
                   countPlayerOne += 1;
               } else if(board[index]==="x"){
                   countPlayerTwo += 1;
               }
           });
        if(countPlayerOne === 3){
            win = "playerOne";
        } else if (countPlayerTwo === 3){
            win = "playerTwo";
        }
        });
        return win;
    }

    //Updates The cell based on index and what symbol either "x" or "o"
    // adds the symbol to the array, and adds the symbol to the text content
    const updateCell = (index, symbol) => {
        board[index] = symbol;
        const selected_cell = document.querySelector(`.cell-${index}`);
        selected_cell.textContent = `${symbol}`;
    }

    return{board, updateCell, checkWinCondition};
})();

const playerFactory = (id, symbol) => {
    return {id, symbol};
};
