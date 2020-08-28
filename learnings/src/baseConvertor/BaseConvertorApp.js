import React from 'react';
import BaseConvertor from './BaseConvertor';

class BaseConvertorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateValue = this.updateValue.bind(this);
  }

  convertToDecimal(number, base) {
    const digits = number.split('').reverse();
    return digits.reduce((decimal, digit, idx) => {
      if (digit >= base) return NaN;
      return +digit * Math.pow(base, idx) + decimal;
    }, 0);
  }

  updateValue(e, base) {
    const decimalValue = this.convertToDecimal(e.target.value, base);
    this.setState(state => {
      return { value: isNaN(decimalValue) ? state.value : decimalValue };
    });
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
