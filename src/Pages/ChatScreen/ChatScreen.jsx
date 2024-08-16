import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DATA_CONTACTOS } from '../../Data/contactsData.js';
import { FooterMessage, HeaderMessage } from '../../Components/index.js';
import MessageContainer from '../../Components/Messages/MessageContainer/MessageContainer.jsx';
import '../../App.css';

const ChatScreen = () => {
    const { contact_id } = useParams();
    const contact = DATA_CONTACTOS.find(contact => contact.id.toString() === contact_id);
    const [messages, setMessages] = useState(contact ? contact.mensajes : []);

    const addMessage = (content) => {
        const newMessage = {
            author: 'yo',
            text: content,
            estado: 'entregado',
            day: 'hoy',
            id: messages.length + 1,
        };
        setMessages([...messages, newMessage]);
    };


    return (
        <div className="app-container">
            <div className="whatsapp">
                <HeaderMessage contactName={contact.nombre} />
                <Link to={'/profile/' + contact.id}>PERFIL</Link>
                <MessageContainer messages={messages} />
                <FooterMessage addMessage={addMessage} />
                
            </div>
        </div>
    );
};

export default ChatScreen;
