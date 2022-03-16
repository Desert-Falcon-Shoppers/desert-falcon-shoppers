import React, { useState, useEffect } from "react";
import { useProducts } from "../custom-hooks/useProducts";
import "./styles/ProductRows.css";

function ProductRows() {
  const { products } = useProducts();

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

    return (
      <div className="slideshow">
        <img className="mainImg" src={imgs[index]} />
        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    );
  };

  console.log("these are my products,", products);

  return (
    <div className="productRowContainer">
      <div className="products">
        {products.map((products) => (
          <div className="products" key={products.id}>
            <div id="row">
              <div className="box">
                <Slideshow
                  imgs={[
                    products.imageUrl,
                    products.imageUrl,
                    products.imageUrl,
                  ]}
                />
                <h2>{products.name} </h2>
                <h3> ${products.price} </h3>
                <div className="productRowBtnDiv">
                  <button className="addToCartBtn">Add To Bag</button>
                  <button className="viewMoreBtn">
                    <a href="http://localhost:3000/products/1">View Product </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div id="brandsRow">
        <div className="headerProductRowDiv">
          <h2> Brands </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://content.rolex.com/dam/2021/harmonised/upright-watch-shadow/shadow_oyster_cosmographdayto_40.png?impolicy=v6-model-feature&c1path=/dam/2021/upright-cc/m116500ln-0002.png&cw=3000&ch=3000&imwidth=380",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0006.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278381rbr-0027.png?impolicy=v6-upright&imwidth=270",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> {products.price} </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              <a href="http://localhost:3000/products/1">View Product </a>
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
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/2">View Product </a>
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
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/3">View Product </a>
            </button>
          </div>
        </div>
      </div>
      <div id="styleRow">
        <div className="headerProductRowDiv">
          <h2> Style </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://www.breitling.com/media/image/1/asset-version-b161122b0c/u10380591a1u1-chronomat-automatic-36-rolled-up.png",
                "https://www.watchadvice.com.au/wp-content/uploads/2020/12/Image-8.png",
                "https://www.breitling.com/media/image/1/gallery_square_700/asset-version-3e97aeefb4/u17325211g1u1-navitimer-automatic-38-rolled-up.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/4">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://pngimg.com/uploads/watches/watches_PNG9887.png",
                "https://gley.com.ua/image/cache/catalog/pic_tovar/6355/smartwatch-fk88%20(1)-1200x800.png",
                "https://cdn.picpng.com/watches/painting-watches-38674.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/5">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://www.dignited.com/wp-content/uploads/2020/11/Apple-Watch-SE-Design.png",
                "https://i2.wp.com/thetruthaboutwatches.com/wp-content/uploads/2021/09/Apple-Watch-water-resistance-bubbles.png?resize=450%2C403&ssl=1",
                "https://site-cdn.huami.com/files/amazfit/en/gts2e/section-10-ex-1.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/6">View Product </a>
            </button>
          </div>
        </div>
      </div>
      <div id="saleRow">
        <div className="headerProductRowDiv">
          <h2> Sale </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://ik.imagekit.io/ograin/s/files/1/0814/0539/products/Barrel_36mm_Oak_Rosegold_01_400x.png?v=1578687020",
                "https://cdn.picpng.com/watches/pattern-watches-38655.png",
                "http://www.pngall.com/wp-content/uploads/2016/04/Watch-PNG-Image.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <div className="saleDiv">
            <h3 className="oldSaleH3"> $1,099.99 </h3>
            <h3> $1,099.99 </h3>
          </div>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              <a href="http://localhost:3000/products/7">View Product</a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://purepng.com/public/uploads/large/wrist-watch-ogx.png",
                "https://purepng.com/public/uploads/large/wrist-watch-ogx.png",
                "https://cdn.picpng.com/watches/pattern-watches-38668.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <div className="saleDiv">
            <h3 className="oldSaleH3"> $1,099.99 </h3>
            <h3> $1,099.99 </h3>
          </div>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/8">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://pngimg.com/uploads/watches/watches_PNG9881.png",
                "https://pngimg.com/uploads/watches/watches_PNG9884.png",
                "https://cdn.picpng.com/watches/pattern-watches-38668.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <div className="saleDiv">
            <h3 className="oldSaleH3"> $1,099.99 </h3>
            <h3> $1,099.99 </h3>
          </div>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products9">View Product </a>
            </button>
          </div>
        </div>
      </div>
      <div id="giftRow">
        <div className="headerProductRowDiv">
          <h2> Ideal Gifts </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://demon-box.oss-us-west-1.aliyuncs.com/2022-01-25/20221251112161643080336034582562.png?x-oss-process=image/auto-orient,1/resize,p_50/quality,q_90",
                "https://blog.hypedrop.com/content/images/2021/04/watchbox20-1.png",
                "https://lykkeboks.s3.eu-north-1.amazonaws.com/images/boxes/otCMPDyPYPs8fiHlEpSTfaKxVFZVaEVQg0k0YCiC.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products10">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://cdn.shopify.com/s/files/1/2808/5896/products/1844_BLACK_GIFTSET_BLACKWR_variant_800x.png?v=1639550061",
                "https://cdn.shopify.com/s/files/1/2808/5896/products/1926AUTO_GIFTSET_600x.png?v=1639550212",
                "https://cdn.shopify.com/s/files/1/2409/0711/products/1844_WHITE_GIFTSET_600x.png?v=1639515408",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/11">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://www.customcardboardboxesco.com/media/catalog/category/Collapsible_Watch_Boxes_1.jpg",
                "https://5.imimg.com/data5/SW/AC/JH/SELLER-14238370/wooden-watch-box-250x250.jpg",
                "https://d2fn6rbs5rhk8j.cloudfront.net/wp-content/uploads/2019/08/low-moq-luxury-wooden-watch-box-direct-branded-watch-box-manufacturer-3w-b-w08-by-3watches.com-6.jpg?x42757",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/12">View Product </a>
            </button>
          </div>
        </div>
      </div>
      <div id="fitnessRow">
        <div className="headerProductRowDiv">
          <h2> Fitness </h2>
        </div>
        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://www.lifepng.com/wp-content/uploads/2020/11/Fitbit-Tracker-png-hd.png",
                "https://www.lifepng.com/wp-content/uploads/2020/11/Fitbit-Tracker-png-hd.png",
                "https://www.lifepng.com/wp-content/uploads/2020/11/Fitbit-Tracker-png-hd.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/13">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://www.garmin.com.sg/m/sg/g/products/vivoactive-3-element-gray-image-01.png",
                "https://www.garmin.com.sg/m/sg/g/products/vivoactive3-element-azure-image-01.png",
                "https://www.garmin.com.sg/m/sg/g/products/vivoactive-3-element-cerise-image-01.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/14">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://imageio.forbes.com/specials-images/imageserve/61be24f940a98bb2ef1aaa3d/Oura-Ring-third-generation-/960x0.jpg?fit=bounds&format=jpg&width=96",
                "https://s.yimg.com/ny/api/res/1.2/pbxgH1YojB2opI_kFeUN9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/HPjqBKswfV60GeL6SicSxA--~B/aD0zNTAwO3c9MzUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/refinery29_778/de869bbcb45886976537c6e34b624ce1",
                "https://s3.amazonaws.com/ouraring.com/images/product/bilbo/pdp-carousel-img-2-bilbo-front-stealth%402x.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/15">View Product </a>
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
                "https://purepng.com/public/uploads/large/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465647su5cb.png",
                "http://pngimg.com/uploads/clock/clock_PNG6612.png",
                "https://pngimg.com/uploads/watches/watches_PNG9866.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/16">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://purepng.com/public/uploads/large/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465647su5cb.png",
                "http://pngimg.com/uploads/clock/clock_PNG6612.png",
                "https://pngimg.com/uploads/watches/watches_PNG9866.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/17">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://purepng.com/public/uploads/large/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465647su5cb.png",
                "http://pngimg.com/uploads/clock/clock_PNG6612.png",
                "https://pngimg.com/uploads/watches/watches_PNG9866.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/18">View Product </a>
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
                "https://freepikpsd.com/file/2020/01/Rolex-Watch-PNG-Image.png",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0005.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126284rbr-0011.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/19">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://freepikpsd.com/file/2020/01/Rolex-Watch-PNG-Image.png",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0005.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126284rbr-0011.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/20">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://freepikpsd.com/file/2020/01/Rolex-Watch-PNG-Image.png",
                "https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278289rbr-0005.png?impolicy=v6-upright&imwidth=270",
                "https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126284rbr-0011.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/21">View Product </a>
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
                "https://freepikpsd.com/file/2019/10/kids-phone-watch-Transparent-Images.png",
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/22">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/23">View Product </a>
            </button>
          </div>
        </div>

        <div className="box">
          <div className="App">
            <Slideshow
              imgs={[
                "https://freepikpsd.com/file/2019/10/kids-phone-watch-Transparent-Images.png",
                "https://cdn.shopify.com/s/files/1/0329/0028/4548/products/45f21b3d0e5d384ebd919779ea9fc102_1024x1024.png?v=1640148786",
                "https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126284rbr-0011.png",
              ]}
            />
          </div>
          <h1 className="boxH1"> Title </h1>
          <h3> $1,099.99 </h3>
          <div className="productRowBtnDiv">
            <button className="addToCartBtn">Add To Bag</button>
            <button className="viewMoreBtn">
              {" "}
              <a href="http://localhost:3000/products/24">View Product </a>
            </button>
          </div>
        </div>
      </div>
    */}
    </div>
  );
}

export default ProductRows;
