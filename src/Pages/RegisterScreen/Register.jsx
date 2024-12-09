import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { POST, getUnnauthenticatedHeaders } from '../../fetching/http.fetching'
import './Register.css'
import ENVIROMENT from '../../enviroment'

const Register = () => {
    const form_fields = {
        name: '',
        email: '',
        password: ''
    }
    
    const {form_values_state, handleChangeInputValue} = useForm(form_fields)
    const navigate = useNavigate()

    const handleSubmitRegisterForm = async (event) => {
        try {
            event.preventDefault()
    
            const body = await POST(
                `${ENVIROMENT.URL_BACKEND}/api/auth/register`,
                {
                    headers: getUnnauthenticatedHeaders(),
                    body: JSON.stringify(form_values_state)
                }
            )
    
            if (body.ok) {
                navigate('/login')
            } else {
                throw new Error('Register error')
            }
        } catch (error) {
            console.error('Register error:', error)
        }
    }
    
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmitRegisterForm}>

                <h1>WhatsApp Register!</h1>

                <div className="form-group">
                    <label htmlFor='name'>Write your name:</label>
                    <input
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={form_values_state.name}
                        onChange={handleChangeInputValue}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Write your email:</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='john@gmail.com'
                        value={form_values_state.email}
                        onChange={handleChangeInputValue}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Current password:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={form_values_state.password}
                        onChange={handleChangeInputValue}
                        required
                        minLength={8}
                    />
                </div>

                <button 
                    type='submit'
                    className="register-button">Register</button>
                <div className="form-links">
                    <span>If you already have an account, </span>
                    <Link to='/login' className="login-link">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register