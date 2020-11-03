import React from "react";
import { useDispatch } from "react-redux";
import { Login } from "../../redux/store";

const LoginForm = () => {
  let error_message,
    email,
    password = "";
  const dispatch = useDispatch();

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(Login(email.value, password.value));
    return;
  }

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          ref={(c) => (email = c)}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          ref={(c) => (password = c)}
          placeholder="password"
        />
        <input onClick={authHandler} type="submit" value="Log In" />
      </form>
      <p>{error_message}</p>
    </div>
  );
};

export default LoginForm;
