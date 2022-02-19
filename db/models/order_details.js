const client = require("../client");

module.exports = {
  createOrderDetails,
};

async function createOrderDetails({ userid, discount, total }) {
  try {
    const {
      rows: [orderDetails],
    } = await client.query(
      `
          INSERT INTO order_details (userid, discount, total)
          VALUES ($1, $2, $3)
          RETURNING *;
          `,
      [userid, discount, total]
    );
    return orderDetails;
  } catch (error) {
    throw error;
  }
}
