import React from "react";
import "./styles/CatColumn.css";

function CatColumn() {
  return (
    <div className="categoryColumn">
      <h1> Shop Mens, Womens, and Kids </h1>
      <div className="mensSectionDiv">
        <button className="mensSectionBtn">
          {" "}
          <a href="#mensRow">Shop Mens </a>
        </button>
      </div>
      <div className="womensSectionDiv">
        <button className="womensSectionBtn">
          {" "}
          <a href="#womensRow"> Shop Women</a>{" "}
        </button>
      </div>
      <div className="kidsSectionDiv">
        <button className="kidsSectionBtn">
          {" "}
          <a href="#kidsRow"> Shop Kids </a>{" "}
        </button>
      </div>
    </div>
  );
}

export default CatColumn;
