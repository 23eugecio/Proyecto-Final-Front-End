import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DATA_CONTACTOS } from '../../Data/contactsData.js';
import { FooterMessage, HeaderMessage } from '../../Components/index.js';
import MessageContainer from '../../Components/Messages/MessageContainer/MessageContainer.jsx';
import '../../App.css';

const ChatScreen = () => {
    const navigate = useNavigate();
    const { contact_id } = useParams();
    const [contact, setContact] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const foundContact = DATA_CONTACTOS.find(
            contact => contact.id.toString() === contact_id
        );

        if (!foundContact) {
            navigate('/contacts', { 
                replace: true, 
                state: { error: 'Contacto no encontrado' } 
            });
            return;
        }

        setContact(foundContact);
        setMessages(foundContact.mensajes || []);
    }, [contact_id, navigate]);


    const addMessage = (content) => {
        if (!content.trim()) return; 

        const newMessage = {
            id: Date.now(), 
            author: 'yo',
            text: content.trim(),
            estado: 'entregado',
            day: new Date().toLocaleDateString(), 
            timestamp: new Date().toISOString()
        };

        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, newMessage];
            const contactIndex = DATA_CONTACTOS.findIndex(
                c => c.id.toString() === contact_id
            );
            if (contactIndex !== -1) {
                DATA_CONTACTOS[contactIndex].mensajes = updatedMessages;
            }

            return updatedMessages;
        });
    };


    const deleteMessage = (messageId) => {
        setMessages(prevMessages => 
            prevMessages.filter(message => message.id !== messageId)
        );
    };


    if (!contact) {
        return (
            <div className="loading-container">
                <p>Cargando chat...</p>
            </div>
        );
    }

    return (
        <div className="app-container">
            <div className="whatsapp">
                <HeaderMessage 
                    contactName={contact.nombre} 
                    contactAvatar={contact.avatar} 
                />
                <MessageContainer 
                    messages={messages} 
                    onDeleteMessage={deleteMessage}
                />
                <FooterMessage 
                    addMessage={addMessage} 
                    placeholderText={`Mensaje a ${contact.nombre}`}
                />
                <Link 
                    to="/contacts" 
                    className="back-to-contacts-btn"
                >
                    ← Volver a Contactos
                </Link>
            </div>
        </div>
    );
};

export default ChatScreen;
