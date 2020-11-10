import React, { useState } from "react";
import { addContact } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Button, Input, Form } from "../styles";

export default (AddForm) => {
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addContact(name, number));
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

      <Button onClick={addHandler}>
        <i className="fas fa-plus-square"></i>
      </Button>
    </Form>
  );
};
