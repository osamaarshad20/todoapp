import React, { useState } from "react";
import { addTodo } from "../../redux/store";
import { useDispatch } from "react-redux";

export default (AddForm) => {
  let [text, setText] = useState();
  let dispatch = useDispatch();

  function addHandler(e) {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  }
  return (
    <form>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        className="todo-input"
      />
      <button onClick={addHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};
