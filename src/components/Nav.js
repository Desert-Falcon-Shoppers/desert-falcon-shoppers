import React from "react";
import { imageUrls } from "../imageUrls";
import "./styles/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="catList">
        <div className="dropMenu">
          <button className="dropBtn">Brands</button>
          <div className="dropContent">
            <div className="dropHeader">
              <h2>Brands</h2>
            </div>
            <div className="brandsRow">
              <div className="dropColumn">
                <h3>ROLEX</h3>
                <button> Shop Rolex </button>
              </div>
              <div className="dropColumn">
                <h3>APPLE</h3>
                <button> Shop Apple </button>
              </div>
              <div className="dropColumn">
                <h3>PATEK</h3>
                <button> Shop Patek </button>
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
                <h3>Luxury</h3>
                <button> Shop Luxury </button>
              </div>
              <div className="dropColumn">
                <h3>SMART WATCHES</h3>
                <button> Shop Smart Watches </button>
              </div>
              <div className="dropColumn">
                <h3>WATER-PROOF</h3>
                <button> Shop water-Proof </button>
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
                <h3>5% Off</h3>
                <button> Shop Sale </button>
              </div>
              <div className="dropColumn">
                <h3>10% Off</h3>
                <button> Shop Sale </button>
              </div>
              <div className="dropColumn">
                <h3>15% Off</h3>
                <button> Shop Sale </button>
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
                <h3>Friend</h3>
                <button> Shop Ideal Gifts </button>
              </div>
              <div className="dropColumn">
                <h3>GrandParents</h3>
                <button> Shop Ideal Gifts </button>
              </div>
              <div className="dropColumn">
                <h3>Significant Other</h3>
                <button> Shop Ideal Gifts </button>
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
                <h3>Fit-Bit</h3>
                <button> Shop Fit-Bit </button>
              </div>
              <div className="dropColumn">
                <h3>Garmin</h3>
                <button> Shop Garmin </button>
              </div>
              <div className="dropColumn">
                <h3>Oura</h3>
                <button> Shop Oura </button>
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
