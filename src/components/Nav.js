import React from "react";
import { imageUrls } from "../imageUrls";
import "./styles/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="catList">
        <div className="dropMenu">
          <button className="dropBtn">Mens</button>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Womens </button>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Kids </button>
        </div>

        <div className="dropMenu">
          <button className="dropBtn">Brands</button>
          <div className="dropContent">
            <div className="brandsRow">
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products"> Shop Rolex </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products"> Shop Apple </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products"> Shop Patek </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Styles</button>
          <div className="dropContent">
            <div className="stylesRow">
              <div className="dropColumn">
                <button href="#styleRow"> Shop Luxury </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products">
                    Shop Smart Watches
                  </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products">
                    {" "}
                    Shop Water-Proof{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Sales</button>
          <div className="dropContent">
            <div className="salesRow">
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products"> Shop Sale </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products"> Shop Sale </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products">Shop Sale</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Gift</button>
          <div className="dropContent">
            <div className="giftRow">
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/products">Shop Ideal Gifts</a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products">
                    {" "}
                    Shop Ideal Gifts{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products">
                    {" "}
                    Shop Ideal Gifts{" "}
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Fitness</button>
          <div className="dropContent">
            <div className="fitnessRow">
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products"> Fit Bit </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products">
                    {" "}
                    Shop Garmin{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/products"> Shop Oura </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
