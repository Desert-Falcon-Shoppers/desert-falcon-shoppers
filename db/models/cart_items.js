const client = require("../client");

module.exports = {
  createCartItems,
  deleteCartItems,
  updateCartItems,
  getAllCartItems,
  getCartItemsById,
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
        SET "sessionId"=$1, "productId"=$2, quantity=$3
        WHERE id=$4;
       `,
      [id, sessionId, productId, quantity]
    );

    return cartItems;
  } catch (err) {
    throw err;
  }
}

async function getAllCartItems() {
  try {
    const { rows: cartItems } = await client.query(`
      SELECT * FROM cart_items;
    `);
    return cartItems;
  } catch (error) {
    throw error;
  }
}

async function getCartItemsById(cartId) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
      SELECT * FROM cart_items
      WHERE id=$1;
    `,
      [cartId]
    );
    return cartItems;
  } catch (error) {
    throw error;
  }
}
