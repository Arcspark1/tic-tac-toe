// Game Board using multi level array.
//selection sets array to "x"
const gameboard = (() => {
    const board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    const selection = (row,column) => board[row - 1][column - 1] = "x";
    return {board, selection};
})();

//Create Game Board HTML ELements

const gameBoardElements = document.querySelector(".board");


