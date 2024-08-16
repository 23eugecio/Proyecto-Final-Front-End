import React from 'react'
import './HeaderMessage.css'
import { Link } from 'react-router-dom'

const HeaderMessage = ({ contactName }) => {
    return (
        <nav className="header">
            <button className="back"><Link to={'/'}><i className="bi bi-arrow-left"></i></Link></button>
            <span className='name'>
                {contactName}</span>
            <span className="videocall">
                <i className="bi bi-camera-video"></i>
            </span> 
            <span className="phonecall">
                <i className="bi bi-telephone"></i>
            </span>
            <span className="three-dots">
                <i className="bi bi-three-dots-vertical"></i>
            </span>
        </nav>
    )
}

export default HeaderMessage