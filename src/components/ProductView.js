import React, { useState, useEffect } from "react";
import { useSingleProduct } from "../custom-hooks/useSingleProduct";
import "./styles/ProductView.css";
import "../imageUrls";

function ProductView() {
  const { product } = useSingleProduct();
  const { data } = useSingleProduct();

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

  let [count, setCount] = useState(0);
  if (count < 0) {
    count = 0;
  }

  // var min = Math.floor(0);
  // if (count < 0) {
  //   min;
  // }

  return (
    <div className="productViewContainer">
      <div className="productApp">
        {[data].map(() => (
          <div className="productApp" key={product.id}>
            <Slideshow
              imgs={[product.imageUrl, product.imageUrl, product.imageUrl]}
            />

            <div className="productViewText">
              <h1> {product.name} </h1>
              <p className="productViewp">{product.description}</p>
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
                  <button
                    onClick={() => setCount(count - 1)}
                    className="quantityMinusBtn"
                  >
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                  </button>
                  <span className="quantitySpan">{count}</span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="quantityPlusBtn"
                  >
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div className="productCartDiv">
                <button className="productViewCartBtn">Add to Bag</button>
                <button className="productContinueShoppingBtn">
                  <a href="http://localhost:3000/products"> Return Home</a>
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
        ))}
      </div>
    </div>
  );
}

export default ProductView;
