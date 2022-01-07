const GameBoard = () => {
    const board = [
        ['x','x','o'],
        ['o','x','o'],
        ['x','o','o']
    ];

    const selection = (row, column) => board[row-1][column-1] = "x";
    
    return {board, selection}


}

const newGame = GameBoard();