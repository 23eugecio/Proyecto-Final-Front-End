import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import './Login.css'
import { getUnnauthenticatedHeaders, POST } from '../../fetching/http.fetching'


const Login = () => {
    const navigate = useNavigate();
    const handleSubmitLoginForm = async (event) => {
        try {
            event.preventDefault()
            const form_HTML = event.target
            const form_values = new FormData(form_HTML)
            const form_fields = {
                'email': '',
                'password': ''
            }
            const form_values_state = extractFormData(form_fields, form_values)
            const body = await POST('http://localhost:3000/api/auth/login', {
                headers: getUnnauthenticatedHeaders(),
                body: JSON.stringify(form_values_object)
            }
            )
            const access_token = response.payload.token
            sessionStorage.setItem('access_token', access_token)
            sessionStorage.setItem('user_info', JSON.stringify(response.payload.user))
            navigate('/home')
        }
        catch (error) {
            if (error) {
                return console.error(error)
            }
            throw error
        }
        return (
            <div className='login-container'>
                <h1>Login!</h1>
                <form onSubmit={handleSubmitLoginForm}>
                    <div>
                        <label htmlFor='email'>Enter your Email:</label>
                        <input
                            name='email'
                            id='email'
                            placeholder='john@gmail.com'
                            onChange={handleChangeInputValue}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Enter your Password:</label>
                        <input
                            name='password'
                            id='password'
                            placeholder='Password:'
                            onChange={handleChangeInputValue}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <span>If you don't have an account yet?<Link to='/register'>Register yourself!</Link></span>
                <br />
                <span>Forgot your password?<Link to='/register'>Click here!</Link></span>
            </div>

        )
    }
}

export default Login
