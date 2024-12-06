import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import ENVIROMENT from '../../enviroment'



const ResetPassword = () => {
    const {reset_token} = useParams()   
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const handleSubmitResetForm = (e) => {
    e.preventDefault()
    const form_HTML = e.target
    const form_Values = new FormData(form_HTML)
    const form_fields = {
        'password': ''
    }
    const form_values_object = extractFormData(form_fields, form_Values)
    fetch(`${ENVIROMENT.URL_BACKEND}/api/auth/reset-password/` + reset_token, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form_values_object)
    })
        .then(
            (response) => { 
                console.log({ response }) 
                return response.json()
            }
        )
        .then(
            (body) => {
                setLoading(false)
                if(!body.ok){
                    setError(body.errors?.[0] || 'Failed to reset password')
        }
                    console.log({body})
            }
        )
        .catch(
            (error) => { console.error(error) }
        )
    }


    return (
        <div className="reset-password-container">
            <h1>Reset Password</h1>
            <p>Complete the form below to reset your password</p>
            
            <form onSubmit={handleSubmitResetForm}>
                <div className="form-group">
                    <label htmlFor='password'>New Password:</label>
                    <input 
                        type="password"
                        name='password' 
                        id='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter new password' 
                        required
                        minLength={8}
                    />
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <button 
                    type='submit' 
                    disabled={loading}
                    className="reset-password-button"
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
            
            <div className="form-links">
                <span>Don't have an account? <Link to='/register'>Register</Link></span>
                <span>Remember your password? <Link to='/login'>Login</Link></span>
            </div>
        </div>
    )
}

export default ResetPassword