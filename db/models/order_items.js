const client = require("../client");

module.exports = {
  createOrderItems,
};

async function createOrderItems({ productid, quantity, price }) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
         INSERT INTO order_items (productid, quantity, price)
         VALUES ($1, $2, $3)
         RETURNING *;
         `,
      [productid, quantity, price]
    );
    return orderItems;
  } catch (error) {
    throw error;
  }
}
