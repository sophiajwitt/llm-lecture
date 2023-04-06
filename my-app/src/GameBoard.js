import React, { useState } from 'react';
import './GameBoard.css';

function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Initialize board with 9 null values
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); // Initialize with player 1's turn

  const handleCellClick = (index) => {
    if (board[index] !== null) {
      return; // Do nothing if cell is already filled
    }
  
    const newBoard = [...board]; // Create a copy of the board array
    newBoard[index] = isPlayer1Turn ? 'X' : 'O'; // Update the selected cell with X or O
    setBoard(newBoard); // Update the state with the new board array
    
    // Check for a win condition
    const winningCombinations = [    // Horizontal    [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        // A player has won, display a message and highlight the winning combination
        const message = `Player ${isPlayer1Turn ? '1' : '2'} has won!`;
        alert(message);
        
        // Highlight the winning cells
        const winningCells = document.querySelectorAll(`.cell:nth-child(${a + 1}), .cell:nth-child(${b + 1}), .cell:nth-child(${c + 1})`);
        for (let cell of winningCells) {
          cell.classList.add('winning');
        }
      }
    }
  
    setIsPlayer1Turn(!isPlayer1Turn); // Toggle the turn between players
  };
  

  // Function to render a single cell
  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  

  // Function to render the entire game board
  const renderBoard = () => {
    return (
      <div className="board">
        <div className="row">
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className="row">
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className="row">
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
    );
  };

  // Function to render the current turn indicator
  const renderTurnIndicator = () => {
    const player = isPlayer1Turn ? 'X' : 'O';
    return (
      <div className="turn-indicator">
        Current Turn: {player}
      </div>
    );
  };

  return (
    <div className="game-board">
      <h1>Tic Tac Toe</h1>
      {renderTurnIndicator()}
      {renderBoard()}
    </div>
  );
}

export default GameBoard;
