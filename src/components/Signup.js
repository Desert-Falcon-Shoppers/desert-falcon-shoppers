import React from "react";
import ReactDom from "react-dom";
import "./styles/Signup.css";

function Signup() {

    return (
        <div className="signup_container">
            <h1 className="signup_header">Sign Up</h1>
            <form className="signup_form">
                <input className="signup_form_input" type="text" name="username" placeholder="Username"></input>
                <input className="signup_form_input" type="password" name="password" placeholder="Password"></input>
                <input className="signup_form_input" type="text" name="firstName" placeholder="First Name"></input>
                <input className="signup_form_input" type="text" name="lastName" placeholder="Last Name"></input>
                <input className="signup_form_input" type="email" name="email" placeholder="Email"></input>
                <input className="signup_form_input" type="text" name="phoneNumber" placeholder="Mobile"></input>
                <button className="signup_form_input" type="submit" class="signUpBtn">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;
