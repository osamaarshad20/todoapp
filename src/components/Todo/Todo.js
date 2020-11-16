import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import PropTypes from "prop-types";
import { Button, Div, Li } from "../../styles/componentStyles";

const Todo = ({ todo }) => {
  let { deleteTodo, completeTodo } = useContext(GlobalContext);

  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  const completeHandler = () => {
    completeTodo(todo);
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
