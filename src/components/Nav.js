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
      <div className="sortBy">
        <button className="sortBtn">Sort By</button>
        <div className="sortDrop">
          <div className="sortColumn">
            <a>Lowest Price</a>
            <a>Highest Price</a>
            <a>Clearance</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
