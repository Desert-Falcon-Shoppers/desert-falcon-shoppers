const res = require("express/lib/response");
const client = require("../client");

module.exports = {
  createUserPayment,
  getAllUserPayments,
  getUserPaymentById,
  updateUserPayment,
  deleteUserPayment
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
    const {
      rows: userPayments
    } = await client.query(`
      SELECT * FROM user_payment;
    `)
    return userPayments
  } catch (error) {
    throw error
  }
}

async function getUserPaymentById(userPaymentId) {
  try {
    const {
      rows: [userPayment]
    } = await client.query(`
        SELECT * FROM user_payment 
        WHERE id=$1;
      `, [userPaymentId])
    return userPayment
  } catch (error) {
    throw error
  }
}

async function updateUserPayment({
  id,
  userId,
  paymentType,
  provider,
  accountNo,
  expiry
}) {
  try {
    const {
      rows: [updateUserPayment]
    } = await client.query(`
      UPDATE user_payment
      SET id=$1, userId=$2, paymentType=$3 ,provider=$4, accountNo=$5, expiry=$6
      WHERE id=$7
      RETURNING *;
    `, [id, userId, paymentType, provider, accountNo, expiry])
    res.send(updateUserPayment)
  } catch (error) {
    throw error
  }
}

async function deleteUserPayment(userPaymentId) {
  try {
    const {
      rows: [deleteUser]
    } = await client.query(`
    DELETE FROM user_payment
    WHERE id=$1
    RETURNING *;
    `, [userPaymentId])
    return deleteUser
  } catch (error) {
    throw error
  }
}