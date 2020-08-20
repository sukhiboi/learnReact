class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, fontFamily, fontSize } = this.props;
    const para = React.createElement(
      'p',
      { style: { color, fontFamily, fontSize } },
      `Hello ${this.props.name}`
    );
    return para;
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  React.createElement(Greeting, {
    name: 'sukhi',
    color: 'blue',
    fontFamily: 'Arial',
    fontSize: 36
  }),
  root
);
