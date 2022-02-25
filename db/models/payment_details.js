const res = require("express/lib/response");
const client = require("../client");

module.exports = {
  createPaymentDetails,
  getAllPaymentDetails,
  getPaymentDetailsById,
  updatePaymentDetails,
  deletePaymentDetails,
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

async function getAllPaymentDetails() {
  try {
    const { rows: paymentDetails } = await client.query(`
        SELECT * FROM payment_details;
    `);
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}

async function getPaymentDetailsById(paymentDetailId) {
  try {
    const {
      rows: [paymentDetails],
    } = await client.query(
      `
        SELECT * FROM payment_details
        WHERE id=$1;
    `,
      [paymentDetailId]
    );
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}

async function updatePaymentDetails({ id, amount, provider, status }) {
  try {
    const {
      rows: [paymentDetails],
    } = await client.query(
      `
        UPDATE payment_details
        SET amount=$2, provider=$3, status=$4
        WHERE id=$1
        RETURNING *;

    `,
      [id, amount, provider, status]
    );
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}

async function deletePaymentDetails(paymentDetailsId) {
  try {
    const {
      rows: [paymentDetails],
    } = await client.query(
      `
        DELETE FROM payment_details
        WHERE id=$1
        RETURNING *;
    `,
      [paymentDetailsId]
    );
    return paymentDetails;
  } catch (error) {
    throw error;
  }
}
