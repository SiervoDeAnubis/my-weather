import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../redux/store";

class TodoApp extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.onHandleTodoForm();
    this.props.onHandleNewChange("");
  };

  render() {
    const {
      inputText,
      todos,
      onHandleNewChange,
      onHandleToggleCheckboxAll,
      onHandleTodoDelete,
      onHandleToggleTodo
    } = this.props;

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
        <button onClick={() => onHandleToggleCheckboxAll()}>All Done</button>
        <div className="TodoList">
          {todos.length === 0 ? (
            <span>No Items</span>
          ) : (
            <ul>
              {todos.map(({ item, done }, index) => (
                <li key={index} className={done ? "done" : ""}>
                  <input
                    type="checkbox"
                    onChange={event =>
                      onHandleToggleTodo({ index, done: event.target.checked })
                    }
                    checked={done}
                  />
                  {item}
                  <button onClick={() => onHandleTodoDelete(index)}>
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

const mapDispatchToProps = (
  dispatch,
  {
    handleNewChange,
    handleTodoForm,
    handleToggleCheckboxAll,
    handleTodoDelete,
    handleToggleTodo
  } = actions
) => {
  return {
    onHandleNewChange(newInput) {
      dispatch(handleNewChange(newInput));
    },
    onHandleTodoForm() {
      dispatch(handleTodoForm());
    },
    onHandleToggleCheckboxAll() {
      dispatch(handleToggleCheckboxAll());
    },
    onHandleTodoDelete(index) {
      dispatch(handleTodoDelete(index));
    },
    onHandleToggleTodo(todo) {
      dispatch(handleToggleTodo(todo));
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
