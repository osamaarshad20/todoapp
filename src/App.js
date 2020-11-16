import React from "react";
import "./App.css";
import Main from "./components/Basic/Main";
import { GlobalProvider } from "./context/context";

const App = () => (
  <GlobalProvider>
    <Main />
  </GlobalProvider>
);

export default App;
