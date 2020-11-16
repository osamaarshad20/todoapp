import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Input, Form, Button } from "../../styles/componentStyles";

const Contact = ({ contact }) => {
  const READONLY = true;
  let { deleteContact } = useContext(GlobalContext);

  const deleteHandler = () => {
    deleteContact(contact.id);
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
