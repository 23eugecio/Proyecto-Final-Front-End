import React from 'react';
import './HeaderMessage.css';
import { Link } from 'react-router-dom';
import DATA_CONTACTOS from '../../../Data/contactsData';



const HeaderMessage = ({ contactName, thumbnail }) => {
    return (
        <div className="header">
            <button className="back" aria-label="Back to home">
                <Link to={'/'}>
                    <i className="bi bi-arrow-left"></i>
                </Link>
            </button>
            <button className='profile'>
            <Link to ={'/profile/' + DATA_CONTACTOS[0].id}>
                <span className="header_user_pic"> 
                    <img src={`${thumbnail}`} alt={`${contactName}'s profile`} />
                </span>
            </Link>
            </button>
            <span>{contactName}</span>
            <span className="icons" aria-label="Video call">
                <i className="bi bi-camera-video"></i>
                <i className="bi bi-telephone"></i>
                <i className="bi bi-three-dots-vertical"></i>
            </span>
        </div>
    );
}

export default HeaderMessage;

