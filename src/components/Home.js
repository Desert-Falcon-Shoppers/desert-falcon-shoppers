import React, { useState, useEffect } from "react";
import "./styles/Home.css";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(1);
  }, []);

  return (
    <div className="bannerSlideshow">
      <img className="bannerMainImg" src={imgs[index]} />
    </div>
  );
};

function Home() {
  return (
    <div className="bannerDiv">
      <div className="bannerBackground">
        <div className="bannerApp">
          <h1 className="arrivalH1"> New Arrival </h1>
          <Slideshow
            imgs={[
              "https://wallpaperaccess.com/full/5439217.jpg",
              "https://miro.medium.com/max/2000/0*ecGsDfIIY_7jUHNy",
              "https://clara.io/resources/images/400x0/07582cf17b7a73de6bf4f2ac47207fd0",
              "https://clara.io/resources/images/400x0/07582cf17b7a73de6bf4f2ac47207fd0",
              "https://clara.io/resources/images/400x0/07582cf17b7a73de6bf4f2ac47207fd0",
            ]}
          />
          <button className="bannerBtn">
            <a href="http://localhost:3000/productrows"> View Product </a>
          </button>
        </div>
        <div className="titleDiv">
          <h1 className="teamTitleH1"> DESERT FALCON WATCHES </h1>
          <h3 className="teamTitleH3"> Watches of The Future </h3>
          <img src="https://theportkeycollector.com/wp-content/uploads/2021/07/Hedwig_1024.png"></img>
          <button className="teamTitleBtn">
            <a href="http://localhost:3000/productrows"> Begin Shopping </a>
          </button>
        </div>
        <div className="salesColumn">
          <h4> Shop 5% 10% 15% off!</h4>
          <div className="sales5SectionDiv">
            <img src="https://pngimg.com/uploads/watches/watches_PNG101449.png"></img>
            <button className="sales5SectionBtn">
              <a href="http://localhost:3000/productrows">Shop Sale </a>
            </button>
          </div>
          <div className="sales10SectionDiv">
            <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png"></img>
            <button className="sales10SectionBtn">
              <a href="http://localhost:3000/productrows"> Shop Sale </a>
            </button>
          </div>
          <div className="sales15SectionDiv">
            <img src="https://toppng.com/uploads/thumbnail//watch-11549498055xgcjwbt9ib.png"></img>
            <button className="sales15SectionBtn">
              <a href="http://localhost:3000/productrows"> Shop Sale </a>
            </button>
          </div>
        </div>
      </div>
      <div className="comingSoonDiv">
        <div className="comingSoonHeader">
          <h1> Arriving Soon</h1>
        </div>
        <div className="comingSoonContainer">
          <div className="comingSoonImageDiv">
            <div className="firstComingSoonImage">
              <img src="https://www.freeiconspng.com/uploads/watch-icon-26.png"></img>
            </div>
            <div className="secondComingSoonImage">
              <img src="https://www.freeiconspng.com/uploads/watch-icon-26.png"></img>
            </div>
            <div className="thirdComingSoonImage">
              <img src="https://www.freeiconspng.com/uploads/watch-icon-26.png"></img>
            </div>
          </div>
          <div className="comingSoonTextDiv">
            <h1> Chanel 15OQI67 </h1>
            <p>
              {" "}
              This new watch will have people staring as you walk by them in
              style! Make sure to snatch this must have watch before it is too
              late! Arriving on March 19th!
            </p>
            <h3> $1299.99 </h3>
            <div className="colorComingSoonContainer">
              <h3> Available Colors: </h3>
              <div className="productColorComingSoon">
                <button id="silverBox" className="colorBox"></button>
                <button id="blackBox" className="colorBox"></button>
                <button id="roseGoldBox" className="colorBox"></button>
                <button id="goldBox" className="colorBox"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categoriesDiv">
        <div className="categoryColumn">
          <div className="mensSectionDiv">
            <button className="mensSectionBtn">
              <a href="http://localhost:3000/productrows">Shop Mens </a>
            </button>
          </div>
          <div className="womensSectionDiv">
            <button className="womensSectionBtn">
              <a href="http://localhost:3000/productrows"> Shop Women</a>
            </button>
          </div>
        </div>
      </div>
      <div className="kidsSectionRow">
        <div className="kidsSectionDiv">
          <button className="kidsSectionBtn">
            <a href="http://localhost:3000/productrows"> Shop Kids </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
