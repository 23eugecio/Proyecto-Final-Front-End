import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { DATA_CONTACTOS } from "../Data/contactsData";

const GlobalContext = createContext();
export const contacts = DATA_CONTACTOS;

export const GlobalProvider = ({ children }) => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : DATA_CONTACTOS;
    });

    const navigate = useNavigate();

    const handleChangeFormValue = (e) => {
        const { name, value } = e.target
    const FormContactos = ({formContactos}) => {
        return (    
            <div>
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" placeholder="Escriba su nombre" />     
                </form>
    
                <form>
                    <label htmlFor="numero">Numero</label>
                    <input type="text" id="numero" placeholder="Escriba su numero" />     
                </form>     
    
                <form>
                    <label htmlFor="estado">Estado</label>  
                    <select name="estado" id="estado">
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </form>
                
            </div>
        )
    }  
    } 
    const handleCreateContact = (contacts) => {
        const newContact = {
            ...contacts,
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
        <GlobalContext.Provider value={{ contacts, handleCreateContact, handleEditContact }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default GlobalContext;
