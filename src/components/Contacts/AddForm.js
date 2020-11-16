import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, Input, Form } from "../../styles/componentStyles";

export default (AddForm) => {
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  const { addContact } = useContext(GlobalContext);

  const addHandler = (e) => {
    e.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };
  return (
    <Form>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        className="todo-input"
        placeholder="Name"
      />
      <Input
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        type="text"
        placeholder="Number"
      />

      <Button onClick={addHandler} todo>
        <i className="fas fa-plus-square"></i>
      </Button>
    </Form>
  );
};
