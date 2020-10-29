import React from 'react';

function Contact({ contact }) {
  return (
    <div class="card">
      <div class="card-body">
        <label> Name: {contact.name}</label>
        <br />
        <label> Number: {contact.number}</label>
      </div>
    </div>

  );
}

export default Contact;
