import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import {
  fetchTodosData,
  fetchContactsData,
  setLoginState,
  deleteTodoAction,
  completeTodoAction,
  deleteContactAction,
} from "./actions";
import axios from "axios";
import * as urls from "./urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

toast.configure();

export const GlobalProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  const [state, dispatch] = contextValue;

  const notify = (text, type) => {
    const TIME = 2500;
    if (type === "error") {
      toast.error(text, { autoClose: TIME });
    } else if (type === "success") {
      toast.success(text, { autoClose: TIME });
    }
  };

  const Login = (email, password) => {
    axios
      .post(urls.LOGIN, {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(setLoginState(response.data.authorized));
      })
      .catch((error) => {
        notify("Login Failed! : Email or Password wrong", error);
      });
  };
  const fetchTodos = () => {
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
  const fetchContacts = () => {
    axios
      .get(urls.CONTACTS)
      .then((response) => {
        dispatch(fetchContactsData(response.data));
      })
      .catch((error) => {
        console.error("Unable to fetch contacts!");
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`${urls.TODOS}/${id}`)
      .then((response) => {
        dispatch(deleteTodoAction(id));
      })
      .catch((error) => {
        notify("Unable to delete!", error);
      });
  };

  const addTodo = (desc) => {
    axios
      .post(urls.TODOS, {
        text: desc,
        complete: false,
      })
      .then((response) => {
        fetchTodos();
      })
      .catch((error) => {
        notify("Unable to add!", error);
      });
  };

  const completeTodo = (todo) => {
    axios
      .put(`${urls.TODOS}/${todo.id}`, {
        ...todo,
        complete: !todo.complete,
      })
      .then((response) => {
        dispatch(completeTodoAction(todo.id));
      })
      .catch((error) => {
        notify("Unable to update!", error);
      });
  };

  const addContact = (name, number) => {
    axios
      .post(urls.CONTACTS, {
        name: name,
        number: number,
      })
      .then((response) => {
        fetchContacts();
      })
      .catch((error) => {
        notify("Unable to add!", error);
      });
  };

  const deleteContact = (id) => {
    axios
      .delete(`${urls.CONTACTS}/${id}`)
      .then((response) => {
        dispatch(deleteContactAction(id));
      })
      .catch((error) => {
        notify("Unable to delete!", error);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        Login,
        deleteContact,
        addContact,
        completeTodo,
        addTodo,
        deleteTodo,
        fetchTodos,
        fetchContacts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
