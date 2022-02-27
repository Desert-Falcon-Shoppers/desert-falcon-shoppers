const client = require("../client");

module.exports = {
  createProductInventory,
  getAllProductInventory,
  updateProductInventory,
  deleteProductInventory,
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

async function updateProductInventory({ id, productQuantity }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      UPDATE product_inv
      SET "productQuantity"=$1
      WHERE id=$2
      RETURNING *;
      `,
      [productQuantity, id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function deleteProductInventory(productId) {
  try {
    const {
      rows: [product]
    } = await client.query(`
      DELETE FROM product_inv
      WHERE id=1$
      RETURNING *;
    `, [productId])
    return product
  } catch (error) {
    throw error
  }
}
