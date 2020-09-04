import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => ({ value }));
    this.props.onChange(value);
  }

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
  }
}

const withValidation = function (Component, isValid) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.validate = this.validate.bind(this);
    }

    validate(text) {
      if (isValid(text)) this.props.onChange(text);
    }

    render() {
      return <Component onChange={this.validate} />;
    }
  };
};

const ValidateInput = withValidation(Input, text => text.length <= 5);

class Hoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.textChanged = this.textChanged.bind(this);
  }

  textChanged(text) {
    this.setState(() => ({ text }));
  }

  render() {
    return (
      <div>
        <ValidateInput onChange={this.textChanged} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Hoc;
