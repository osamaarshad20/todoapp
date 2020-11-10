import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import {
    Div,
    Ul
} from "../styles";

const TodoList = () => {
  let todos = useSelector((state) => state.todos);

  return (
    <Div todocontainer>
            <Ul todolist>
            {todos.map(todo => ( <Todo todo={todo} key={todo.id} /> ))}
            </Ul>
        </Div>
  );
};

export default TodoList;
