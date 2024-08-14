import React from 'react';
import ContactCard from '../ContactCard/ContactCard.jsx';
import './ContactList.css';


const ContactList = ({ contactos }) => {

    return (
        <div className="contact-list">
            {contactos.map(contact => (
                <ContactCard contact={contact} key={contact.id} />
            ))}
        </div>
    );
};

export default ContactList
