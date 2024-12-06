import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';
import './CreateContact.css';

const CreateContact = () => { 
    const navigate = useNavigate();
    const { handleCreateContact } = useGlobalContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {

                const sanitizedFormData = {
                    ...formData,
                    phone: formData.phone.replace(/[^\d]/g, '')
                };

                await handleCreateContact(sanitizedFormData);

                setFormData({ name: '', email: '', phone: '' });

                navigate('/contacts');
            } catch (error) {

                setErrors(prev => ({
                    ...prev, 
                    submit: error.message || 'Failed to create contact'
                }));
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        

        if (errors[name]) {
            setErrors(prev => ({ 
                ...prev, 
                [name]: '',
                submit: ''
            }));
        }
    };

    return (
        <div className="create-contact-container">
            <form onSubmit={handleSubmit} className="create-contact-form">
                <h2>Create New Contact</h2>
                
                {errors.submit && (
                    <div className="global-error-message">{errors.submit}</div>
                )}

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone (10 digits)"
                        className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="submit-button"
                >
                    {isLoading ? 'Creating...' : 'Create Contact'}
                </button>
            </form>
        </div>
    );
};

export default CreateContact;