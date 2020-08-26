import React from 'react';
import Field from './Field';
import './tictactoe.css';

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerSymbol: 'X',
      board: Array.from({ length: 9 }).reduce((fields, _, idx) => {
        return { ...fields, [++idx]: '' };
      }, {}),
      isGameFinished: false,
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(fieldId) {
    this.setState(state => {
      if (state.board[fieldId] !== '') return state;
      const board = { ...state.board, [fieldId]: state.currentPlayerSymbol };
      const currentPlayerSymbol = state.currentPlayerSymbol === 'X' ? 'O' : 'X';
      const isGameFinished = winningCombinations.some(combination => {
        return combination.every(fieldId => {
          return board[fieldId] === state.currentPlayerSymbol;
        });
      });
      return {
        board,
        isGameFinished,
        currentPlayerSymbol: isGameFinished
          ? state.currentPlayerSymbol
          : currentPlayerSymbol,
      };
    });
  }

  render() {
    if (this.state.isGameFinished)
      return <div>{this.state.currentPlayerSymbol} won</div>;
    const fieldIds = Object.keys(this.state.board);
    const fields = fieldIds.map(id => {
      return (
        <Field
          symbol={this.state.board[id]}
          id={id}
          key={id}
          onClick={this.updateGame}
        />
      );
    });
    return (
      <div>
        <span className='heading'>Tic Tac Toe</span>
        <div className='board'>{fields}</div>
        <span className='player-info'>
          {this.state.currentPlayerSymbol}'s turn
        </span>
      </div>
    );
  }
}

export default TicTacToe;
