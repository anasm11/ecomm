import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
        <div className='box'>
        <div className='form'>
            <h2 className='form-header'>Login</h2>
            <div className='form-body'>
                <input className='input' type='text' placeholder='email'/>
                <input className='input' type='text' placeholder='password'/>
                <span className='single-line'>
                    <div className='checkbox-input'>
                        <input className='checkbox' type='checkbox' name='remember'/>
                        <label for='remember'>Remember me</label>
                    </div>
                    <div className='link'>Forgot password?</div>
                </span>
                <button className='btn primary-btn'>Login</button>
            </div>
            <div className='form-footer'>Create new account? {'>'}</div>
        </div>
    </div>
    )
}

export default Login
