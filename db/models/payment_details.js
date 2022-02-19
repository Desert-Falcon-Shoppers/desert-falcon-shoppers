const client = require("../client");

module.exports = {
  createPaymentDetails,
};

async function createPaymentDetails({ orderid, amount, provider, status }) {
  try {
    const {
      rows: [paymentDetails],
    } = await client.query(
      `
           INSERT INTO payment_details (orderid, amount, provider, status)
           VALUES ($1, $2, $3, $4)
           RETURNING *;
           `,
      [orderid, amount, provider, status]
    );
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}
