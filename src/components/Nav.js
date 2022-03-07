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
            <div className="dropHeader">
              <h2>Brands</h2>
            </div>
            <div className="brandsRow">
              <div className="dropColumn">
                <button href="#brandsRow"> Shop Rolex </button>
              </div>
              <div className="dropColumn">
                <button href="#brandsRow"> Shop Apple </button>
              </div>
              <div className="dropColumn">
                <button href="#brandsRow"> Shop Patek </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropMenu">
          <button className="dropBtn">Styles</button>
          <div className="dropContent">
            <div className="dropHeader">
              <h2>Styles</h2>
            </div>
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
            <div className="dropHeader">
              <h2>Sales</h2>
            </div>
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
            <div className="dropHeader">
              <h2>Gift</h2>
            </div>
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
            <div className="dropHeader">
              <h2>Fitness</h2>
            </div>
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
