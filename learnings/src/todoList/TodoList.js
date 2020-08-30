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
    this.setState(state => {
      const index = state.todos.findIndex(todo => todo.id === id);
      const todo = state.todos[index];
      const newTodos = [...state.todos];
      newTodos.splice(index, 1, { ...todo, isCompleted: !todo.isCompleted });
      return { todos: newTodos };
    });
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
