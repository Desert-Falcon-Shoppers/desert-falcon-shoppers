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
          onMouseOver={() => image(i)}
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
      <div id="luxuryRow">
        <div className="headerProductRowDiv">
          <h2> Luxury </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="smartwatchesRow">
        <div className="headerProductRowDiv">
          <h2> Smart Watches </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="analogwatchesRow">
        <div className="headerProductRowDiv">
          <h2> Analog Watches </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://ik.imagekit.io/ograin/s/files/1/0814/0539/products/Barrel_36mm_Oak_Rosegold_01_400x.png?v=1578687020",
                "https://cdn.picpng.com/watches/pattern-watches-38655.png",
                "http://www.pngall.com/wp-content/uploads/2016/04/Watch-PNG-Image.png",
                "https://static.wixstatic.com/media/2cd43b_289f466375d74cfca16bfe7c66b3c0cf~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_289f466375d74cfca16bfe7c66b3c0cf~mv2.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="patekRow">
        <div className="headerProductRowDiv">
          <h2> Patek </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="appleRow">
        <div className="headerProductRowDiv">
          <h2> Apple </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="rolexRow">
        <div className="headerProductRowDiv">
          <h2> Rolex </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="mensRow">
        <div className="headerProductRowDiv">
          <h2> Men </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="womensRow">
        <div className="headerProductRowDiv">
          <h2> Women </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="kidsRow">
        <div className="headerProductRowDiv">
          <h2> Kids </h2>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
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
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">
              Add To Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/productview">
                View Product{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRows;
