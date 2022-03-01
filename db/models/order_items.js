const client = require("../client");

module.exports = {
  createOrderItems,
  deleteOrderItem,
  getAllOrderItems,
  updateOrderItems,
  getOrderItemsById,
};

async function createOrderItems({ productId, orderId, quantity }) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
         INSERT INTO order_items ("productId", "orderId", quantity)
         VALUES ($1, $2, $3)
         RETURNING *;
         `,
      [productId, orderId, quantity]
    );
    return orderItems;
  } catch (error) {
    throw error;
  }
}

async function getAllOrderItems() {
  try {
    const { rows: orders } = await client.query(
      `
       SELECT * FROM order_items;
       `
    );

    return orders;
  } catch (error) {
    throw err;
  }
}

async function getOrderItemsById(orderItemsId) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
        SELECT * FROM order_items
        WHERE id=$1;
        `,
      [orderItemsId]
    );
    return orderItems;
  } catch (error) {
    throw error;
  }
}

async function updateOrderItems({ id, productId, orderId, quantity }) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
       UPDATE order_items
       SET "productId"=$1, "orderId"=$2, quantity=$3
       WHERE id=$4
       RETURNING *;
       `,
      [productId, orderId, quantity, id]
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
        DELETE FROM order_items
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
