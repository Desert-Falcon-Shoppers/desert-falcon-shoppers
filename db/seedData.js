const client = require("./client");

const {
  createUser,
  getAllUsers,
  createProducts,
  createProductCategory,
  createProductInventory,
  createOrderItems,
  createOrderDetails,
  createCartItems,
  createDiscount,
  createPaymentDetails,
  createUserPayment,
  createUserAddress,
} = require("./");
const { removeAllListeners } = require("nodemon");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS order_items;
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
    CREATE TABLE product_cat (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );

    CREATE TABLE product_inv (
      id SERIAL PRIMARY KEY,
      productquantity INTEGER NOT NULL
    );

    CREATE TABLE discount (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      discountamount INTEGER NOT NULL,
      active BOOLEAN DEFAULT true
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      phonenumber INTEGER UNIQUE NOT NULL 
    ); 

    CREATE TABLE product (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,  
      -- inventoryid INTEGER REFERENCES product_inv (id),
      -- categoryid INTEGER REFERENCES product_cat (id),
      -- discountid INTEGER REFERENCES discount (id) NOT NULL,
      price INTEGER NOT NULL
    );

    CREATE TABLE shop_session (
      id SERIAL PRIMARY KEY,
      userid VARCHAR(255) UNIQUE NOT NULL,
      total INTEGER NOT NULL
    );

    CREATE TABLE payment_details (
      id SERIAL PRIMARY KEY,
      amount INTEGER NOT NULL,
      provider VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL
    );

    CREATE TABLE order_details (
      id SERIAL PRIMARY KEY,
      userid INTEGER REFERENCES users (id) UNIQUE NOT NULL,
      -- paymentid INTEGER REFERENCES payment_details (id) NOT NULL,
      discount INTEGER UNIQUE NOT NULL,
      total INTEGER NOT NULL
    );

    CREATE TABLE order_items (
      id BIGSERIAL PRIMARY KEY,
      productid INTEGER REFERENCES product (id),
      orderid INTEGER REFERENCES order_details (id),
      quantity INTEGER NOT NULL,
      price INTEGER NOT NULL
    );

    CREATE TABLE cart_items (
      id SERIAL PRIMARY KEY,
      sessionid INTEGER REFERENCES shop_session (id),
      productid INTEGER REFERENCES product (id),
      quantity INTEGER NOT NULL
    );

    CREATE TABLE user_address (
      id SERIAL PRIMARY KEY,
      userid INTEGER REFERENCES users (id),
      addressline1 VARCHAR(255) NOT NULL,
      addressline2 VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      postalcode VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL
    );

    CREATE TABLE user_payment (
      id SERIAL PRIMARY KEY,
      userid INTEGER REFERENCES users (id),
      paymenttype VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      accountno TEXT NOT NULL, 
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
        firstname: "Dolton",
        lastname: "Scott",
        email: "d@gmail.com",
        phonenumber: "405333333",
      },

      {
        username: "devin",
        password: "userExpert",
        firstname: "Devin",
        lastname: "Vogt",
        email: "devin@gmail.com",
        phonenumber: "405444444",
      },

      {
        username: "jacob",
        password: "desertFalc",
        firstname: "Jacob",
        lastname: "Kelcy",
        email: "jacob@gmail.com",
        phonenumber: "405555555",
      },

      {
        username: "chris",
        password: "dessyfalcs",
        firstname: "Chris",
        lastname: "Vogt",
        email: "chris@gmail.com",
        phonenumber: "405777777",
      },

      {
        username: "Sean",
        password: "seanBoat",
        firstname: "Sean",
        lastname: "Barker",
        email: "sean@gmail.com",
        phonenumber: "405888888",
      },

      {
        username: "joel",
        password: "beachBoy",
        firstname: "Joel",
        lastname: "Folske",
        email: "joel@gmail.com",
        phonenumber: "405999999",
      },
    ];
    const users = await Promise.all(createInitUser.map(createUser));
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
      },

      {
        name: "fossil",
        description: "fossil watch",
        price: 399,
      },

      {
        name: "desert",
        description: "desert watch",
        price: 299,
      },
    ];
    const products = await Promise.all(createInitProducts.map(createProducts));
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
        productid: 1,
        quantity: 1,
        price: 350,
      },
    ];
    const orderItems = await Promise.all(
      createInitOrderItems.map(createOrderItems)
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
        userid: 1,
        discount: 0,
        total: 1000,
      },
    ];
    const orderDetails = await Promise.all(
      createInitOrderDetails.map(createOrderDetails)
    );
    console.log(orderDetails);
    console.log("Finished creating order details");
  } catch (error) {
    throw error;
  }
}

async function createInitialPaymentDetails() {
  console.log("starting to create initial order details");
  try {
    const createInitPaymentDetails = [
      {
        orderid: 1,
        amount: 200,
        provider: "mastercard",
        status: "approved",
      },
    ];
    const orderPaymentDetails = await Promise.all(
      createInitPaymentDetails.map(createPaymentDetails)
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
        discountamount: 20,
        active: "true",
      },
    ];

    const discount = await Promise.all(createInitDiscount.map(createDiscount));
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
    ];
    const productCategory = await Promise.all(
      createInitProductCategory.map(createProductCategory)
    );
    console.log(productCategory);
    console.log("Finished creating product categories");
  } catch (error) {
    throw error;
  }
}

async function createInitialProductInventory() {
  console.log("starting to create product category");
  try {
    const createInitProductInventory = [
      {
        productquantity: 100,
      },
    ];
    const productInventory = await Promise.all(
      createInitProductInventory.map(createProductInventory)
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
        sessionid: 1,
        productid: 1,
        quantity: 1,
      },
    ];
    const cartItems = await Promise.all(
      createInitCartItems.map(createCartItems)
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
        addressline1: "1223 apple dr",
        addressline2: "122021 apple dr",
        city: "Tulsa",
        state: "Oklahoma",
        country: "United States",
        postalcode: "74018",
        telephone: "9182782382",
        mobile: "9182424482",
      },
    ];
    const CreateUserAddress = await Promise.all(
      createInitUserAddress.map(CreateUserAddress)
    );
    console.log(createUserAddress);
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
        userid: 1,
        paymenttype: "card",
        provider: "mastercard",
        accountno: 18232294,
        expiry: "2/18",
      },
    ];
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
    await createInitialProducts();
    await createInitialOrderItems();
    await createInitialOrderDetails();
    await createInitialPaymentDetails();
    await createInitialDiscount();
    await createInitialProductCategory();
    await createInitialProductInventory();
    await createInitializeCartItems();
    await createInitializeUserAddress();
    await createInitializeUserPayment();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
