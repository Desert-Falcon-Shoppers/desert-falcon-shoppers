const client = require("../client");

module.exports = {
  createOrderItems,
  deleteOrderItem,
  getAllOrderItems,
  updateOrderItems,
  getOrderItemsById,
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

async function updateOrderItems({ productId, orderId, quantity, price }) {
  try {
    const {
      rows: [orderItems],
    } = await client.query(
      `
       UPDATE order_items
       SET id=$1, productId=$2, orderId=$3, quantity=$4, price=$5}
       WHERE id=$6
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