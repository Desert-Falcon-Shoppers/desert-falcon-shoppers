import React from 'react'
import "./styles/Login.css";

function Login() {
    return (
        <div className="login_container">
            <h1 className='login_header'>Login</h1>
            <form className='login_form'>
                <input className='login_form_input' type="text" name="username" placeholder='Username'></input>
                <input className='login_form_input' type="password" name="password" placeholder='Password'></input>
                <button type="submit" class="loginBtn">Login</button>
            </form>
        </div>
    )
}

export default Login