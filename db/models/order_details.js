const client = require("../client");

module.exports = {
  createOrderDetails,
  getAllOrderDetails,
  getOrderDetailsById,
  updateOrderDetails,
  deleteOrderDetails,
};

async function createOrderDetails({ paymentId, userId, discount, total }) {
  try {
    const {
      rows: [orderDetails],
    } = await client.query(
      `
          INSERT INTO order_details ("paymentId", "userId", discount, total)
          VALUES ($1, $2, $3, $4)
          RETURNING *;
          `,
      [paymentId, userId, discount, total]
    );
    return orderDetails;
  } catch (error) {
    throw error;
  }
}

async function getAllOrderDetails() {
  try {
    const { rows: orders } = await client.query(
      `
       SELECT * FROM order_details;
       `
    );

    return orders;
  } catch (error) {
    throw err;
  }
}

async function getOrderDetailsById(orderDetailsId) {
  try {
    const {
      rows: [orderDetails],
    } = await client.query(
      `
        SELECT * FROM order_details
        WHERE id=$1;
        `,
      [orderDetailsId]
    );
    return orderDetails;
  } catch (error) {
    throw error;
  }
}

async function updateOrderDetails({ id, paymentId, userId, discount, total }) {
  try {
    const {
      rows: [orderDetails],
    } = await client.query(
      `
       UPDATE order_details
       SET "paymentId"=$1, "userId"=$2, discount=$3, total=$4
       WHERE id=$5
       RETURNING *;
       `,
      [paymentId, userId, discount, total, id]
    );
    return orderDetails;
  } catch (error) {
    throw error;
  }
}

async function deleteOrderDetails(orderDetailsId) {
  try {
    const {
      rows: [orderDetails],
    } = await client.query(
      `
        DELETE FROM order_details
        WHERE id=$1
        RETURNING *;
      `,
      [orderDetailsId]
    );
    return orderDetails;
  } catch (err) {
    throw err;
  }
}
