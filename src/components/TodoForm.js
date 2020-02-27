import React from "react";

const TodoForm = props => (
  <form onSubmit={event => props.handleSubmit(event)}>
    <label htmlFor="new_item">New item : </label>
    <input
      type="text"
      value={props.inputText}
      onChange={event => props.onHandleNewChange(event.target.value)}
    />
    <button>Add New Item</button>
  </form>
);

export default TodoForm;
