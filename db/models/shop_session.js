const client = require("../client");

module.exports = {
  createShopSession,
  getShopSessionById,
  deleteShopSession,
  getAllShoppingSessions,
  updateShopSession,
};

async function createShopSession({ userId, total }) {
  try {
    const {
      rows: [shopSession],
    } = await client.query(
      `
            INSERT INTO shop_session ("userId", total)
            VALUES ($1, $2)
            RETURNING *;
            `,
      [userId, total]
    );
    return shopSession;
  } catch (error) {
    throw error;
  }
}

async function getAllShoppingSessions() {
  try {
    const { rows: shopSession } = await client.query(`
    SELECT * FROM shop_session;
  `);
    return shopSession;
  } catch (error) {
    throw error;
  }
}

async function updateShopSession({ id, userId, total }) {
  try {
    const {
      rows: [shopSession],
    } = await client.query(
      `
      UPDATE shop_session
      SET "userId"=$2, total=$3
      WHERE id=$1
      RETURNING *;
      `,
      [id, userId, total]
    );
    return shopSession;
  } catch (err) {
    throw err;
  }
}

async function deleteShopSession(shopSessionId) {
  try {
    const {
      rows: [deletedShopSession],
    } = await client.query(
      `
      DELETE FROM shop_session
      WHERE id=$1
      RETURNING *;
      `,
      [shopSessionId]
    );

    return deletedShopSession;
  } catch (err) {
    throw err;
  }
}

async function getShopSessionById(shopSessionId) {
  try {
    const {
      rows: [shopSession],
    } = await client.query(
      `
    SELECT * FROM shop_session
    WHERE id=$1;
    `,
      [shopSessionId]
    );
    return shopSession;
  } catch (error) {
    throw error;
  }
}
