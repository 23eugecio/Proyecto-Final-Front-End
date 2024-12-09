import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ContactList.css';
import { AuthContextProvider } from '../../Context/AuthContext';

const ContactList = () => {
    const { contacts, handleContactProfile, handleDeleteContact } = AuthContextProvider();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const filteredAndSortedContacts = useMemo(() => {
        return contacts
            .filter(contact => 
                contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                contact.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'email') {
                    return a.email.localeCompare(b.email);
                }
                return 0;
            });
    }, [contacts, searchTerm, sortBy]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este contacto?');
        if (confirmDelete) {
            handleDeleteContact(id);
        }
    };

    return (
        <div className="contact-list-container">
            <div className="contact-list-header">
                <h2>Mis Contactos</h2>
                <Link to="/create" className="add-contact-btn">
                    + Añadir Contacto
                </Link>
            </div>

            <div className="contact-list-controls">
                <input 
                    type="text" 
                    placeholder="Buscar contactos..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                >
                    <option value="name">Ordenar por Nombre</option>
                    <option value="email">Ordenar por Email</option>
                </select>
            </div>

            {filteredAndSortedContacts.length === 0 ? (
                <div className="no-contacts">
                    <p>No hay contactos. ¡Añade uno nuevo!</p>
                </div>
            ) : (
                <div className="contact-grid">
                    {filteredAndSortedContacts.map((contact) => (
                        <div key={contact.id} className="contact-card">
                            <div className="contact-card-content">
                                <h3>{contact.name}</h3>
                                <p>{contact.email}</p>
                                <div className="contact-card-actions">
                                    <button 
                                        onClick={() => handleContactProfile(contact.id)}
                                        className="view-profile-btn"
                                    >
                                        Ver Perfil
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(contact.id)}
                                        className="delete-contact-btn"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContactList;