import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="imgContainer">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Danvers_Falcons_logo_.png"
        ></img>
      </div>
      <div className="theRest">
        <a href="http://localhost:3000/Login" className="login">
          Login/Register
        </a>
        <div className="searchDiv">
          <button className="searchButton">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>

          <input
            className="search"
            type="text"
            name="search-term"
            placeholder="search"
          ></input>
        </div>

        <img
          className="cartIcon"
          src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
          href="http://localhost:3000/"
        ></img>
      </div>
    </div>
  );
}

export default Header;
