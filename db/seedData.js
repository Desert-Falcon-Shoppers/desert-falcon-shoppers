const {
  client,
  // declare your model imports here
  // for example, User
} = require(".");

async function dropTables() {
  try {
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
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        "phoneNumber" INTEGER UNIQUE NOT NULL
      ); 
      
    `);
  } catch (error) {
    throw error;
  }
}

async function buildTables() {
  try {
    client.connect();
    await dropTables;
    await createTables;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  buildTables,
};
