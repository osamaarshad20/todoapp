let initialState = {
  authorized: true,
  todos: [],
  contacts: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "fetchTodoData") {
    return {
      ...state,
      todos: action.payload.todos,
    };
  } else if (action.type === "fetchContactsData") {
    return {
      ...state,
      contacts: action.payload.contacts,
    };
  } else if (action.type === "setLoginState") {
    return {
      ...state,
      authorized: action.payload.isLoggedIn,
    };
  } else if (action.type === "addTodos") {
    return {
      ...state,
      todos: [...state.todos, action.payload.obj],
    };
  } else if (action.type === "completeTodos") {
    return {
      ...state,
      todos: state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      }),
    };
  } else if (action.type === "deleteTodo") {
    return {
      ...state,
      todos: state.todos.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === "deleteContact") {
    return {
      ...state,
      contacts: state.contacts.filter((item) => item.id !== action.payload.id),
    };
  }
  return state;
};

export default reducer;
