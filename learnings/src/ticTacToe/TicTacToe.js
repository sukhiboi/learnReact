import React from 'react';
import Field from './Field';
import './tictactoe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'sukhdev', symbol: 'X' },
        { name: 'someone', symbol: 'O' },
      ],
      currentUser: 0,
      boardValues: Array.from({ length: 9 }, () => ''),
    };
    this.markField = this.markField.bind(this);
  }

  markField(fieldId) {
    this.setState(state => {
      const newBoardValues = state.boardValues.slice();
      const currentUser = state.users[state.currentUser];
      newBoardValues[fieldId] = currentUser.symbol;
      return {
        boardValues: newBoardValues,
        currentUser: state.currentUser === 1 ? 0 : 1,
      };
    });
  }

  render() {
    return (
      <div className='board'>
        {this.state.boardValues.map((fieldValue, id) => {
          return (
            <Field
              symbol={fieldValue}
              id={id}
              key={id}
              onClick={this.markField}
            />
          );
        })}
      </div>
    );
  }
}

export default TicTacToe;
