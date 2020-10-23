import React from 'react';
import {
    useDispatch
} from 'react-redux'
import {
    Login
} from '../redux/store'
import {
    Button,
    Input,
    Form
} from "./styles";

function LoginForm(){
    let error_message = '';
    let email = '';
    let password = '';
    const dispatch = useDispatch();

    function authHandler(e){
        e.preventDefault();
        dispatch(Login(email.value, password.value));
        return;
    }

    return (
    <div>
        <Form>
          <Input type="email" name="email" ref={(c) => email = c} placeholder="email" />
          <Input type="password" name="password" ref={(c) => password = c} placeholder="password" />
          <Button onClick={authHandler}>
              Log In
          </Button>
        </Form>
       <p>{error_message}</p>
    </div>
    );
}

export default LoginForm;
