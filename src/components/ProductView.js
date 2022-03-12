import React, { useState, useEffect } from "react";
import "./styles/ProductView.css";
import "../imageUrls";

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="productThumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onMouseOver={() => image(i)}
          className={index === i ? "productActive" : ""}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div className="productSlideshow">
      <img className="productImg" src={imgs[index]} />
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

function ProductView() {
  return (
    <div className="productViewContainer">
      <div className="productApp">
        <Slideshow
          imgs={[
            "https://content.rolex.com/dam/2021/harmonised/upright-watch-shadow/shadow_oyster_cosmographdayto_40.png?impolicy=v6-model-feature&c1path=/dam/2021/upright-cc/m116500ln-0002.png&cw=3000&ch=3000&imwidth=380",
            "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0006.png?impolicy=v6-upright&imwidth=270",
            "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278381rbr-0027.png?impolicy=v6-upright&imwidth=270",
            "https://content.rolex.com/dam/2021/upright-bba/m126284rbr-0029.png?impolicy=v6-upright",
          ]}
        />
        <div className="sizeChartDiv">
          <h1>
            {" "}
            Size Chart <i class="fa fa-arrows-h" aria-hidden="true"></i>
          </h1>
          <div className="watchSizeChartDiv">
            <p> Small: 24-28mm </p>
            <p> Medium: 28-32mm </p>
            <p> Large: 32-36mm </p>
            <p> Extra-Large: 36-40mm </p>
          </div>
        </div>
      </div>
      <div className="productViewText">
        <h1 className="productViewH1">Product Title</h1>
        <h3 className="productViewH3"> $1,099.99</h3>
        <div className="ratingsDiv">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <p className="productViewp">
          This patek is a very nice watch and luxorious. This product will not
          dissapoint you or the person you are buying it for!
        </p>
        <div className="productSizeDiv">
          <button className="sizeBox"> S </button>
          <button className="sizeBox"> M </button>
          <button className="sizeBox"> L </button>
          <button className="sizeBox"> XL </button>
        </div>

        <div className="colorQuantityDiv">
          <div className="productColorDivApple">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
          </div>
          <div className="productViewButtonDiv">
            <button className="quantityMinusBtn">
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </button>
            <span className="quantitySpan"> 0 </span>
            <button className="quantityPlusBtn">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="productCartDiv">
          <button className="productViewCartBtn">Add to Bag</button>
          <button className="productContinueShoppingBtn">
            <a href="http://localhost:3000/productrows"> Return Home</a>
          </button>
        </div>

        <div className="productDetailsDiv">
          <div className="specificationsDiv">
            <h1 className="specH1"> Specs </h1>
            <li> *Color* </li>
            <li> *Brand* </li>
            <li> *Waterproof* </li>
            <li> *Product* </li>
            <li> *productId* </li>
          </div>

          <div className="otherProductsDiv">
            <h2> Similar Products </h2>
            <div className="referenceImgs">
              <img
                src={
                  "https://i.pinimg.com/originals/1e/9a/3f/1e9a3f0f5c4a74ffed1226914e8a7682.png"
                }
                alt="Logo"
              />
              <img
                src={
                  "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-010-fa.png"
                }
                alt="Logo"
              />
              <img
                src={
                  "https://snipstock.com/assets/cdn/png/new/5e40bb98ce3e5fee8beeb8b7085aa297.png"
                }
                alt="Logo"
              />
              <img
                src={
                  "https://askme.watch/sites/default/files/watch/images/5726_1A_010.png"
                }
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
