import React, { useState } from "react";
import { addTodo } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Button, Input, Form } from "../styles";

export default (AddForm) => {
  let [text, setText] = useState();
  let dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <Form>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <Button onClick={addHandler} todo>
        <i className="fas fa-plus-square"></i>
      </Button>
    </Form>
  );
};
