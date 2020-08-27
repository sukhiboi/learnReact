import React from 'react';
import Field from './Field';
import './tictactoe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: { name: 'sukhi', symbol: 'X' },
      nextPlayer: { name: 'someone', symbol: 'O' },
      board: Array.from({ length: 9 }, () => ''),
      isGameDrawn: false,
      winner: null,
    };
    this.updateGame = this.updateGame.bind(this);
  }

  hasWon(board, currentPlayer) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombinations.some(combination => {
      return combination.every(fieldId => {
        return board[fieldId] === currentPlayer.symbol;
      });
    });
  }

  updateGame(fieldId) {
    this.setState(({ board, currentPlayer, nextPlayer }) => {
      if (board[fieldId] !== '') return {};
      const updatedBoard = [...board];
      updatedBoard[fieldId] = currentPlayer.symbol;
      return {
        board: updatedBoard,
        isGameDrawn: updatedBoard.every(value => value !== ''),
        winner: this.hasWon(updatedBoard, currentPlayer) ? currentPlayer : null,
        currentPlayer: nextPlayer,
        nextPlayer: currentPlayer,
      };
    });
  }

  render() {
    if (this.state.winner) return <div>{this.state.winner.name} won</div>;
    if (this.state.isGameDrawn) return <div>Game tie</div>;
    const tiles = this.state.board.map((value, id) => (
      <Field value={value} id={id} key={id} onClick={this.updateGame} />
    ));
    return (
      <div>
        <span>Tic Tac Toe</span>
        <div className='board'>{tiles}</div>
        <span>{this.state.currentPlayer.name}'s turn</span>
      </div>
    );
  }
}

export default TicTacToe;
