import React, { useState } from 'react';
import './GameBoard.css';

function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Initialize board with 9 null values
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); // Initialize with player 1's turn

  // Function to handle a cell click
  const handleCellClick = (index) => {
    const newBoard = [...board]; // Create a copy of the board array
    newBoard[index] = isPlayer1Turn ? 'X' : 'O'; // Update the selected cell with X or O
    setBoard(newBoard); // Update the state with the new board array
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

  return (
    <div className="game-board">
      <h1>Tic Tac Toe</h1>
      {renderBoard()}
    </div>
  );
}

export default GameBoard;
