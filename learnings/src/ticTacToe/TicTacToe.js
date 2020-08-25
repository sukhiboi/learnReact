import React from 'react';
import Field from './Field';
import './tictactoe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSymbol: 'X',
      board: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
      },
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(fieldId) {
    this.setState(state => {
      return {
        board: { ...state.board, [fieldId]: state.currentSymbol },
        currentSymbol: state.currentSymbol === 'X' ? 'O' : 'X',
      };
    });
  }

  render() {
    const fieldIds = Object.keys(this.state.board);
    const fieldValues = fieldIds.map(field => this.state.board[field]);
    return (
      <div className='board'>
        {fieldValues.map((fieldValue, id) => {
          const fieldId = ++id;
          return (
            <Field
              symbol={fieldValue}
              id={fieldId}
              key={fieldId}
              onClick={this.updateGame}
            />
          );
        })}
      </div>
    );
  }
}

export default TicTacToe;
