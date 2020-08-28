import React from 'react';
import BaseConvertor from './BaseConvertor';

class BaseConvertorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateValue = this.updateValue.bind(this);
  }

  isValidNum(number, base) {
    return [...number].every(digit => +digit >= 0 && +digit < base);
  }

  updateValue(e, base) {
    const newValue = e.target.value;
    const isValidNum = this.isValidNum(newValue, base);
    this.setState(({ value }) => ({
      value: isValidNum ? parseInt(newValue, base) : value,
    }));
  } 

  render() {
    const bases = Array.from({ length: 15 }, (_, i) => i + 2);
    const baseConvertors = bases.map((base, idx) => (
      <BaseConvertor
        value={this.state.value}
        base={base}
        key={idx}
        onChange={this.updateValue}
      />
    ));
    return <div>{baseConvertors}</div>;
  }
}

export default BaseConvertorApp;
