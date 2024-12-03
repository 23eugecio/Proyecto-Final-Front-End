import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactList } from '../../Components/index.js';
import { DATA_CONTACTOS } from '../../Data/contactsData.js';
import '../../App.css';
import './ContactScreen.css';

const ContactScreen = () => {

    const navigate = useNavigate();

    const navigateToChat = (contactId) => {
        navigate(`/chat/${contactId}`);
    };

    return (
        <div className='home-container'>
            <div className='home-whatsapp'>
                <div className='home-top-bar'>
                    <span>WhatsApp</span>
                    <div className='icons'>
                        <i className="bi bi-camera-video"></i>
                        <i className='bi bi-search'></i>
                        <i className='bi bi-three-dots-vertical'></i>
                    </div>
                </div>
                <ContactList contactos={DATA_CONTACTOS} onSelect={navigateToChat} />
                <div className='home-footer'>
                    <i className="bi bi-chat-square-text"></i>
                    <i className="bi bi-people"></i>
                    <i className="bi bi-telephone"></i>
                </div>
            </div>
        </div>
    );
};

export default ContactScreen;

