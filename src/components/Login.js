import React from 'react'
import "./styles/Login.css";

function Login() {
    return (
        <div className="login_container">
            <h1>Login</h1>
            <form>
                <input type="text" name="username" placeholder='Username'></input>
                <input type="password" name="password" placeholder='Password'></input>
                <button type="submit" class="loginBtn">Login</button>
            </form>
        </div>
    )
}

export default Login