import React from "react";
import "./styles/Login.css";

function Login() {
    return (
        <div className="login_container">
            <form className="login_form">
                <h1 className="login_header">Login</h1>
                <input
                    className="login_form_input"
                    type="text"
                    name="username"
                    placeholder="Username"
                ></input>
                <input
                    className="login_form_input"
                    type="password"
                    name="password"
                    placeholder="Password"
                ></input>
                <button type="submit" class="loginBtn">
                    Login
                </button>
                <a className="signup_link" href="http://localhost:3000/SignUp"> Not A Member? Sign Up </a>
            </form>
        </div>
    );
}

export default Login;
