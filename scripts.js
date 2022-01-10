// const GameBoard = () => {
//     const board = [
//         ['x', 'x', 'o'],
//         ['o', 'x', 'o'],
//         ['x', 'o', 'o']
//     ];
//     const selection = (row, column) => board[row - 1][column - 1] = "x";
//     return { board, selection }
// }

const gameboard = (() => {
    const board = [
        [],
        [],
        []
    ];

    const selection = (row,column) => board[row - 1][column - 1] = "x";
    return {board, selection};
})();

gameboard.selection(2,1);
gameboard.selection(2,2);
gameboard.selection(2,3);
console.log(gameboard.board);