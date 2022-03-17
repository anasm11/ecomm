import React from "react"
import "../css/Signup.css"

const Signup=()=>{
return(
    <div class='box'>
    <div class='form'>
        <h2 class='form-header'>Signup</h2>
        <div class='form-body'>
            <input class='input' type='text' placeholder='email'/>
            <input class='input' type='text' placeholder='password'/>
            <span class='single-line'>
                <div class='checkbox-input'>
                    <input class='checkbox' type='checkbox' name='remember'/>
                    <label for='remember'>Remember me</label>
                </div>
                <div class='link'>Forgot password?</div>
            </span>
            <button class='btn primary-btn'>Login</button>
        </div>
        <div class='form-footer'>Create new account? {'>'}</div>
    </div>
</div>
)
}

export default Signup