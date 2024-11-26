import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUnnauthenticatedHeaders, POST } from '../../fetching/http.fetching';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleChangeInputValue = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault();
        setError('')
        setSuccess('')


        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill in all fields')
            return;
        }

        try {
            const body = await POST('http://localhost:3000/api/auth/register', {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(formData)
            });

            if (body.ok) {
                setSuccess('Registration successful! Please check your email to verify your account.')
                navigate('/login')
            } else {
                setError(body.errors?.[0] || 'Registration failed');
            }
        } catch (err) {
            setError('An unexpected error occurred');
            console.error(err);
        }
    };

    return (
        <div className="register-container">
            <h1>Register for WhatsApp</h1>
            <form onSubmit={handleSubmitRegisterForm}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type="text"
                        name='name' 
                        id='name' 
                        placeholder='Enter your name' 
                        value={formData.name}
                        onChange={handleChangeInputValue} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type="email"
                        name='email' 
                        id='email' 
                        placeholder='juan@gmail.com' 
                        value={formData.email}
                        onChange={handleChangeInputValue} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password"
                        name='password' 
                        id='password' 
                        placeholder='Enter your password' 
                        value={formData.password}
                        onChange={handleChangeInputValue} 
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <button type='submit'>Register</button>
            </form>
            <div className="form-info">
                <p>Please verify your email after registration</p>
                <span>Already have an account? <Link to='/login'>Login</Link></span>
            </div>
        </div>
    );
}

export default Register;
