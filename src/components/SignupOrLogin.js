import React from "react";
import ReactDom from "react-dom";
import "./styles/SignupOrLogin.css";

function SignupOrLogin() {
  return (
    <div className="sign_login_container">
      <h1>Sign Up</h1>
      <form>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="text" name="firstName" placeholder="First Name"></input>
        <input type="text" name="lastName" placeholder="Last Name"></input>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="text" name="phoneNumber" placeholder="Mobile"></input>
        <button type="submit" class="signUpBtn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupOrLogin;
