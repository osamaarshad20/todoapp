import React from 'react';
import Contact from './Contact'
import {
    useSelector
} from 'react-redux'

function ContactsPage(){
    let contacts = useSelector(state => state.contacts)
    return (
        <div>
            {contacts.map(contact => ( <Contact contact={contact} /> ))}
        </div>
    )
}

export default ContactsPage;
