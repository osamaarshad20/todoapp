import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, Input, Form } from "../../styles/componentStyles";

export default (AddForm) => {
  let [text, setText] = useState();
  let { addTodo } = useContext(GlobalContext);

  const addHandler = (e) => {
    e.preventDefault();
    addTodo(text);
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
