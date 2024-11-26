import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

const EditContact = () => {
    const { id } = useParams();
    const { contacts, handleEditContact } = useGlobalContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
            setFormData(contact);
        }
    }, [id, contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditContact(id, formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <button type="submit">Update Contact</button>
        </form>
    );
};

export default EditContact;