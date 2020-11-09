import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import {
  fetchTodosData,
  fetchContactsData,
  setLoginState,
  deleteTodoAction,
  completeTodoAction,
} from "./actions";
import axios from "axios";
import * as urls from "./urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const thunkMiddleware = require("redux-thunk").default;

toast.configure();

const notify = (text, type) => {
  const TIME = 2500;
  if (type === "error") {
    toast.error(text, { autoClose: TIME });
  } else if (type === "success") {
    toast.success(text, { autoClose: TIME });
  }
};

//fetching todos from server
const fetchTodos = () => (dispatch) => {
  axios
    .get(urls.TODOS)
    .then((response) => {
      dispatch(fetchTodosData(response.data));
    })
    .catch((error) => {
      console.error("Unable to fetch todos!");
    });
};

//fetching contacts from server
const fetchContacts = () => (dispatch) => {
  axios
    .get(urls.CONTACTS)
    .then((response) => {
      dispatch(fetchContactsData(response.data));
    })
    .catch((error) => {
      console.error("Unable to fetch contacts!");
    });
};

export const Login = (email, password) => (dispatch) => {
  axios
    .post(urls.LOGIN, {
      email: email,
      password: password,
    })
    .then((response) => {
      dispatch(setLoginState(response.data.authorized));
    })
    .catch((error) => {
      notify("Login Failed! : Email or Password wrong", "error");
    });
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`${urls.TODOS}/${id}`)
    .then((response) => {
      dispatch(deleteTodoAction(id));
    })
    .catch((error) => {
      notify("Unable to delete!", "error");
    });
};

export const addTodo = (desc) => (dispatch) => {
  axios
    .post(urls.TODOS, {
      text: desc,
      complete: false,
    })
    .then((response) => {
      dispatch(fetchTodos());
    })
    .catch((error) => {
      notify("Unable to add!", "error");
    });
};

export const completeTodo = (todo) => (dispatch) => {
  axios
    .put(`${urls.TODOS}/${todo.id}`, {
      ...todo,
      complete: !todo.complete,
    })
    .then((response) => {
      dispatch(completeTodoAction(todo.id));
    })
    .catch((error) => {
      notify("Unable to update!", "error");
    });
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchTodos());
store.dispatch(fetchContacts());
