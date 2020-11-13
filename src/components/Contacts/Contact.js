import React, { useState } from "react";
import { deleteContact } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Input, Form, Button } from "../../styles/componentStyles";

const Contact = ({ contact }) => {
  const READONLY = true;
  let dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <Form>
      <Input value={contact.name} readOnly={READONLY} />
      <Input value={contact.number} readOnly={READONLY} />
      <Button onClick={deleteHandler} trash>
        <i className="fas fa-trash" />
      </Button>
      <hr />
    </Form>
  );
};

export default Contact;
