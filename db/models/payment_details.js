const client = require("../client");

module.exports = {
  createPaymentDetails,
};

async function createPaymentDetails({ amount, provider, status }) {
  try {
    const {
      rows: [paymentDetails],
    } = await client.query(
      `
           INSERT INTO payment_details (amount, provider, status)
           VALUES ($1, $2, $3)
           RETURNING *;
           `,
      [amount, provider, status]
    );
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}
