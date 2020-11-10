import React from "react";
import { deleteTodo, completeTodo } from "../../redux/store";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Div, Li } from "../styles";

const Todo = ({ todo }) => {
  let dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const completeHandler = () => {
    dispatch(completeTodo(todo));
  };
  if (!todo) {
    alert("Props error:Props does't have todo object");
    return <div className="todo"></div>;
  }
  return (
    <Div todo>
      <Li complete={todo.complete} todoitem todolist>
        {todo.text}
      </Li>
      <Button onClick={completeHandler} complete>
        <i className="fas fa-check" />
      </Button>
      <Button onClick={deleteHandler} trash>
        <i className="fas fa-trash" />
      </Button>
    </Div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
