import React, { useContext } from "react";
import Contact from "./Contact";
import { GlobalContext } from "../../context/context";

const ContactList = () => {
  const { state } = useContext(GlobalContext);
  const contacts = state.contacts;

  return (
    <div>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
