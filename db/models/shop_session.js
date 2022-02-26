const client = require('../client');

module.exports = {
  createShopSession,
  deleteShopSession,
  getAllShoppingSessions,
  updateShopSession,
  buildCart,
  buildCheckoutCart,
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
      SET "userId"=$1, total=$2
      WHERE id=$3
      RETURNING *;
      `,
      [userId, total, id]
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

// shopSessionId IS the cartId :)
async function buildCart(shopSessionId) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
      SELECT shop_session.*,
      json_agg(
        json_build_object(
          'productId', cart_items."productId",
          'quantity', cart_items.quantity 
        )
      -- aliasing the return of this json_agg function
      -- will give us: products: [ { productId: 1, quantity: 50 }, ... ]
      ) AS products
      FROM shop_session
      JOIN cart_items ON cart_items."sessionId"=$1
      WHERE shop_session.id=$1
      GROUP BY shop_session.id;
    `,
      [shopSessionId]
    );

    return cart;
  } catch (error) {
    throw error;
  }
}

async function buildCheckoutCart(shopSessionId) {
  try {
    const query = `
      SELECT shop_session.*,
        json_agg(
          json_build_object(
            'id', cart_items."productId",
            'quantity', cart_items.quantity,
            'name', product.name,
            'price', product.price
          )
        -- aliasing the return of this json_agg function
        -- will give us: products: [ { productId: 1, quantity: 50 }, ... ]
        ) AS products
      FROM shop_session
      JOIN cart_items ON cart_items."sessionId"=$1
      JOIN product ON cart_items."productId"=product.id
      WHERE shop_session.id=$1
      GROUP BY shop_session.id;
    `;

    const {
      rows: [checkoutCart],
    } = await client.query(query, [shopSessionId]);

    return checkoutCart;
  } catch (err) {
    throw err;
  }
}
