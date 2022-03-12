<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { imageUrls } from "../imageUrls";
import "./styles/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="catList">
        <div className="dropMenu">
          {" "}
          <button className="dropBtn">Mens</button>
        </div>
        <div className="dropMenu">
          {" "}
          <button className="dropBtn">Womens </button>
        </div>
        <div className="dropMenu">
          {" "}
          <button className="dropBtn">Kids </button>
        </div>

        <div className="dropMenu">
          <button className="dropBtn">Brands</button>
          <div className="dropContent">
            <div className="brandsRow">
              <div className="dropColumn">
                <button href="http://localhost:3000/productrows">
                  {" "}
                  Shop Rolex{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button href="http://localhost:3000/productrows">
                  {" "}
                  Shop Apple{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button href="http://localhost:3000/productrows">
                  {" "}
                  Shop Patek{" "}
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
                <button href="#styleRow"> Shop Smart Watches </button>
              </div>
              <div className="dropColumn">
                <button href="#styleRow"> Shop water-Proof </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Sales</button>
          <div className="dropContent">
            <div className="salesRow">
              <div className="dropColumn">
                <button href="#salesRow"> Shop Sale </button>
              </div>
              <div className="dropColumn">
                <button href="#salesRow"> Shop Sale </button>
              </div>
              <div className="dropColumn">
                <button href="#salesRow"> Shop Sale </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Gift</button>
          <div className="dropContent">
            <div className="giftRow">
              <div className="dropColumn">
                <button href="#giftRow"> Shop Ideal Gifts </button>
              </div>
              <div className="dropColumn">
                <button href="#giftRow"> Shop Ideal Gifts </button>
              </div>
              <div className="dropColumn">
                <button href="#giftRow"> Shop Ideal Gifts </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Fitness</button>
          <div className="dropContent">
            <div className="fitnessRow">
              <div className="dropColumn">
                <button href="#fitnessRow"> Shop Fit-Bit </button>
              </div>
              <div className="dropColumn">
                <button href="#fitnessRow"> Shop Garmin </button>
              </div>
              <div className="dropColumn">
                <button href="#fitnessRow"> Shop Oura </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
=======
>>>>>>> 35bd2b2d976ef908babf3b70290b11b1c9402a1b
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
                  <a href="http://localhost:3000/productrows"> Shop Rolex </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/productrows"> Shop Apple </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/productrows"> Shop Patek </a>
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
                  <a href="http://localhost:3000/productrows">
                    Shop Smart Watches
                  </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/productrows">
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
                  <a href="http://localhost:3000/productrows">
                    {" "}
                    Shop Sale{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/productrows">
                    {" "}
                    Shop Sale{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  <a href="http://localhost:3000/productrows">Shop Sale</a>
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
                  <a href="http://localhost:3000/productrows">
                    Shop Ideal Gifts
                  </a>
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/productrows">
                    {" "}
                    Shop Ideal Gifts{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/productrows">
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
                  <a href="http://localhost:3000/productrows"> Fit Bit </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/productrows">
                    {" "}
                    Shop Garmin{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="dropColumn">
                <button>
                  {" "}
                  <a href="http://localhost:3000/productrows">
                    {" "}
                    Shop Oura{" "}
                  </a>{" "}
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
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 35bd2b2d976ef908babf3b70290b11b1c9402a1b
