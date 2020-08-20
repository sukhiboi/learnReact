class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const para = React.createElement('p', null, `Hello ${this.props.name}`);
    return para;
  }
}

const root = document.getElementById('root');
ReactDOM.render(React.createElement(Greeting, { name: 'sukhi' }), root);
