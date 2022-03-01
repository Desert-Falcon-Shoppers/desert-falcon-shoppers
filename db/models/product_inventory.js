const client = require("../client");

module.exports = {
  createProductInventory,
  getAllProductInventory,
  updateProductInventory,
  getProductInventoryById,
  deleteProductInventory,
};

async function createProductInventory({
  productQuantity,
  brands,
  size,
  colors,
}) {
  try {
    const {
      rows: [productInventory],
    } = await client.query(
      `
    INSERT INTO product_inv ("productQuantity", brands, size, colors)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
      [productQuantity, brands, size, colors]
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

async function getProductInventoryById(productInventoryId) {
  try {
    const {
      rows: [productInventory],
    } = await client.query(
      `
      SELECT * FROM product_inv
      WHERE id=$1;
    `,
      [productInventoryId]
    );
    return productInventory;
  } catch (error) {
    throw error;
  }
}

async function updateProductInventory({
  id,
  productQuantity,
  brands,
  size,
  colors,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      UPDATE product_inv
      SET "productQuantity"=$1, brands=$2, size=$3, colors=$4
      WHERE id=$5
      RETURNING *;
      `,
      [productQuantity, brands, size, colors, id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function deleteProductInventory(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      DELETE FROM product_inv
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
