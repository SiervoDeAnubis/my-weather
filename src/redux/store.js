export const TODO_NEW_CHANGE = "TODO_NEW_CHANGE";


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
}

export const actions = {
  handleNewChange(newTodo) {
    return {
      type: TODO_NEW_CHANGE,
      newTodo
    }
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TODO_NEW_CHANGE: {
      const inputText = action.newTodo
      return {
        ...state,
        inputText
      }
    }
    default: 
      return state
  }
}