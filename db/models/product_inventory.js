const client = require("../client");

module.exports = {
  createProductInventory,
};

async function createProductInventory({ productquantity }) {
  try {
    const {
      rows: [productInventory],
    } = await client.query(
      `
               INSERT INTO product_inventory (productquantity)
               VALUES ($1)
               RETURNING *;
               `,
      [productquantity]
    );
    return productInventory;
  } catch (error) {
    throw error;
  }
}
