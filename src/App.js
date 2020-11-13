import React, { useState } from "react";
import "./App.css";
import PageHeader from "./components/Basic/PageHeader";
import LoginForm from "./components/Auth/LoginForm";
import Dashboard from "./components/Basic/Dashboard";
import TodoPage from "./components/Todo/TodoPage";
import ContactsPage from "./components/Contacts/ContactsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyle } from "./styles/globalStyles";
import { Button } from "./styles/componentStyles";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const auth = useSelector((state) => state.authorized);
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

export default App;
