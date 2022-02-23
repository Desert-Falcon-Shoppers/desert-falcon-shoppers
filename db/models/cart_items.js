const client = require("../client");

module.exports = {
  createCartItems,
  deleteCartItems,
  updateCartItems,
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

async function deleteCartItems(cartItemsId) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
      DELETE FROM cart_items
      WHERE id=$1
      RETURNING *;
    `,
      [cartItemsId]
    );
    return cartItems;
  } catch (error) {
    throw error;
  }
}

async function updateCartItems({ id, sessionId, productId, quantity }) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
      UPDATE cart_items
      SET id=$1, "sessionId"=$2, "productId"=$3, quantity=$4
      WHERE id=$5
      RETURNING *;
    `,
      [id, sessionId, productId, quantity]
    );
    return cartItems;
  } catch (error) {
    throw error;
  }
}
