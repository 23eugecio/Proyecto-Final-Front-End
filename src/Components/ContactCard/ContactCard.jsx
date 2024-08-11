import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
    return (
        <div className="contacts-container">
            <div className='contact-container'>
                <Link to={`/chat/${contact.id}`} className='frente'>
                    <div className='contact'>
                        <div className='profile-pic'>
                            <img src={contact.thumbnail} alt={`${contact.name}'s profile`} />
                        </div>
                        <div className='contact-info'>
                            <span className='contact-name'>{contact.nombre}</span>
                            <div className='last-connection'>Última conexión: {contact.ultima_conexion}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ContactCard;
