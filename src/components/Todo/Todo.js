import React from "react";
import { deleteTodo, completeTodo } from "../../redux/store";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

const Todo = (props) => {
  let dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(props.todo.id));
  };

  const completeHandler = () => {
    dispatch(completeTodo(props.todo));
  };
  if (!props.todo)
  {
      alert("Props error:Props does't have todo object");
      return (<div className="todo"></div>);
  }
  return (
    <div className="todo">
      <li className={props.todo.complete ? "todo-item completed" : "todo-item"}>
        {props.todo.text}
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


Todo.propTypes = {
  todo: PropTypes.object
}

export default Todo;
