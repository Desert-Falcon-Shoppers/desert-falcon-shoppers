import React from "react";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login_container">
      <h1 className="sign_up_greeting"> Already A Member? Login Here </h1>
      <h1 className="login_header">Login</h1>
      <form className="login_form">
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
      </form>
      <button className="signup_form_login_redirect">
        <a href="http://localhost:3000/SignUp"> Not A Member? Sign Up </a>
      </button>
    </div>
  );
}

export default Login;
