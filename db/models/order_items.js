const client = require("../client");

module.exports = {
  createOrderItems,
};

async function createOrderItems({ productId, orderId, quantity, price }) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
         INSERT INTO order_items ("productId", "orderId", quantity, price)
         VALUES ($1, $2, $3, $4)
         RETURNING *;
         `,
      [productId, orderId, quantity, price]
    );
    return orderItems;
  } catch (error) {
    throw error;
  }
}
