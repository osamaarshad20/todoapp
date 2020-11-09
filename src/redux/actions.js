export const completeTodoAction = (id) => (
  {
    type: "completeTodos",
    payload: {
      id,
    },
  }
);

export const deleteTodoAction = (id) => (
  {
    type: "deleteTodo",
    payload: {
      id,
    },
  }
);

export const deleteContactAction = (id) => (
  {
    type: "deleteContact",
    payload: {
      id,
    },
  }
);

export const Login = (email, password) => (
  {
    type: "login",
    payload: {
      email,
      password,
    },
  }
);

export const fetchTodosData = (todos) => (
  {
    type: "fetchTodoData",
    payload: {
      todos,
    },
  }
);

export const fetchContactsData = (contacts) => (
  {
    type: "fetchContactsData",
    payload: {
      contacts,
    },
  }
);

export const setLoginState = (isLoggedIn) => (
  {
    type: "setLoginState",
    payload: {
      isLoggedIn,
    },
  }
);
