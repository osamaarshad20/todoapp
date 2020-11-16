import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, Input, Form } from "../../styles/componentStyles";

const LoginForm = () => {
  let error_message, email, password;
  const { Login } = useContext(GlobalContext);

  const authHandler = (e) => {
    Login(email.value, password.value);
    e.preventDefault();
    return;
  };

  return (
    <div>
      <Form>
        <Input
          type="email"
          name="email"
          ref={(c) => (email = c)}
          placeholder="email"
        />
        <Input
          type="password"
          name="password"
          ref={(c) => (password = c)}
          placeholder="password"
        />
        <Button onClick={authHandler}>Log In</Button>
      </Form>
      <p>{error_message}</p>
    </div>
  );
};

export default LoginForm;
