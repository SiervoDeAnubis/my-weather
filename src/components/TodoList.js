import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => (
  <ul>
    {props.todos.map((todo, index) => (
      <TodoItem
        key={index}
        {...todo}
        index={index}
        onHandleToggleTodo={props.onHandleToggleTodo}
        onHandleTodoDelete={props.onHandleTodoDelete}
      />
    ))}
  </ul>
);

export default TodoList;
