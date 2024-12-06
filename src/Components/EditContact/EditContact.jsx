import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/GlobalContext';
import './EditContact.css';

const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contacts, handleEditContact } = useGlobalContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
            setFormData(contact);
        } else {

            setError('Contact not found');
        }
    }, [id, contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.name || !formData.email) {
            setError('Name and email are required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            handleEditContact(id, formData);
            navigate('/contacts');
        } catch (error) {
            setError('Failed to update contact');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };


    if (error && error !== 'Failed to update contact') {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="edit-contact-container">
            <form onSubmit={handleSubmit}>
                <h2>Edit Contact</h2>
                {error && <div className="error-message">{error}</div>}
                <input
                    type="text"
                    name="name"
                    className={error ? 'input-error' : ''}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
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
        </div>
    );
};

export default EditContact;