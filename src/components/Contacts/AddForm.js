import React, { useState } from "react";
import { addContact } from "../../redux/store";
import { useDispatch } from "react-redux";

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
    <form>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        className="todo-input"
        placeholder="Name"
      />
      <input
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        type="text"
        className="todo-input"
        placeholder="Number"
      />

      <button onClick={addHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};
