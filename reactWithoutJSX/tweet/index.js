class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    const { color, fontFamily, fontSize } = this.props;
    const textDecoration = this.state.checked ? 'line-through' : 'none';
    const item = React.createElement(
      'span',
      {
        style: { color, fontFamily, fontSize, textDecoration },
        onClick: () => this.setState(state => ({ checked: !state.checked })),
      },
      `Hello ${this.props.name}`
    );
    return item;
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  React.createElement(TodoItem, {
    name: 'sukhi',
    color: 'blue',
    fontFamily: 'Arial',
    fontSize: 18,
  }),
  root
);
