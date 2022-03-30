import React from "react"
import "../css/Signup.css"

const Signup = () => {
    return (
        <div className='box'>
            <div className='form'>
                <h2 className='form-header'>Signup</h2>
                <div className='form-body'>
                    <input className='input' type='text' placeholder='First Name' />
                    <input className='input' type='text' placeholder='Last Name' />
                    <input className='input' type='text' placeholder='email' />
                    <input className='input' type='text' placeholder='password' />
                    <span className='single-line'>
                        <div className='checkbox-input'>
                            <input className='checkbox' type='checkbox' name='remember' />
                            <label >Remember me</label>
                        </div>
                    </span>
                    <button className='btn primary-btn'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup