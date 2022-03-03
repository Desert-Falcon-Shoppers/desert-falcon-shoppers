import React, { useState, useEffect } from "react";
import "./styles/ProductRows.css";

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="thumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
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

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <button onClick={next}>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

function ProductRows() {
  return (
    <div className="productRowContainer">
      <div className="row">
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://content.rolex.com/dam/2021/harmonised/upright-watch-shadow/shadow_oyster_cosmographdayto_40.png?impolicy=v6-model-feature&c1path=/dam/2021/upright-cc/m116500ln-0002.png&cw=3000&ch=3000&imwidth=380",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0006.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278381rbr-0027.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba/m126284rbr-0029.png?impolicy=v6-upright",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://content.rolex.com/dam/2021/harmonised/upright-watch-shadow/shadow_oyster_cosmographdayto_40.png?impolicy=v6-model-feature&c1path=/dam/2021/upright-cc/m116500ln-0002.png&cw=3000&ch=3000&imwidth=380",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0006.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278381rbr-0027.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba/m126284rbr-0029.png?impolicy=v6-upright",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i
              class="fa fa-shopping-bag"
              aria-hidden="true"
            ></i>{" "}
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://content.rolex.com/dam/2021/harmonised/upright-watch-shadow/shadow_oyster_cosmographdayto_40.png?impolicy=v6-model-feature&c1path=/dam/2021/upright-cc/m116500ln-0002.png&cw=3000&ch=3000&imwidth=380",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0006.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278381rbr-0027.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba/m126284rbr-0029.png?impolicy=v6-upright",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://i.pinimg.com/originals/1e/9a/3f/1e9a3f0f5c4a74ffed1226914e8a7682.png",
                "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
                "https://cdn.shopify.com/s/files/1/0411/0860/3032/products/3.AppleWatchSeries5_SkyBlue_250x250@2x.png?v=1623895425",
                "https://edealspro.com/wp-content/uploads/2019/07/40-alu-gold-sport-pink-sand-nc-s4-1up-1.png",
                "https://snipstock.com/assets/cdn/png/new/5e40bb98ce3e5fee8beeb8b7085aa297.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDivApple">
            <button id="whiteBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="blueBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
            <button id="redBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://i.pinimg.com/originals/1e/9a/3f/1e9a3f0f5c4a74ffed1226914e8a7682.png",
                "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
                "https://cdn.shopify.com/s/files/1/0411/0860/3032/products/3.AppleWatchSeries5_SkyBlue_250x250@2x.png?v=1623895425",
                "https://edealspro.com/wp-content/uploads/2019/07/40-alu-gold-sport-pink-sand-nc-s4-1up-1.png",
                "https://snipstock.com/assets/cdn/png/new/5e40bb98ce3e5fee8beeb8b7085aa297.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDivApple">
            <button id="whiteBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="blueBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
            <button id="redBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://i.pinimg.com/originals/1e/9a/3f/1e9a3f0f5c4a74ffed1226914e8a7682.png",
                "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
                "https://cdn.shopify.com/s/files/1/0411/0860/3032/products/3.AppleWatchSeries5_SkyBlue_250x250@2x.png?v=1623895425",
                "https://edealspro.com/wp-content/uploads/2019/07/40-alu-gold-sport-pink-sand-nc-s4-1up-1.png",
                "https://snipstock.com/assets/cdn/png/new/5e40bb98ce3e5fee8beeb8b7085aa297.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDivApple">
            <button id="whiteBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="blueBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
            <button id="redBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://askme.watch/sites/default/files/watch/images/5726_1A_010.png",
                "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-010-fa.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-3800-oro-amarillo-1603374542.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-cronografo-59801ar-acero-y-oro-rosa-nuevo-a-estrenar-id14829-1602770695.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>

          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://askme.watch/sites/default/files/watch/images/5726_1A_010.png",
                "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-010-fa.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-3800-oro-amarillo-1603374542.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-cronografo-59801ar-acero-y-oro-rosa-nuevo-a-estrenar-id14829-1602770695.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://askme.watch/sites/default/files/watch/images/5726_1A_010.png",
                "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-010-fa.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-3800-oro-amarillo-1603374542.png",
                "https://www.ap-watches.com/ap-watches/fotos/patek-philippe-nautilus-cronografo-59801ar-acero-y-oro-rosa-nuevo-a-estrenar-id14829-1602770695.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <p>
            This patek is a very nice watch and luxorious. This product will not
            dissapoint you or the person you are buying it for!
          </p>
          <h3> Price: $1,099.99 </h3>
          <div className="sizeDiv">
            <button className="sizeBox"> S </button>
            <button className="sizeBox"> M </button>
            <button className="sizeBox"> L </button>
            <button className="sizeBox"> XL </button>
          </div>
          <div className="colorDiv">
            <button id="silverBox" className="colorBox"></button>
            <button id="blackBox" className="colorBox"></button>
            <button id="goldBox" className="colorBox"></button>
            <button id="roseGoldBox" className="colorBox"></button>
          </div>
          <button className="addToCartButton">
            {" "}
            Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductRows;
