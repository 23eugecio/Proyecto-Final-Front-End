import React, { createContext, useContext,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { DATA_CONTACTOS } from "../Data/contactsData";

const GlobalContext = createContext();
export const initialContacts = DATA_CONTACTOS;

export const GlobalProvider = ({ children }) => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    });

    const navigate = useNavigate();

        const handleContactProfile = (id) => {
            const contact = DATA_CONTACTOS.find((contact) => contact.id === id);
            navigate(`/profile/${id}`, { state: { contact } });
        }

    const handleCreateContact = (contactData) => {
        const newContact = {
            ...contactData,
            id: uuid(),
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        localStorage.setItem('contacts', JSON.stringify(newContacts));
        navigate('/');
    };

    const handleEditContact = (id, updatedContact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === id ? { ...contact, ...updatedContact } : contact
        );
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };



    return (
        <GlobalContext.Provider value={{ handleContactProfile, handleCreateContact, handleEditContact }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default GlobalContext;
