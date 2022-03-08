import React from "react";
import "./styles/MyAccount.css";

function MyAccount() {
  return (
    <div className="myAccountContainer">
      <h1 className="accountHeader">Account information</h1>
      <div className="sectionContainer">
        <div className="sectionHeader">Personal:</div>
        <div className="accountDiv">
          <div>Username:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="Users Name"
          ></input>
        </div>
        <div className="accountDiv">
          <div>Date Of Birth:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="Date Of Birth"
          ></input>
        </div>
        <div className="accountDiv">
          <div>Email:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing email address"
          ></input>
        </div>
      </div>

      <div className="sectionContainer">
        <div className="sectionHeader">Address and Contact Info:</div>
        <div className="accountDiv">
          <div>Country:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing Country"
          ></input>
        </div>
        <div className="accountDiv">
          <div>State:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing State"
          ></input>
        </div>
        <div className="accountDiv">
          <div>City:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing City"
          ></input>
        </div>
        <div className="accountDiv">
          <div>ZIP / Postal Code:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing ZIP / Postal Code"
          ></input>
        </div>
        <div className="accountDiv">
          <div>Street Address:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="existing Street Address"
          ></input>
        </div>
        <div className="accountDiv">
          <div>Mobile:</div>
          <input
            className="accountInput"
            type="text"
            name="search-term"
            placeholder="users existing mobile phone number:"
          ></input>
        </div>

        <div className="sectionContainer">
          <div className="sectionHeader">Change Password:</div>

          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="Enter Existing Password"
            ></input>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="Enter New Password"
            ></input>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="Retype New Passwooord"
            ></input>
          </div>
        </div>
      </div>
      <div className="submitChangesDiv">
        <button className="searchButton">
          <i class="myAccountSubmitButton" aria-hidden="true">
            submit
          </i>
        </button>
      </div>
    </div>
  );
}

export default MyAccount;
