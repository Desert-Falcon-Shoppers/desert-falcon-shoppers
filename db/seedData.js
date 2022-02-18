const { client, createUser, getAllUsers } = require("./");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS product_inventory;
    DROP TABLE IF EXISTS product_category;
    DROP TABLE IF EXISTS payment_details;
    DROP TABLE IF EXISTS order_details;
    DROP TABLE IF EXISTS discount;
    DROP TABLE IF EXISTS user_payment;
    DROP TABLE IF EXISTS user_address;
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS shopping_session;
    DROP TABLE IF EXISTS product;
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
      "productQuantity" INTEGER NOT NULL
    );

    CREATE TABLE discount (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      "discountAmount" INTEGER NOT NULL,
      active BOOLEAN DEFAULT true
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      "firstName" VARCHAR(255) NOT NULL,
      "lastName" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "phoneNumber" INTEGER UNIQUE NOT NULL 
    ); 

    CREATE TABLE product (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      "inventoryId" INTEGER REFERENCES product_inv (id),
      "categoryId" INTEGER REFERENCES product_cat (id),
      "discountId" INTEGER REFERENCES discount (id) NOT NULL,
      price INTEGER NOT NULL
    );

    CREATE TABLE shop_session (
      id SERIAL PRIMARY KEY,
      "userId" VARCHAR(255) UNIQUE NOT NULL,
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
      "paymentId" INTEGER REFERENCES payment_details (id),
      "userId" INTEGER REFERENCES users (id) UNIQUE NOT NULL,
      discount INTEGER UNIQUE NOT NULL,
      total INTEGER NOT NULL
    );

    CREATE TABLE order_items (
      id BIGSERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES product (id),
      "orderId" INTEGER REFERENCES order_details (id) NOT NULL,
      quantity INTEGER NOT NULL
    );

    CREATE TABLE cart_items (
      id SERIAL PRIMARY KEY,
      "sessionId" INTEGER REFERENCES shop_session (id),
      "productId" INTEGER REFERENCES product (id),
      quantity INTEGER NOT NULL
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
      "paymentType" VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      "accountNo" TEXT NOT NULL, 
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
        phoneNumber: "405-333-333",
      },
    ];
    const users = await Promise.all(createInitUser.map(createUser));
    console.log(users);
  } catch (error) {
    console.log("error creating users");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
