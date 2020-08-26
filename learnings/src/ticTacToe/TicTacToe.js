import React from 'react';
import Field from './Field';
import './tictactoe.css';

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
      const board = { ...state.board };
      board[fieldId] = state.currentPlayerSymbol;
      const currentPlayerSymbol = state.currentPlayerSymbol === 'X' ? 'O' : 'X';
      const { winningCombinations } = this.props;
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
        <span>Tic Tac Toe</span>
        <div className='board'>{fields}</div>
        <span>{this.state.currentPlayerSymbol}'s turn</span>
      </div>
    );
  }
}

export default TicTacToe;
