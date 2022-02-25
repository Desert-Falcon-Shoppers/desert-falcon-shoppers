const client = require("../client");

module.exports = {
  getAllProducts,
  createProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

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

async function getProductById(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        SELECT * FROM product
        WHERE id=$1;
        `,
      [productId]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function updateProduct({
  id,
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
       UPDATE product
       SET name=$1, description=$2, "inventoryId"=$3, "categoryId"=$4, "discountId"=$5, price=$6
       WHERE id=$7
       RETURNING *;
       `,
      [name, description, inventoryId, categoryId, discountId, price, id]
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
