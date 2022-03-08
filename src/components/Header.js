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
          src="https://www.nicepng.com/png/full/198-1981196_eagle-metals-logo-white-eagle-logo-png.png"
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
        <div className="cartIcon">
          <a
            type="button"
            href="http://localhost:3000/cart"
            class="fa fa-shopping-cart"
            aria-hidden="true"
          ></a>
        </div>
        <div className="accountMenu">
          <button className="accountDropBtn">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="accountDropContent">
            <div className="accountDropHeader">
              <h2>Account Info</h2>
            </div>
            <div className="userInfoDiv">
              <div className="firstInfoDiv">
                <h3>What Can We Help You With, "Username"?</h3>
              </div>
              <div className="secondInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Account Settings </a>
                </div>
                <div className="accountIDiv">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </div>
              </div>
              <div className="thirdInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Your Orders </a>
                </div>
                <div className="accountIDiv">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </div>
              </div>
              <div className="fourthInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Order History </a>
                </div>
                <div className="accountIDiv">
                  <i class="fa fa-history" aria-hidden="true"></i>
                </div>
              </div>
              <div className="fifthInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Payment Settings </a>
                </div>
                <div className="accountIDiv">
                  <i class="fa fa-cc-stripe" aria-hidden="true"></i>
                </div>
              </div>
              <div className="sixthInfoDiv">
                <div className="accountADiv">
                  <a href="http://localhost:3000/account"> Billing Address </a>
                </div>
                <div className="accountIDiv">
                  <i class="fa fa-address-book" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
