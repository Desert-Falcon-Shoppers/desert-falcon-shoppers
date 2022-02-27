const client = require("../client");

module.exports = {
  createProductCategory,
  getAllProductsByCategory,
  updateProductCategory,
  deleteProductCategory,
};

async function createProductCategory({ name, description }) {
  try {
    const {
      rows: [productCategory],
    } = await client.query(
      `
        INSERT INTO product_cat (name, description)
        VALUES ($1, $2)
        RETURNING *;
        `,
      [name, description]
    );
    return productCategory;
  } catch (error) {
    throw error;
  }
}

async function getAllProductsByCategory() {
  try {
    // Needs some work
    const { rows: productCategory } = await client.query(
      `
  SELECT * FROM product_cat;
  `
    );
    return productCategory;
  } catch (error) {
    throw error;
  }
}

async function updateProductCategory({
  name,
  description,
}) {
  try {
    const {
      rows: [productCategory]
    } = await client.query(`
      UPDATE product_cat
      SET name=$1, description=$2
      WHERE id=$3
      RETURNING *;
    `, [name, description,])
    return productCategory
  } catch (error) {
    throw error
  }
}

async function deleteProductCategory(productCategoryId) {
  try {
    const {
      rows: [productCategory]
    } = await client.query(`
        DELETE FROM product_cat
        WHERE id=$1
        RETURNING *;
    `, [productCategoryId])
    return productCategory
  } catch (error) {
    throw error
  }
}