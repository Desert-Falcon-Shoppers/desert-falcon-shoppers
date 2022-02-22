const client = require("../client");

module.exports = {
  getAllProducts,
  createProducts,
  deleteProduct,
};

async function getAllProducts() {
  try {
    const { rows: product } = await client.query(`
      SELECT * FROM product;
    `);

    return product;
  } catch (error) {
    throw error;
  }
}

async function createProducts({
  name,
  description,
  inventoryId,
  categoryId,
  discountId,
  price,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
             INSERT INTO product (name, description, "inventoryId", "categoryId", "discountId", price)
             VALUES ($1, $2, $3, $4, $5, $6)
             ON CONFLICT DO NOTHING
             RETURNING *;
             `,
      [name, description, inventoryId, categoryId, discountId, price]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      DELETE FROM product
      WHERE id=$1
      RETURNING *;
      `,
      [productId]
    );
    return product;
  } catch (error) {
    throw error;
  }
}
