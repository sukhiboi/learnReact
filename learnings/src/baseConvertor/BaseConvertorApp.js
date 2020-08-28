import React from 'react';
import BaseConvertor from './BaseConvertor';

class BaseConvertorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e, base) {
    const newValue = e.target.value;
    const lastDigit = Number(newValue.slice(-1));
    const isValidNum = isNaN(parseInt(lastDigit, base));
    this.setState(({ value }) => ({
      value: isValidNum ? value : parseInt(newValue, base),
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
