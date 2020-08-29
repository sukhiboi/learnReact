import React from 'react';
import InputBar from './InputBar';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addNewTodo(content) {
    const todo = {
      content,
      id: this.state.todos.length + 1,
      isCompleted: false,
    };
    this.setState(state => ({ todos: [...state.todos, todo] }));
  }

  toggleTodo(id) {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todo = this.state.todos[index];
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1, { ...todo, isCompleted: !todo.isCompleted });
    this.setState(() => ({ todos: newTodos }));
  }

  render() {
    return (
      <div>
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: 20,
            fontWeight: 700,
            paddingBottom: 10,
          }}
        >
          Todo
        </div>
        {this.state.todos.map(todo => (
          <TodoItem todo={todo} onClick={this.toggleTodo} key={todo.id} />
        ))}
        <InputBar onEnter={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
