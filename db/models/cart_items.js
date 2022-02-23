const client = require("../client");

module.exports = {
  createCartItems,
  getAllCartItems,
  getCartItemsById
};

async function createCartItems({ sessionId, productId, quantity }) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
            INSERT INTO cart_items ("sessionId", "productId", quantity)
            VALUES ($1, $2, $3)
            RETURNING *;
            `,
      [sessionId, productId, quantity]
    );
    return cartItems;
  } catch (error) {
    throw error;
  }
}

async function getAllCartItems() {
  try {
    const {
      rows: cartItems
    } = await client.query(`
      SELECT * FROM cart_items;
    `)
    return cartItems
  } catch (error) {
    throw error
  }
}

async function getCartItemsById(cartId) {
  try {
    const {
      rows: [cartItems]
    } = await client.query(`
      SELECT * FROM cart_items
      WHERE id=$1;
    `, [cartId])
    return cartItems
  } catch (error) {
    throw error
  }
}