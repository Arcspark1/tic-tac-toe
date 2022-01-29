const gameBoard = (() => {
    const board_section = document.querySelector(".board");
    const board = [];

    ///Clicked cell function to be used as an onclick function to each cell, calls the update cell function to update the board array aswell as the 
    ///text content of the cell.
    const clickedCell = function() {
        const cellId = this.classList.item(0);
        newCellId = cellId.replace("cell-", "");
        console.log(playerTurn);
        updateCell(`${newCellId}`);
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

    ///Predetermined win conditions
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
    
    ///player count variable to indicate which symbol to use, odds for "o" even for "x"
    let playerTurn = 1;

    const updateCell = (index) => {
        if (playerTurn % 2 === 1) {
            symbol = "o";
        } else {
            symbol ="x";
        }
        board[index] = symbol;
        const selected_cell = document.querySelector(`.cell-${index}`);
        if (selected_cell.textContent === ""){
            selected_cell.textContent = `${symbol}`;
            playerTurn += 1;
        }
    }

    return{board, updateCell, checkWinCondition};
})();

