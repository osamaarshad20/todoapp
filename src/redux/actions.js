export const completeTodoAction = (id) => {
  return {
    type: "completeTodos",
    payload: {
      id,
    },
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "deleteTodo",
    payload: {
      id,
    },
  };
};

export const Login = (email, password) => {
  return {
    type: "login",
    payload: {
      email,
      password,
    },
  };
};

export const fetchTodosData = (todos) => {
  return {
    type: "fetchTodoData",
    payload: {
      todos,
    },
  };
};

export const fetchContactsData = (contacts) => {
  return {
    type: "fetchContactsData",
    payload: {
      contacts,
    },
  };
};

export const setLoginState = (isLoggedIn) => {
  return {
    type: "setLoginState",
    payload: {
      isLoggedIn,
    },
  };
};
