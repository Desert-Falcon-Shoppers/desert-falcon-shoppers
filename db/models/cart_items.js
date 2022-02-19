const client = require("../client");

module.exports = {
  createCartItems,
};

async function createCartItems(sessionid, productid, quantity) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
            INSERT INTO cart_items (sessionid, productid, quantity)
            VALUES ($1, $2, $3)
            RETURNING *;
            `,
      [sessionid, productid, quantity]
    );
    return cartItems;
  } catch (error) {
    throw error;
  }
}
