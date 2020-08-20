class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = React.createElement('p', null, 'Hello World');
    return element;
  }
}

const root = document.getElementById('root');
ReactDOM.render(React.createElement(HelloWorld), root);
