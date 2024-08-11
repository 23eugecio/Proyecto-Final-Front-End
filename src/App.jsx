import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContactScreen, ChatScreen, Profile } from './Pages'; 
import './App.css'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<ContactScreen />} />
            <Route path='/chat/:contact_id' element={<ChatScreen />} />
            <Route path='/profile/:contact_id' element={<Profile />} />
        </Routes>
    )
}

export default App


