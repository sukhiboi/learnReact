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
    this.setState(state => {
      const todo = {
        content,
        id: state.todos.length + 1,
        state: 0,
      };
      return {
        todos: [...state.todos, todo],
      };
    });
  }

  toggleTodo(id) {
    this.setState(state => {
      const index = state.todos.findIndex(todo => todo.id === id);
      const todo = state.todos[index];
      const updatedTodo = { ...todo, state: (todo.state + 1) % 3 };
      const todos = [...state.todos];
      todos[index] = updatedTodo;
      return { todos };
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
