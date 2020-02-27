import React from "react";

const TodoItem = props => (
  <li className={props.done ? "done" : ""}>
    <input
      type="checkbox"
      onChange={event =>
        props.onHandleToggleTodo({
          index: props.index,
          done: event.target.checked
        })
      }
      checked={props.done}
    />
    {props.item}
    <button onClick={() => props.onHandleTodoDelete(props.index)}>
      Delete todo
    </button>
  </li>
);

export default TodoItem;
