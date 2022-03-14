const res = require("express/lib/response");
const client = require("../client");

module.exports = {
  createUserPayment,
  getAllUserPayments,
  getUserPaymentById,
  updateUserPayment,
  deleteUserPayment,
  getUserPaymentByUsername,
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

async function getAllUserPayments() {
  try {
    const { rows: userPayments } = await client.query(`
      SELECT * FROM user_payment;
    `);
    return userPayments;
  } catch (error) {
    throw error;
  }
}

async function getUserPaymentById(userPaymentId) {
  try {
    const {
      rows: [userPayment],
    } = await client.query(
      `
        SELECT * FROM user_payment 
        WHERE id=$1;
      `,
      [userPaymentId]
    );
    return userPayment;
  } catch (error) {
    throw error;
  }
}

async function getUserPaymentByUsername(usernameId) {
  try {
    const {
      rows: [userPayment],
    } = await client.query(
      `
        SELECT * FROM user_payment 
        WHERE username=$1;
        `,
      [usernameId]
    );
    return userPayment;
  } catch (error) {
    throw error;
  }
}

async function updateUserPayment({
  id,
  userId,
  paymentType,
  provider,
  accountNo,
  expiry,
}) {
  try {
    const {
      rows: [updateUserPayment],
    } = await client.query(
      `
      UPDATE user_payment
      SET "userId"=$1, "paymentType"=$2, provider=$3, "accountNo"=$4, expiry=$5
      WHERE id=$6
      RETURNING *;
    `,
      [userId, paymentType, provider, accountNo, expiry, id]
    );
    return updateUserPayment;
  } catch (error) {
    throw error;
  }
}

async function deleteUserPayment(userPaymentId) {
  try {
    const {
      rows: [deleteUser],
    } = await client.query(
      `
    DELETE FROM user_payment
    WHERE id=$1
    RETURNING *;
    `,
      [userPaymentId]
    );
    return deleteUser;
  } catch (error) {
    throw error;
  }
}
