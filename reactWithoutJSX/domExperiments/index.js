class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  componentDidMount() {
    console.log('got mounted');
  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  render() {
    const { color, fontFamily, fontSize } = this.props;
    const textDecoration = this.state.checked ? 'line-through' : 'none';
    const item = React.createElement(
      'div',
      {
        style: { color, fontFamily, fontSize, textDecoration },
        onClick: () => this.setState(state => ({ checked: !state.checked })),
      },
      `Hello ${this.props.name}`
    );
    return item;
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = [];
    for (let i = 0; i < 50; i++)
      elements.push(React.createElement(TodoItem, this.props));
    elements.push(
      React.createElement(TodoItem, { ...this.props, name: 'Revathi' })
    );
    return React.createElement('div', null, elements);
  }
}

const root = ReactDOM.render(
  React.createElement(TodoList, {
    name: 'sukhi',
    color: 'blue',
    fontFamily: 'Arial',
    fontSize: 18,
  }),
  root
);
