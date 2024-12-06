
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { extractFormData } from '../../utils/extractFormData';
import './Login.css';
import { getUnnauthenticatedHeaders, POST } from '../../fetching/http.fetching';
import ENVIROMENT from '../../enviroment';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmitLoginForm = async (event) => {
        try {
            event.preventDefault();
            const form_HTML = event.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                email: '',
                password: ''
            };
            const form_values_state = extractFormData(form_fields, form_values);
            if (!form_values_state.email || !form_values_state.password) {
                setError('Email and Password are required');
                return;
            }
            const response = await POST(`${ENVIROMENT.URL_BACKEND}/api/auth/login`, {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(form_values_state)
            });
            if(response.ok){
                const access_token = response.payload.token;
                sessionStorage.setItem('access_token', access_token);
                sessionStorage.setItem('user_info', JSON.stringify(response.payload.user));
                navigate('/login');
            }else {
                setError(response.payload.detail);
            }
        } catch (error) {
                console.error('Login error:', error);
                setError('An unexpected error occurred to log in');
            }
        
    };

    return (
        <div className="login-container">
            <h1>Login!</h1>
            <form onSubmit={handleSubmitLoginForm}>
                <div>
                    <label htmlFor="email">Enter your Email:</label>
                    <input
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter your Password:</label>
                    <input
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                    />
                </div>
                <button type="submit">Login</button>
                <span>
                    If you don't have an account yet?
                    <button>
                        <Link to="/register">Register yourself!</Link>
                    </button>
                </span>
                <span>
                    Forgot your password? <button><Link to="/forgot-password">Click here!</Link></button>
                </span>
            </form>

        </div>
    );
};

export default Login;






























































