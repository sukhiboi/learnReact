import React from 'react';
import Button from './Button.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  decrement() {
    this.setState(state => ({ count: state.count - 1 }));
  }

  render() {
    return (
      <div>
        <Button name='+' onClick={this.increment} />
        <span>{this.state.count}</span>
        <Button name='-' onClick={this.decrement} />
      </div>
    );
  }
}

export default Counter;
