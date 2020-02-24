import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      todos: [
        {
          item: "item1",
          done: false
        },
        {
          item: "item2",
          done: false
        },
        {
          item: "item3",
          done: false
        }
      ]
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const inputText = this.state.inputText;
    this.setState({
      inputText: "",
      todos: [
        ...this.state.todos,
        {
          item: inputText,
          done: false
        }
      ]
    });
  };

  handleChangeNewItem = event => {
    const inputText = event.target.value;
    this.setState({
      inputText
    });
  };

  handleToggleCheckbox = (event, index) => {
    const todos = [...this.state.todos];
    todos[index].done = event.target.checked;
    this.setState({
      ...this.state,
      todos
    });
  };

  handleDeleteTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  };

  handleAllDone = () => {
    const todos = this.state.todos.map(todo => ({ ...todo, done: true }));
    this.setState({
      todos
    });
  };

  render() {
    const { inputText, todos } = this.state;

    return (
      <div className="TodoApp">
        <h3>Todo App</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="new_item">New item : </label>
          <input
            type="text"
            value={inputText}
            onChange={event => this.handleChangeNewItem(event)}
          />
          <button>Add New Item</button>
        </form>
        <button onClick={() => this.handleAllDone()}>All Done</button>
        <div className="TodoList">
          {todos.length === 0 ? (
            <span>No Items</span>
          ) : (
            <ul>
              {todos.map(({ item, done }, index) => (
                <li key={index} className={done ? "done" : ""}>
                  <input
                    type="checkbox"
                    onChange={event => this.handleToggleCheckbox(event, index)}
                    checked={done}
                  />
                  {item}
                  <button onClick={() => this.handleDeleteTodo(index)}>
                    Delete todo
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default TodoApp;
