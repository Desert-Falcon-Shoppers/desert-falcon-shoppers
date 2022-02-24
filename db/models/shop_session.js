const client = require("../client");

module.exports = {
  createShopSession,
  getAllShoppingSessions
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
    const {
      rows: shopSession
    } = await client.query(`
    SELECT * FROM shop_session;
  `)
    return shopSession
  } catch (error) {
    throw error
  }
} 
