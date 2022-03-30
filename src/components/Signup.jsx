import React, { useState, useReducer } from "react"
import axios from "axios"
import "../css/Signup.css"


const Signup = () => {
    const [signupStatus, setSignupStatus] = useState(false)
    const reducer = (state, action) => {
        return { ...state, [action.type]: action.payload }
    }

    const [state, dispatch] = useReducer(reducer, { firstName: '', lastName: '', email: '', password: '' })

    const signupHandler = async () => {
        const res = await axios.post('/api/auth/signup', state)
        console.log(res, 'pp')
        if (res.status === 201) {
            setSignupStatus(true)
        }
    }


    return (
        <div className='box'>
            <div className='form'>
                <h2 className='form-header'>Signup</h2>
                <div className='form-body'>
                    <input className='input' type='text' placeholder='First Name' onChange={(e) => dispatch({ type: 'firstName', payload: e.target.value })} />
                    <input className='input' type='text' placeholder='Last Name' onChange={(e) => dispatch({ type: 'lastName', payload: e.target.value })} />
                    <input className='input' type='text' placeholder='email' onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} />
                    <input className='input' type='text' placeholder='password' onChange={(e) => dispatch({ type: 'password', payload: e.target.value })} />
                    <span className='single-line'>
                        <div className='checkbox-input'>
                            <input className='checkbox' type='checkbox' name='remember' />
                            <label >Remember me</label>
                        </div>
                    </span>
                    <button className='btn primary-btn' onClick={() => signupHandler()}>Signup</button>
                </div>
                {signupStatus && <span>Signup successful!</span>}
            </div>
        </div>
    )
}

export default Signup