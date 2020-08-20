class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    const para = React.createElement(
      'p',
      { style: { color } },
      `Hello ${this.props.name}`
    );
    return para;
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  React.createElement(Greeting, { name: 'sukhi', color: 'blue' }),
  root
);
