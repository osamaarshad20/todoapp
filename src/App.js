import React from "react";
import "./App.css";
import PageHeader from "./components/Basic/PageHeader";
import LoginForm from "./components/Auth/LoginForm";
import Dashboard from "./components/Basic/Dashboard";
import TodoPage from "./components/Todo/TodoPage";
import ContactsPage from "./components/Contacts/ContactsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.authorized);
  if (!auth) {
    return (
      <div>
        <PageHeader />
        <hr />
        <LoginForm />
      </div>
    );
  } else {
    return (
      <Router>
        <PageHeader />
        <hr />
        <Dashboard />
        <Route path="/todo" component={() => <TodoPage />} />
        <Route path="/contact" component={() => <ContactsPage />} />
      </Router>
    );
  }
};

export default App;
