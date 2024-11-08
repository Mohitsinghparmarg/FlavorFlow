import React, { useState } from 'react';

export const OfflineGame = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        return (
            <button
                className="w-16 h-16 mx-2 text-4xl font-bold bg-white rounded shadow hover:bg-blue-100 focus:outline-none"
                onClick={() => handleClick(index)}
            >
                {board[index]}
            </button>
        );
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">Tic-Tac-Toe (Offline Game)</h1>
            <div className="text-xl mb-4 text-gray-700">
                {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button
                className="mt-4 px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                onClick={restartGame}
            >
                Restart Game
            </button>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};
