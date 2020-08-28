import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    const parsed = parseInt(input, this.props.base);
    const newValue = isNaN(parsed) ? 0 : parsed;
    this.props.onChange(newValue);
  }

  render() {
    const { value, base } = this.props;
    return (
      <div style={{ fontFamily: 'sans-serif', margin: '10px 0' }}>
        <span style={{ padding: 10 }}>Base {base}</span>
        <input value={value.toString(base)} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Base;
