const client = require("../client");
const { getProductById } = require("./product");

module.exports = {
  createProductInventory,
  getProductInventoryById,
  updateProductInventory,
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

async function updateProductInventory({ id, productQuantity }) {
  try {
    const {
      rows: [productInventory],
    } = await client.query(
      `
      UPDATE product_inv
       SET id=$1, "productQuantity"=$2
       WHERE id=$3
       RETURNING *;
      `,
      [id, productQuantity]
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
