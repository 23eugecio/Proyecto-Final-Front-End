import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContactProfile } from '../../Components'
import './Profile.css'
import GlobalContext from '../../Context/GlobalContext'
import DATA_CONTACTOS from '../../Data/contactsData'

const Profile = () => {
    const { contact_id } = useParams()
    const { contacts, handleCreateContact, handleEditContact } = useContext(GlobalContext)
    const contact = DATA_CONTACTOS.find(contact => contact.id.toString() === contact_id)
console.log(contacts)
    return (
        <div className='profile-background'>
            <div className="profile-container">
                <ContactProfile contact={contact}
                    onBack={() => window.history.back()} 
                    onEdit={handleEditContact} 
                    onCreate={handleCreateContact} />
            </div>
        </div>
    )
}

export default Profile