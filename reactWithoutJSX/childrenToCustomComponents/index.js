class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = React.createElement('p', null, ['Hello Sukhi', ...this.props.children]);
    return element;
  }
}

const finalElement = React.createElement(
  HelloWorld,
  null, 
  React.createElement('p', null, 'hello'),
  'hello universe'
);

const root = document.getElementById('root');
ReactDOM.render(finalElement, root);
