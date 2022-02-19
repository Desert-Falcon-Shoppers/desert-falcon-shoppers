const client = require("../client");

module.exports = {
  createProductCategory,
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