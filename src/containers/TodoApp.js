import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../redux/store";

class TodoApp extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const inputText = this.props.inputText;
    this.setState({
      inputText: "",
      todos: [
        ...this.props.todos,
        {
          item: inputText,
          done: false
        }
      ]
    });
  };

  handleToggleCheckbox = (event, index) => {
    const todos = [...this.props.todos];
    todos[index].done = event.target.checked;
    this.setState({
      ...this.props,
      todos
    });
  };

  handleDeleteTodo = index => {
    const todos = [...this.props.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  };

  handleAllDone = () => {
    const todos = this.props.todos.map(todo => ({ ...todo, done: true }));
    this.setState({
      todos
    });
  };

  render() {
    const { inputText, todos, onHandleNewChange } = this.props;

    return (
      <div className="TodoApp">
        <h3>Todo App</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="new_item">New item : </label>
          <input
            type="text"
            value={inputText}
            onChange={event => onHandleNewChange(event.target.value)}
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

const mapDispatchToProps = (dispatch, { handleNewChange } = actions) => {
  return {
    onHandleNewChange(newInput) {
      dispatch(handleNewChange(newInput));
    }
  };
};

const mapStateToProps = state => {
  return {
    inputText: state.inputText,
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
