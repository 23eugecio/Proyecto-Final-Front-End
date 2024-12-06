import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import useForm from '../../Hooks/useForm'
import { POST, getUnnauthenticatedHeaders } from '../../fetching/http.fetching'
import './Register.css'
import ENVIROMENT from '../../enviroment'

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const form_fields = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    const {form_values_state, handleChangeInputValue} = useForm(form_fields)

    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            const body = await POST(
                `${ENVIROMENT.URL_BACKEND}/api/auth/register`,
                {
                    headers: getUnnauthenticatedHeaders(),
                    body: JSON.stringify(form_values_state)
                }
            )
            console.log(body)
            
            navigate('/login')
        } catch (error) {
            setError(error.message || 'Registration failed')
            console.error('Registration error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmitRegisterForm}>
                <h1>WhatsApp Register!</h1>
                
                {error && <div className="error-message">{error}</div>}

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
                    className="register-button" 
                    type='submit'
                    disabled={isLoading}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>

                <div className="form-links">
                    <span>If you already have an account, </span>
                    <Link to='/login' className="login-link">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register


/* import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import useForm from '../../Hooks/useForm'
import { POST, getUnnauthenticatedHeaders } from '../../fetching/http.fetching'
import './Register.css'


const Register = () => {

    const form_fields = {
        'name': '',
        'email': '',
        'password': ''
    }
    const {form_values_state, handleChangeInputValue} = useForm(form_fields)

    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault()
        const form_HTML = event.target

        const body = await POST(
            'http://localhost:3000/api/auth/register',
            {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(form_values_object)
            }
        )
        console.log(body)
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Write your email:</label>
                    <input
                        name='email'
                        id='email'
                        placeholder='john@gmail.com'
                        value={form_values_state.email}
                        onChange={handleChangeInputValue}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Current password:</label>
                    <input
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={form_values_state.password}
                        onChange={handleChangeInputValue}
                    />
                </div>
                <button className="register-button" type='submit'>
                    Register
                </button>
            <span>If you already have an account, </span>
            <div>
                <button className="login-button">
                <Link to='/login'>Login</Link>
            </button>
            </div>
            </form>
        </div>
    );
};

export default Register;


































































 */