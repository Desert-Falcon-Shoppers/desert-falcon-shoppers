import React from "react";
import "./styles/Login.css";
import { useLogin } from "../custom-hooks/useLogin";

function Login() {
  console.log("hi im login");
  const { handleChange, handleSubmit, error } = useLogin();

  return (
    <div className="login_container">
      {error && <div className="error_message">{JSON.stringify(error)}</div>}
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_header">Login</h1>
        <input
          className="login_form_input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        ></input>
        <input
          className="login_form_input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button type="submit" class="loginBtn">
          Login
        </button>
        <a className="signup_link" href="http://localhost:3000/SignUp">
          {" "}
          Not A Member? Sign Up{" "}
        </a>
      </form>
    </div>
  );
}

export default Login;
