import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <div className="headerContainer">
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
        <input
          className="search"
          type="text"
          name="search-term"
          placeholder="search"
        ></input>
        <img
          className="cartIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbVFhiyjsifqC1o7WL0LdisB9I_Vz5BM12g&usqp=CAU"
        ></img>
      </div>
    </div>
  );
}

export default Header;
