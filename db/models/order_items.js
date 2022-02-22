const client = require("../client");

module.exports = {
  createOrderItems,
  deleteOrderItem,
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

async function deleteOrderItem(orderItemId) {
  try {
    const {
      rows: [orderItem],
    } = await client.query(
      `
      DELETE FROM product
      WHERE id=$1
      RETURNING *;
      `,
      [orderItemId]
    );
    return orderItem;
  } catch (error) {
    throw error;
  }
}
