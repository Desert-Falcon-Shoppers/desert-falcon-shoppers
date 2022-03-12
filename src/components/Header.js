import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="imgContainer">
        <img
          className="logo"
          src="https://www.nicepng.com/png/full/198-1981196_eagle-metals-logo-white-eagle-logo-png.png"
        ></img>
      </div>

      <div className="theRest">
        <div className="homeIcon">
          <a href="http://localhost:3000/home">
            <i class="fa fa-home" aria-hidden="true"></i>
          </a>
        </div>
        <div className="searchMenu">
          <button className="searchDropBtn">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <div className="searchDropContent">
            <div className="searchDropHeader">
              <input
                className="search"
                type="text"
                name="search-term"
                placeholder="search"
              ></input>
            </div>
          </div>
        </div>
        <div className="accountMenu">
          <button className="accountDropBtn">
            <i class="fa fa-user" aria-hidden="true"></i>
          </button>
          <div className="accountDropContent">
            <div className="userInfoDiv">
              <div className="secondInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/SignUp"> Sign Up </a>
                </div>
              </div>
              <div className="thirdInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/login"> Log In </a>
                </div>
              </div>
              <div className="fourthInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Settings </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart">
          <span class="count">0</span>
          <a href="http://localhost:3000/cart">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
