import React from "react";
import { deleteTodo, completeTodo } from "../../redux/store";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  let dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const completeHandler = () => {
    dispatch(completeTodo(todo));
  };

  return (
    <div className="todo">
      <li className={todo.complete ? "todo-item completed" : "todo-item"}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default Todo;
