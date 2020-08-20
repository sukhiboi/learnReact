class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const createBtn = delta => {
      return React.createElement(
        'button',
        {
          onClick: () =>
            this.setState(state => ({ count: state.count + delta })),
        },
        `Add ${delta}`
      );
    };

    const countValue = React.createElement(
      'span',
      { style: { padding: 10 } },
      this.state.count
    );
    const elements = [createBtn(1), countValue, createBtn(-1)];
    return React.createElement('div', null, ...elements);
  }
}

const root = document.getElementById('root');
ReactDOM.render(React.createElement(Counter), root);
