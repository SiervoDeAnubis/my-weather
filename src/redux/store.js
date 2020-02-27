export const TODO_NEW_CHANGE = "TODO_NEW_CHANGE";
export const TODO_HANDLE_FORM = "TODO_HANDLE_FORM";
export const TODO_HANDLE_TOGGLE_ALL = "TODO_HANDLE_TOGGLE_ALL";
export const TODO_HANDLE_DELETE = "TODO_HANDLE_DELETE";
export const TODO_HANDLE_TOGGLE = "TODO_HANDLE_TOGGLE";

const initialState = {
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

export const actions = {
  handleNewChange(newTodo) {
    return {
      type: TODO_NEW_CHANGE,
      newTodo
    };
  },
  handleTodoForm() {
    return {
      type: TODO_HANDLE_FORM
    };
  },
  handleToggleCheckboxAll() {
    return {
      type: TODO_HANDLE_TOGGLE_ALL
    };
  },
  handleTodoDelete(index) {
    return {
      type: TODO_HANDLE_DELETE,
      index
    };
  },
  handleToggleTodo(todo) {
    return {
      type: TODO_HANDLE_TOGGLE,
      todo
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_NEW_CHANGE: {
      const inputText = action.newTodo;
      return {
        ...state,
        inputText
      };
    }
    case TODO_HANDLE_FORM: {
      const inputText = state.inputText;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: inputText,
            done: false
          }
        ]
      };
    }
    case TODO_HANDLE_TOGGLE_ALL: {
      const todos = state.todos.map(todo => ({ ...todo, done: true }));
      return {
        ...state,
        todos
      };
    }
    case TODO_HANDLE_DELETE: {
      const todos = [...state.todos];
      todos.splice(action.index, 1);
      return {
        ...state,
        todos
      };
    }
    case TODO_HANDLE_TOGGLE: {
      const todos = [...state.todos];
      todos[action.todo.index].done = action.todo.done;
      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};
