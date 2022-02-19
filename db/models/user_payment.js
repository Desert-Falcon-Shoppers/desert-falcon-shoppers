const client = require("../client");

module.exports = {
  createUserPayment,
};

async function createUserPayment({
  userId,
  paymentType,
  provider,
  accountNo,
  expiry,
}) {
  try {
    const {
      rows: [userPayment],
    } = await client.query(
      `
            INSERT INTO user_payment ("userId", "paymentType", provider, "accountNo", expiry)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [userId, paymentType, provider, accountNo, expiry]
    );
    return userPayment;
  } catch (error) {
    throw error;
  }
}
