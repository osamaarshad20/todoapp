import React, { useContext } from "react";
import Todo from "./Todo";
import { GlobalContext } from "../../context/context";
import { Div, Ul } from "../../styles/componentStyles";

const TodoList = () => {
  const { state } = useContext(GlobalContext);
  const todos = state.todos;

  return (
    <Div todocontainer>
      <Ul todolist>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </Ul>
    </Div>
  );
};

export default TodoList;
