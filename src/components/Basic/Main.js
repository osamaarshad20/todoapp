import React, { useState, useContext } from "react";
import PageHeader from "./PageHeader";
import LoginForm from "../Auth/LoginForm";
import Dashboard from "./Dashboard";
import TodoPage from "../Todo/TodoPage";
import ContactsPage from "../Contacts/ContactsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes";
import { GlobalStyle } from "../../styles/globalStyles";
import { Button } from "../../styles/componentStyles";
import { GlobalContext } from "../../context/context";

const Main = (props) => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const { state } = useContext(GlobalContext);
  const auth = state.authorized;
  console.log(auth);
  if (!auth) {
    return (
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Button onClick={themeToggler}>Switch Theme</Button>
          <PageHeader />
          <hr />
          <LoginForm />
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Button onClick={themeToggler}>Switch Theme</Button>
          <PageHeader />
          <hr />
          <Dashboard />
          <Route path="/todo" component={() => <TodoPage />} />
          <Route path="/contact" component={() => <ContactsPage />} />
        </ThemeProvider>
      </Router>
    );
  }
};

export default Main;
