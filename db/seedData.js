const client = require("./client");

const {
  User,
  Product,
  ProductCategory,
  ProductInventory,
  OrderItems,
  OrderDetails,
  UserOrders,
  CartItems,
  Discount,
  PaymentDetails,
  UserPayment,
  UserAddress,
  ShopSession,
} = require("./");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS user_orders;
    DROP TABLE IF EXISTS order_details;
    DROP TABLE IF EXISTS payment_details;
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS product;
    DROP TABLE IF EXISTS discount;
    DROP TABLE IF EXISTS user_payment;
    DROP TABLE IF EXISTS user_address;
    DROP TABLE IF EXISTS product_inv;
    DROP TABLE IF EXISTS product_cat;
    DROP TABLE IF EXISTS shop_session;
    DROP TABLE IF EXISTS users;
    DROP TYPE IF EXISTS orderstatus;
  `);
    console.log("Finished dropping tables!");
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to create tables...");

    await client.query(`
    CREATE TYPE orderstatus AS ENUM ('pending', 'settled');

    CREATE TABLE product_cat (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      description TEXT
    );

    CREATE TABLE product_inv (
      id SERIAL PRIMARY KEY,
      "productQuantity" INTEGER,
      brands TEXT NOT NULL,
      size TEXT NOT NULL,
      colors TEXT NOT NULL
    );

    CREATE TABLE discount (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255), 
      description TEXT,
      "discountAmount" INTEGER,
      active BOOLEAN DEFAULT true
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE,
      password VARCHAR(255),
      "firstName" VARCHAR(255),
      "lastName" VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      "phoneNumber" TEXT UNIQUE
    ); 

    CREATE TABLE product (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      description TEXT,
      "inventoryId" INTEGER REFERENCES product_inv (id),
      "categoryId" INTEGER REFERENCES product_cat (id),
      "discountId" INTEGER REFERENCES discount (id),
      price INTEGER,
      "imageUrl" TEXT
    );

    CREATE TABLE shop_session (
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users (id)
    );

    CREATE TABLE payment_details (
      id SERIAL PRIMARY KEY,
      amount INTEGER,
      provider VARCHAR(255),
      status VARCHAR(255)
    );

    CREATE TABLE order_details (
      id SERIAL PRIMARY KEY,
      status orderstatus NOT NULL,
      date DATE DEFAULT now()
    );

    CREATE TABLE order_items (
      id BIGSERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES product (id),
      "orderId" INTEGER REFERENCES order_details (id),
      quantity INTEGER,
      pricepaid INTEGER,
      UNIQUE("productId", "orderId")
    );

    -- create two user orders for userId === 1
    CREATE TABLE user_orders (
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users (id),
      "orderId" INTEGER REFERENCES order_details (id),
      UNIQUE("userId", "orderId")
    );

    CREATE TABLE cart_items (
      id SERIAL PRIMARY KEY,
      -- the sessionId points to a cart
      -- the productId and quantity are key-val pairs
      -- we'll need the cart to have
      "sessionId" INTEGER REFERENCES shop_session (id),
      "productId" INTEGER REFERENCES product (id),
      quantity INTEGER,
      price INTEGER
    );

    CREATE TABLE user_address (
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users (id),
      "addressLine1" VARCHAR(255) NOT NULL,
      "addressLine2" VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      "postalCode" VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL
    );

    CREATE TABLE user_payment (
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users (id),
      "paymentType" VARCHAR(255),
      provider VARCHAR(255) NOT NULL,
      "accountNo" VARCHAR(255) NOT NULL, 
      expiry DATE DEFAULT now()
    );
    `);

    console.log("Finished creating tables!");
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  console.log("creating initial users");

  try {
    const createInitUser = [
      {
        username: "dolton22",
        password: "beachBoy",
        firstName: "Dolton",
        lastName: "Scott",
        email: "d@gmail.com",
        phoneNumber: "405333333",
      },

      {
        username: "devin",
        password: "userExpert",
        firstName: "Devin",
        lastName: "Vogt",
        email: "devin@gmail.com",
        phoneNumber: "405444444",
      },

      {
        username: "jacob",
        password: "desertFalc",
        firstName: "Jacob",
        lastName: "Kelcy",
        email: "jacob@gmail.com",
        phoneNumber: "405555555",
      },

      {
        username: "chris",
        password: "dessyfalcs",
        firstName: "Chris",
        lastName: "Vogt",
        email: "chris@gmail.com",
        phoneNumber: "405777777",
      },

      {
        username: "Sean",
        password: "seanBoat",
        firstName: "Sean",
        lastName: "Barker",
        email: "sean@gmail.com",
        phoneNumber: "405888888",
      },

      {
        username: "joel",
        password: "beachBoy",
        firstName: "Joel",
        lastName: "Folske",
        email: "joel@gmail.com",
        phoneNumber: "405999999",
      },
    ];

    const users = await Promise.all(createInitUser.map(User.createUser));

    console.log(users);

    console.log("Finished creating users!");
  } catch (error) {
    console.log("error creating users");
    throw error;
  }
}

async function createInitialProducts() {
  console.log("starting to create initial products");
  try {
    const createInitProducts = [
      {
        name: "Diamond Rolex 16233",
        description: "Full Diamond Roman Dial | Jubilee Band",
        price: 800,
        category: "Rolex",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_1ct_icedoutromannumeral_1.jpg?v=1559891211",
        inventoryId: 1, // this depends on the inventory table ALREADY existing! :)
        categoryId: 2,
      },

      {
        name: "AppleWatch Series 7",
        description:
          "Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. Advanced features let you measure your blood oxygen level,2 take an ECG anytime,3 and access mindfulness and sleep tracking apps. You can also track dozens of workouts, including new tai chi and pilates.",
        price: 499,
        imageUrl:
          "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
        inventoryId: 2,
        categoryId: 1,
      },

      {
        name: "PATEK PHILIPPE Nautilus",
        description: "Rose gold | Rose Gold Band | Folding buckle",
        price: 299,
        imageUrl:
          "https://watchbox-cdn.imgix.net/posted-product-images/637641051898292638.jpg?h=1540&w=1540&auto=compress",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex 16200 ",
        description: "Blue Black Dial | Jubilee Band",
        price: 699,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_1ct_blue_1_2.jpg?v=1559879768",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "AppleWatch Series 8",
        description:
          "Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. Advanced features let you measure your blood oxygen level,2 take an ECG anytime,3 and access mindfulness and sleep tracking apps. You can also track dozens of workouts, including new tai chi and pilates.",
        price: 599,
        imageUrl:
          "https://freepngimg.com/download/apple/58853-series-watch-apple-smartwatch-free-transparent-image-hd.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Sense & Versa 3 Band", //waterproof
        description: "Its Water proof",
        price: 599,
        imageUrl:
          "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/bands/sense-v3-sport/herostatic-sense-v3-sport/versa3-sense-sport-frost-white-dramatic.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Presidents Day 18038",
        description: "18k Yellow Gold Diamond Mens Watch",
        price: 899,
        imageUrl:
          "https://img1.picmix.com/output/stamp/normal/9/7/1/8/1068179_6fe13.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Daytona",
        description:
          "Case material	Yellow Gold | Bracelet material	Yellow Gold | (Oyster)Dial type	White Baton | Water resistance 100 metres",
        price: 1099,
        imageUrl:
          "https://images.watchfinder.co.uk/imgv2/stock/213464/Rolex-Daytona-116508-213464-2-220211-115622.jpg;quality=90;h=425",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Datejust 16233",
        description: "Red Dial | Gold |Jubilee Band",
        price: 1199,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_1ct_red_1_2_4345a8e9-231a-40dd-8819-44905e85f5bb.jpg?v=1559878823",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Black Collector's Box",
        description:
          "The perfect gift for your loved ones whether its a special occasion or not",
        price: 250,
        imageUrl:
          "https://demon-box.oss-us-west-1.aliyuncs.com/2022-01-25/20221251112161643080336034582562.png?x-oss-process=image/auto-orient,1/resize,p_50/quality,q_90",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Ultra Rare Deluxe Box",
        description:
          "Watch box with three brand new Rolex watches. The watch box is made out of a lucious black leather and closes smoothly with four magnets.",
        price: 320,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2808/5896/products/1844_BLACK_GIFTSET_BLACKWR_variant_800x.png?v=1639550061",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Diamond Box", //gift
        description: "Watch box with a brand new Rolex watch",
        price: 399,
        imageUrl:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576604097-watch-box-22x.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "FitBit Luxe",
        description:
          "Stainless Steal | Tracks Heart Rate | Tracks Miles Ran | Bronze color",
        price: 449,
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShV_7ScAgE3Xb3K-pkhGUFcFZF57aXHTER5Ao_oulJLiyhsEyGkPjNDx88qx9wI8Bos46ZXLFSFqA&usqp=CAc",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Apple Watch Series 9",
        description:
          "Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. Advanced features let you measure your blood oxygen level,2 take an ECG anytime,3 and access mindfulness and sleep tracking apps. You can also track dozens of workouts, including new tai chi and pilates.",
        price: 699,
        imageUrl:
          "https://www.pngarts.com/files/8/Apple-Watch-Series-6-Photo.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Watch SE",
        description:
          " Built-in Compass  | Tracks Heart Rate | Tracks Miles Ran | Rubber",
        price: 649,
        imageUrl:
          "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-Watch-SE-40mm-Silver-Aluminum-Abyss-Blue-Sport-Band-frontimage",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex 16200",
        description: "| Blue Black Dial | Jubilee Band",
        price: 299,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_1ct_blue_1_2.jpg?v=1559879768",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Iced Out Rolex Datejust",
        description:
          "Two Tone | 10 Carats of Diamonds | Purple Roman Diamond Dial",
        price: 799,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/purple_1.jpg?v=1612291931",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Bangice Iced Roman Numerals", //mens
        description:
          "Gold | Steel & Refined Alloy Case | Steel & Refined Alloy Band | Cozy Butterfly Button",
        price: 1099,
        imageUrl:
          "https://purepng.com/public/uploads/large/wrist-watch-ogx.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Datejust 16233", //womens
        description: "Pink Roman Dial | Jubilee Band",
        price: 279,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/rose1_b46f093c-52aa-4f69-b294-1bd5adc62bb3.jpg?v=1621019686",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Datejust 16200", //womens
        description: "Light Pink Roman Numeral Dial | Jubilee Band",
        price: 289,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/rose1white_6b4bbe3d-7ad8-4420-8bd5-c164fdecd716.jpg?v=1621262565",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Rolex Datejust 16200", //womens
        description: "Dark Mother Of Pearl Dial | Roman Numeral | Jubilee Band",
        price: 329,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_dark_motherofpearl_1_16008b88-e352-437b-954e-c9b7d39ad67b.jpg?v=1583510036",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Ace 3 Minions Band",
        description:
          " Minions embossed bands infuse the best parts of being a kid into comfortable, easy-to-clean bands made for all-day play.",
        price: 749,
        imageUrl:
          "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/bands/ace-3-minions/hero-static/black/ace3-minions-black-dramatic.png",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Minnie Mouse",
        description: "Disney Kids Minnie Mouse Printed Fabric Band",
        price: 99,
        imageUrl:
          "https://www.joyjewelers.com/images/products/default/QG-XWA3587.jpg",
        inventoryId: 3,
        categoryId: 2,
      },
      {
        name: "Spider-Web",
        description:
          "Save the day again, super you, with this awesome Spider-Man watch for your cool kiddo.",
        price: 120,
        imageUrl:
          "https://qvc.scene7.com/is/image/QVC/j/09/j479409.001?$aempdlarge$",
        inventoryId: 3,
        categoryId: 2,
      },
    ];
    const products = await Promise.all(
      createInitProducts.map(Product.createProducts)
    );

    console.log(products);

    console.log("Finished creating products");
  } catch (error) {
    throw error;
  }
}

async function createInitialOrderItems() {
  console.log("starting to create initial order items");

  try {
    const createInitOrderItems = [
      {
        userId: 1,
        productId: 1,
        quantity: 1,
      },
      {
        userid: 2,
        productId: 2,
        quantity: 1,
      },
    ];

    const orderItems = await Promise.all(
      createInitOrderItems.map(OrderItems.createOrderItems)
    );

    console.log(orderItems);

    console.log("Finished creating order items");
  } catch (error) {
    throw error;
  }
}

async function createInitialOrderDetails() {
  console.log("starting to create initial order details");

  try {
    const createInitOrderDetails = [
      {
        status: "pending",
        date: new Date().toISOString(),
      },
      {
        status: "settled",
        date: new Date().toISOString(),
      },
    ];

    const orderDetails = await Promise.all(
      createInitOrderDetails.map(OrderDetails.createOrderDetails)
    );

    console.log(orderDetails);
    console.log("Finished creating order details");
  } catch (error) {
    throw error;
  }
}

async function createInitialUserOrders() {
  console.log("starting to create initial order details");

  try {
    const createInitUserOrders = [
      {
        status: "pending",
        date: new Date().toISOString(),
      },
      {
        status: "settled",
        date: new Date().toISOString(),
      },
    ];

    const userOrders = await Promise.all(
      createInitUserOrders.map(UserOrders.createUserOrders)
    );

    console.log(userOrders);
    console.log("Finished creating user orders");
  } catch (error) {
    throw error;
  }
}

async function createInitialPaymentDetails() {
  console.log("starting to create initial payment details");

  try {
    const createInitPaymentDetails = [
      {
        amount: 200,
        provider: "mastercard",
        status: "approved",
      },
    ];

    const orderPaymentDetails = await Promise.all(
      createInitPaymentDetails.map(PaymentDetails.createPaymentDetails)
    );

    console.log(orderPaymentDetails);
    console.log("Finished creating order payment details");
  } catch (error) {
    throw error;
  }
}

async function createInitialDiscount() {
  console.log("starting to create discounts");

  try {
    const createInitDiscount = [
      {
        name: "discount 1",
        description: "discount for rollie",
        discountAmount: 20,
        active: "true",
      },
    ];

    const discount = await Promise.all(
      createInitDiscount.map(Discount.createDiscounts)
    );

    console.log(discount);
    console.log("Finished creating discounts");
  } catch (error) {
    throw error;
  }
}

async function createInitialProductCategory() {
  console.log("starting to create product category");
  try {
    const createInitProductCategory = [
      {
        name: "smart watches",
        description: "The best smart watches around",
      },
      {
        name: "luxury watches",
        description: "These are fancy watches",
      },
    ];
    const productCategory = await Promise.all(
      createInitProductCategory.map(ProductCategory.createProductCategory)
    );
    console.log(productCategory);
    console.log("Finished creating product categories");
  } catch (error) {
    throw error;
  }
}

async function createInitialProductInventory() {
  console.log("starting to create product inventory");

  try {
    const createInitProductInventory = [
      {
        productQuantity: 100,
        brands: "rolex, cartier, journey, patek, smart watches",
        size: "small, medium, large, extra large",
        colors: "silver, gold, bronze",
      },
      {
        productQuantity: 200,
        brands: "rolex, cartier, journey, patek, smart watches",
        size: "small, medium, large, extra large",
        colors: "silver, gold, bronze",
      },
      {
        productQuantity: 300,
        brands: "rolex, cartier, journey, patek, smart watches",
        size: "small, medium, large, extra large",
        colors: "silver, gold, bronze",
      },
    ];

    const productInventory = await Promise.all(
      createInitProductInventory.map(ProductInventory.createProductInventory)
    );

    console.log(productInventory);
    console.log("Finished creating product inventory");
  } catch (error) {
    throw error;
  }
}

async function createInitializeCartItems() {
  console.log("starting to create cart items");

  try {
    const createInitCartItems = [
      {
        sessionId: 1,
        productId: 1,
        quantity: 1,
        price: 350,
      },
    ];

    const cartItems = await Promise.all(
      createInitCartItems.map(CartItems.createCartItems)
    );

    console.log(cartItems);
    console.log("Finished creating cart items");
  } catch (error) {
    throw error;
  }
}

async function createInitializeUserAddress() {
  console.log("starting to create user address");
  try {
    const createInitUserAddress = [
      {
        userid: 1,
        addressLine1: "1223 apple dr",
        addressLine2: "122021 apple dr",
        city: "Tulsa",
        state: "Oklahoma",
        country: "United States",
        postalCode: "74018",
        phone: "9182424482",
      },
    ];

    const userAddress = await Promise.all(
      createInitUserAddress.map(UserAddress.createUserAddress)
    );

    console.log(userAddress);
    console.log("Finished creating user address");
  } catch (error) {
    throw error;
  }
}

async function createInitializeUserPayment() {
  console.log("starting to create user payment");

  try {
    const createInitUserPayment = [
      {
        paymentType: "card",
        provider: "mastercard",
        accountNo: "18232294",
        expiry: "2022-02-18",
      },
    ];

    const userPayment = await Promise.all(
      createInitUserPayment.map(UserPayment.createUserPayment)
    );

    console.log(userPayment);
    console.log("Finished creating user payment");
  } catch (error) {
    throw error;
  }
}

async function createInitializeShopSession() {
  console.log("starting to create shop session");

  try {
    const createInitShopSession = [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
      {
        userId: 4,
      },
      {
        userId: 5,
      },
      {
        userId: 6,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
      {
        userId: 4,
      },
      {
        userId: 5,
      },
      {
        userId: 6,
      },
    ];
    const shopSession = await Promise.all(
      createInitShopSession.map(ShopSession.createShopSession)
    );

    console.log(shopSession);
    console.log("Finished creating shoppin session");
  } catch (error) {
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitializeShopSession();
    await createInitialProductInventory();
    await createInitialProductCategory();
    await createInitialDiscount();
    await createInitialProducts();
    await createInitialPaymentDetails();
    await createInitialOrderDetails();
    await createInitialPaymentDetails();
    await createInitialOrderItems();
    await createInitializeCartItems();
    await createInitializeUserAddress();
    await createInitializeUserPayment();
  } catch (error) {
    throw error;
  }
}

/* if your table has foreign key dependencies, you'll want to create the foreign key table first before trying to associate it in the other table create function :) */

/* that's why we create inv, cat BEFORE individual products! */

module.exports = {
  rebuildDB,
};
