const client = require("../client");

module.exports = {
  createUserPayment,
};

async function createUserPayment({
  userid,
  paymenttype,
  provider,
  accountno,
  expiry,
}) {
  try {
    const {
      rows: [userPayment],
    } = await client.query(
      `
            INSERT INTO user_payment (userid, paymenttype, provider, accountno, expiry)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [userid, paymenttype, provider, accountno, expiry]
    );
    return userPayment;
  } catch (error) {
    throw error;
  }
}
