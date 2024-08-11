import React from 'react'
import './ContactProfile.css'
import { useNavigate } from 'react-router-dom'




const ContactProfile = ({ contact, onEdit, onCreate }) => {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }

    return (
        <div className="profile-content">
            <div className="profile-topbar">
                <button onClick={handleBackClick}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button>
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
            </div>
            <div className="profile-profile-pic">
                <img src={contact.thumbnail} className="profile-pic" alt="" />
            </div>
            <h3 className="profile-contact-name">{contact.nombre}</h3>
            <div className="profile-icons">
                <button>
                    <i className="bi bi-telephone">Llamar</i>
                </button>
                <button>
                    <i className="bi bi-camera-video">Video</i>
                </button>
                <button>
                    <i className="bi bi-search">Buscar</i>
                </button>
            </div>
            <div className='profile-options'>
                <button>
                    <i className="bi bi-heart"> Añadir a Favoritos </i>
                </button>
                <button onClick={onEdit}>
                    <i className="bi bi-pencil-square"> Editar </i>
                </button>
                <button onClick={onCreate}>
                    <i className="bi bi-plus-circle"> Agregar </i>
                </button>
                <button>
                    <i className="bi bi-hand-thumbs-down"> Reportar </i>
                </button>
            </div>
        </div>
    )
}

export default ContactProfile