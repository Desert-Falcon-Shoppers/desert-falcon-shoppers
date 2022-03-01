const client = require("../client");

module.exports = {
  createCartItems,
  deleteCartItems,
  updateCartItems,
  getAllCartItems,
};

async function createCartItems({ sessionId, productId, quantity, price }) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
            INSERT INTO cart_items ("sessionId", "productId", quantity, price)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,
      [sessionId, productId, quantity, price]
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

async function updateCartItems({ id, sessionId, productId, quantity, price }) {
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
        UPDATE cart_items
        SET "sessionId"=$1, "productId"=$2, quantity=$3, price=$4
        WHERE id=$5
        RETURNING *;
       `,
      [sessionId, productId, quantity, id]
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
