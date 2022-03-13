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
      price INTEGER
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
        name: "rollies",
        description: "Big fat rolex",
        price: 100,
        inventoryId: 1, // this depends on the inventory table ALREADY existing! :)
        categoryId: 2,
      },

      {
        name: "fossil",
        description: "fossil watch",
        price: 399,
        inventoryId: 2,
        categoryId: 1,
      },

      {
        name: "desert",
        description: "desert watch",
        price: 299,
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
        categoryId: 1,
        description: "The best smart watches around",
      },
      {
        name: "luxury watches",
        categoryId: 2,
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
        inventoryId: 1,
        productQuantity: 100,
        brands: "rolex, cartier, journey, patek, smart watches",
        size: "small, medium, large, extra large",
        colors: "silver, gold, bronze",
      },
      {
        inventoryId: 2,
        productQuantity: 200,
        brands: "rolex, cartier, journey, patek, smart watches",
        size: "small, medium, large, extra large",
        colors: "silver, gold, bronze",
      },
      {
        inventoryId: 3,
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
        userId: 2,
        userId: 3,
        userId: 4,
        userId: 5,
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
