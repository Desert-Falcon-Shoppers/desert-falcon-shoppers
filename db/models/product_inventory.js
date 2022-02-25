const client = require("../client");

module.exports = {
  createProductInventory,
  getAllProductInventory,
};

async function createProductInventory({ productQuantity }) {
  try {
    const {
      rows: [productInventory],
    } = await client.query(
      `
    INSERT INTO product_inv ("productQuantity")
    VALUES ($1)
    RETURNING *;
    `,
      [productQuantity]
    );
    return productInventory;
  } catch (error) {
    throw error;
  }
}

async function getAllProductInventory() {
  try {
    const { rows: productInventory } = await client.query(`
      SELECT * FROM product_inv;
    `);
    return productInventory;
  } catch (error) {
    throw error;
  }
}
