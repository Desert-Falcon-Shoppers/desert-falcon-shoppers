import React from "react";
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
            <div className="row">
              <div className="dropColumn">
                <h3>ROLEX</h3>
                <a href="#rolexRow">ROLLY 1</a>
                <a href="#rolexRow">ROLLY 2</a>
                <a href="#rolexRow">ROLLY 3</a>
              </div>
              <div className="dropColumn">
                <h3>APPLE</h3>
                <a href="#appleWatchRow">APPY 1</a>
                <a href="#appleWatchRow">APPY 2</a>
                <a href="#appleWatchRow">APPY 3</a>
              </div>
              <div className="dropColumn">
                <h3>PATEK</h3>
                <a href="#patekRow">PATTY 1</a>
                <a href="#patekRow">PATTY 2</a>
                <a href="#patekRow">PATTY 3</a>
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
            <div className="row">
              <div className="dropColumn">
                <h3>ANALOGS</h3>
                <a href="#rolexRow">ROLLY 1</a>
                <a href="#rolexRow">ROLLY 2</a>
                <a href="#rolexRow">ROLLY 3</a>
              </div>
              <div className="dropColumn">
                <h3>SMART WATCHES</h3>
                <a href="#appleWatchRow">APPY 1</a>
                <a href="#appleWatchRow">APPY 2</a>
                <a href="#appleWatchRow">APPY 3</a>
              </div>
              <div className="dropColumn">
                <h3>WATER-PROOF</h3>
                <a href="#patekRow">PATTY 1</a>
                <a href="#patekRow">PATTY 2</a>
                <a href="#patekRow">PATTY 3</a>
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
            <div className="row">
              <div className="dropColumn">
                <h3>ANALOGS</h3>
                <a href="#rolexRow">ROLLY 1</a>
                <a href="#rolexRow">ROLLY 2</a>
                <a href="#rolexRow">ROLLY 3</a>
              </div>
              <div className="dropColumn">
                <h3>SMART WATCHES</h3>
                <a href="#appleWatchRow">APPY 1</a>
                <a href="#appleWatchRow">APPY 2</a>
                <a href="#appleWatchRow">APPY 3</a>
              </div>
              <div className="dropColumn">
                <h3>WATER-PROOF</h3>
                <a href="#patekRow">PATTY 1</a>
                <a href="#patekRow">PATTY 2</a>
                <a href="#patekRow">PATTY 3</a>
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
            <div className="row">
              <div className="dropColumn">
                <h3>ANALOGS</h3>
                <a href="#rolexRow">ROLLY 1</a>
                <a href="#rolexRow">ROLLY 2</a>
                <a href="#rolexRow">ROLLY 3</a>
              </div>
              <div className="dropColumn">
                <h3>SMART WATCHES</h3>
                <a href="#appleWatchRow">APPY 1</a>
                <a href="#appleWatchRow">APPY 2</a>
                <a href="#appleWatchRow">APPY 3</a>
              </div>
              <div className="dropColumn">
                <h3>WATER-PROOF</h3>
                <a href="#patekRow">PATTY 1</a>
                <a href="#patekRow">PATTY 2</a>
                <a href="#patekRow">PATTY 3</a>
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
            <div className="row">
              <div className="dropColumn">
                <h3>ANALOGS</h3>
                <a href="#rolexRow">ROLLY 1</a>
                <a href="#rolexRow">ROLLY 2</a>
                <a href="#rolexRow">ROLLY 3</a>
              </div>
              <div className="dropColumn">
                <h3>SMART WATCHES</h3>
                <a href="#appleWatchRow">APPY 1</a>
                <a href="#appleWatchRow">APPY 2</a>
                <a href="#appleWatchRow">APPY 3</a>
              </div>
              <div className="dropColumn">
                <h3>WATER-PROOF</h3>
                <a href="#patekRow">PATTY 1</a>
                <a href="#patekRow">PATTY 2</a>
                <a href="#patekRow">PATTY 3</a>
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
