import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../redux/store";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

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
        <h1>Hello World</h1>
        <h3>Todo App</h3>
        <TodoForm
          inputText={inputText}
          handleSubmit={this.handleSubmit}
          onHandleNewChange={onHandleNewChange}
        />
        <button onClick={() => onHandleToggleCheckboxAll()}>All Done</button>
        <div className="TodoList">
          {todos.length === 0 ? (
            <span>No Items</span>
          ) : (
            <TodoList
              todos={todos}
              onHandleToggleTodo={onHandleToggleTodo}
              onHandleTodoDelete={onHandleTodoDelete}
            />
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
