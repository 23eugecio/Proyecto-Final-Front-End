import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    ContactScreen,
    ChatScreen,
    Profile,
    Register,
    Login,
    ForgotPassword,
    ResetPassword
} from './helpers/helpersIndex';
import './App.css'
import ProtectedRoute from './component/ProtectedRoute';



const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password/:reset_token' element={<ResetPassword />} />

            <Route element={<ProtectedRoute />}>
                <Route path='/contact/:contact_id' element={<ContactScreen />} />
                <Route path='/chat/:contact_id' element={<ChatScreen />} />
                <Route path='/profile/:contact_id' element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default App

