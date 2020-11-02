import React from "react";

const Contact = ({ contact }) => {
  return (
    <div class="card">
      <div class="card-body">
        <label> Name: {contact.name}</label>
        <br />
        <label> Number: {contact.number}</label>
      </div>
    </div>
  );
};

export default Contact;
