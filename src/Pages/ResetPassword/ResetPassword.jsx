/* import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const ResetPassword = () => {
    const { reset_token } = useParams()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmitResetForm = async (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')

        if (!password) {
            setError('Password is required')
            return
        }

        try {
            const response = await fetch(`http://localhost:3000/api/auth/reset-password/${reset_token}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            })

            const body = await response.json()

            if (response.ok) {
                setSuccess('Password reset successfully')
                navigate('/login')
            } else {
                setError(body.errors?.[0] || 'Failed to reset password')
            }
        } catch (error) {
            setError('An unexpected error occurred')
            console.error(error)
        }
    }

    return (
        <div className="reset-password-container">
            <h1>Reset Password</h1>
            <p>Complete the form below to reset your password</p>
            
            <form onSubmit={handleSubmitResetForm}>
                <div>
                    <label htmlFor='password'>New Password:</label>
                    <input 
                        type="password"
                        name='password' 
                        id='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter new password' 
                        required
                    />
                </div>
                
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <button type='submit'>Reset Password</button>
            </form>
            
            <div className="form-links">
                <span>Don't have an account? <Link to='/register'>Register</Link></span>
                <span>Remember your password? <Link to='/login'>Login</Link></span>
            </div>
        </div>
    )
}

export default ResetPassword */