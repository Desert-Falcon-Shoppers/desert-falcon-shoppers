const client = require("../client");

module.exports = {
  createOrderDetails,
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
