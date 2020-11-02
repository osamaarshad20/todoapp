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

const thunkMiddleware = require("redux-thunk").default;

//fetching todos from server
const fetchTodos = () => {
  return function (dispatch) {
    axios
      .get(urls.TODOS)
      .then((response) => {
        dispatch(fetchTodosData(response.data));
      })
      .catch((error) => {
        console.log("Unable to fetch todos!");
      });
  };
};

//fetching contacts from server
const fetchContacts = () => {
  return function (dispatch) {
    axios
      .get(urls.CONTACTS)
      .then((response) => {
        dispatch(fetchContactsData(response.data));
      })
      .catch((error) => {
        console.log("Unable to fetch contacts!");
      });
  };
};

export const Login = (email, password) => {
  return function (dispatch) {
    axios
      .post(urls.LOGIN, {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(setLoginState(response.data.authorized));
      })
      .catch((error) => {
        alert("Login Failed", "Email or Password is incorrect");
      });
  };
};

export const deleteTodo = (id) => {
  return function (dispatch) {
    axios
      .delete(`${urls.TODOS}/${id}`)
      .then((response) => {
        dispatch(deleteTodoAction(id));
      })
      .catch((error) => {
        alert("Unable to delete!");
      });
  };
};

export const addTodo = (desc) => {
  return function (dispatch) {
    axios
      .post(urls.TODOS, {
        text: desc,
        complete: false,
      })
      .then((response) => {
        dispatch(fetchTodos());
      })
      .catch((error) => {
        alert("Unable to add!");
      });
  };
};

export const completeTodo = (todo) => {
  return function (dispatch) {
    axios
      .put(`${urls.TODOS}/${todo.id}`, {
        ...todo,
        complete: !todo.complete,
      })
      .then((response) => {
        dispatch(completeTodoAction(todo.id));
      })
      .catch((error) => {
        alert("Unable to update!");
      });
  };
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchTodos());
store.dispatch(fetchContacts());
