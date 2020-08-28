import React from 'react';
import Base from './Base';

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e, base) {
    const input = e.target.value;
    this.setState(() => ({ value: parseInt(input, base) }));
  }

  render() {
    const bases = Array.from({ length: 15 }, (_, i) => i + 2);
    const baseConvertors = bases.map((base, id) => (
      <Base
        value={this.state.value}
        base={base}
        key={id}
        onChange={this.updateValue}
      />
    ));
    return <div>{baseConvertors}</div>;
  }
}

export default BaseConvertor;
