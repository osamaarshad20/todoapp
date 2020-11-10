import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #e6e6e6;
    color: gray;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export const Button = styled.button`
  cursor: pointer;
  background: white;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  color: black;
  margin: 0.2em;
  padding: 1em 2em;
  transition: 0.5s all ease-out;

  ${(props) =>
    props.complete &&
    css`
      background: rgb(11, 212, 162);
      padding: 0.4em 1em;
    `};

  ${(props) =>
    props.trash &&
    css`
      background: #ff6f47;
      padding: 0.4em 1em;
    `};

  ${(props) =>
    props.todo &&
    css`
      background: #ff6f47;
      padding: 1em 1em;
      margin-left: -1.8em;
    `};
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
  border-radius: 3px;
  margin: 1em;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Form = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  text-align: center;
  background: #e6e6e6;
  padding: 1%;
  margin: 0;
`;

export const Div = styled.div`
  ${(props) =>
    props.todo &&
    css`
      margin: 0.5rem;
      background: white;
      font-size: 1.5rem;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};
  ${(props) =>
    props.todocontainer &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

export const Ul = styled.ul`
  ${(props) =>
    props.todolist &&
    css`
      min-width: 30%;
      list-style: none;
      padding: 0rem 0.5rem;
    `};
`;

export const Li = styled.li`
  ${(props) =>
    props.todolist &&
    css`
      flex: 1;
    `};

  ${(props) =>
    props.todoitem &&
    css`
      padding: 0rem 0.5rem;
    `};

  ${(props) =>
    props.complete == true &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `};
`;
