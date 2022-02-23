const client = require("../client");

module.exports = {
  createCartItems,
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

async function deleteCartItems(cartItemId) {
  try {
  } catch (err) {
    next(err);
  }
}
