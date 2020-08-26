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
      symbol: 'X',
      board: [...Array(9)].reduce((b, _, i) => ({ ...b, [++i]: '' }), {}),
      gameFinished: false,
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(fieldId) {
    const board = { ...this.state.board, [fieldId]: this.state.symbol };
    const symbol = this.state.symbol === 'X' ? 'O' : 'X';
    const gameFinished = winningCombinations.some(c => {
      return c.every(f => board[f] === this.state.symbol);
    });
    this.setState(state => ({
      board,
      gameFinished,
      symbol: gameFinished ? state.symbol : symbol,
    }));
  }

  render() {
    if (this.state.gameFinished) return <div>{this.state.symbol} won</div>;
    const fieldIds = Object.keys(this.state.board);
    const fieldValues = fieldIds.map(f => this.state.board[f]);
    const fields = fieldValues.map((fieldValue, id) => {
      const fieldId = ++id;
      return (
        <Field
          symbol={fieldValue}
          id={fieldId}
          key={fieldId}
          onClick={this.updateGame}
        />
      );
    });
    return (
      <div>
        <div className='board'>{fields}</div>
        <span>{this.state.symbol}'s turn</span>
      </div>
    );
  }
}

export default TicTacToe;
