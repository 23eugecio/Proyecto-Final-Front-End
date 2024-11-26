import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { DATA_CONTACTOS } from "../Data/contactsData";

const GlobalContext = createContext();
export const initialContacts = DATA_CONTACTOS;

export const GlobalProvider = ({ children }) => {

    const [contacts, setContacts] = useState(() => {
        try {
            const savedContacts = sessionStorage.getItem('contacts');
            return savedContacts ? JSON.parse(savedContacts) : initialContacts;
        } catch (error) {
            console.error('Error loading contacts from sessionStorage:', error);
            return initialContacts;
        }
    });

    const navigate = useNavigate();


    useEffect(() => {
        try {
            sessionStorage.setItem('contacts', JSON.stringify(contacts));
        } catch (error) {
            console.error('Error saving contacts to sessionStorage:', error);
        }
    }, [contacts]);


    const handleContactProfile = (id) => {
        try {
            const contact = contacts.find((contact) => contact.id === id);
            if (contact) {
                navigate(`/profile/${id}`, { state: { contact } });
            } else {
                console.error('Contact not found');
                navigate('/'); 
            }
        } catch (error) {
            console.error('Error accessing contact profile:', error);
            navigate('/');
        }
    };


    const handleCreateContact = (contactData) => {
        try {
            const newContact = {
                ...contactData,
                id: uuid(),
                createdAt: new Date().toISOString(),
            };
            
            setContacts(prevContacts => {
                const newContacts = [...prevContacts, newContact];
                return newContacts;
            });

            navigate('/');
        } catch (error) {
            console.error('Error creating contact:', error);
        }
    };


    const handleEditContact = (id, updatedContact) => {
        try {
            setContacts(prevContacts => {
                const updatedContacts = prevContacts.map(contact =>
                    contact.id === id 
                        ? { 
                            ...contact, 
                            ...updatedContact,
                            updatedAt: new Date().toISOString() 
                        }
                        : contact
                );
                return updatedContacts;
            });
        } catch (error) {
            console.error('Error updating contact:', error);

        }
    };


    const handleDeleteContact = (id) => {
        try {
            setContacts(prevContacts => {
                const filteredContacts = prevContacts.filter(contact => contact.id !== id);
                return filteredContacts;
            });
            navigate('/');
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const contextValue = {
        contacts,
        handleContactProfile,
        handleCreateContact,
        handleEditContact,
        handleDeleteContact,

    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};


export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export default GlobalContext;