import React, { useState } from "react";
import { deleteContact } from "../../redux/store";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const READONLY = true;
  let dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div class="card">
      <div class="card-body">
        <form>
          <input value={contact.name} readOnly={READONLY} />
          <input value={contact.number} readOnly={READONLY} />
          <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash" />
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
