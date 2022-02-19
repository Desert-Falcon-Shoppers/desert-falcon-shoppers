const client = require("../client");

module.exports = {
  createProducts,
};

async function createProducts({
  name,
  inventoryId,
  categoryId,
  discountId,
  description,
  price,
}) {
  try {
    const {
      rows: [products],
    } = await client.query(
      `
             INSERT INTO product (name, "inventoryId", "categoryId", "discountId", description, price)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING *;
             `,
      [name, inventoryId, categoryId, discountId, description, price]
    );

    return products;
  } catch (error) {
    throw error;
  }
}
