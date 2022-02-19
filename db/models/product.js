const client = require("../client");

module.exports = {
  createProducts,
};

async function createProducts({ name, description, price }) {
  try {
    const {
      rows: [products],
    } = await client.query(
      `
             INSERT INTO product (name, description, price)
             VALUES ($1, $2, $3)
             RETURNING *;
             `,
      [name, description, price]
    );

    return products;
  } catch (error) {
    throw error;
  }
}
