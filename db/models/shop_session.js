const client = require("../client");

module.exports = {
  createShopSession,
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

async function updateShopSession({ id, name, description }) {
  try {
    const {
      rows: [shopSession],
    } = await client.query(
      `
      UPDATE shop_session
      SET id=$1 name=$2, description=$3
      WHERE id=$4
      RETURNING *;
      `,
      [id, name, description]
    );

    return shopSession;
  } catch (err) {
    throw err;
  }
}
