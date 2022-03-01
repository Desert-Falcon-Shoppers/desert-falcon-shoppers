const client = require("../client");

module.exports = {
  createUserOrders,
  getAllUserOrders,
  getUserOrdersById,
  updateUserOrders,
  deleteUserOrders,
};

async function createUserOrders({ userId, orderId }) {
  try {
    const {
      rows: [userOrders],
    } = await client.query(
      `
          INSERT INTO user_orders ("userId", "orderId")
          VALUES ($1, $2)
          RETURNING *;
          `,
      [userId, orderId]
    );
    return userOrders;
  } catch (error) {
    throw error;
  }
}

async function getAllUserOrders() {
  try {
    const { rows: userOrders } = await client.query(
      `
       SELECT * FROM user_orders;
       `
    );

    return userOrders;
  } catch (err) {
    throw err;
  }
}

async function getUserOrdersById(userOrdersId) {
  try {
    const {
      rows: [userOrders],
    } = await client.query(
      `
        SELECT * FROM user_orders
        WHERE id=$1;
        `,
      [userOrdersId]
    );
    return userOrders;
  } catch (error) {
    throw error;
  }
}

async function updateUserOrders({ id, userId, orderId }) {
  try {
    const {
      rows: [userOrders],
    } = await client.query(
      `
       UPDATE user_orders
       SET "userId"=$1, "orderId"=$2
       WHERE id=$5
       RETURNING *;
       `,
      [userId, orderId, id]
    );
    return userOrders;
  } catch (error) {
    throw error;
  }
}

async function deleteUserOrders(userOrdersId) {
  try {
    const {
      rows: [userOrders],
    } = await client.query(
      `
        DELETE FROM user_orders
        WHERE id=$1
        RETURNING *;
      `,
      [userOrdersId]
    );
    return userOrders;
  } catch (err) {
    throw err;
  }
}
