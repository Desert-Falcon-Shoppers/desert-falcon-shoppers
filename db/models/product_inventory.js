const client = require("../client");
const { getProductById } = require("./product");

module.exports = {
  createProductInventory,
  getProductInventoryById,
  updateProductInventory,
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
} // delete and update

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

productRouter.patch("/inventory/:id", async (req, res, next) => {
  try {
    const { id, productQuantity } = req.body;

    const updatedProductInventory = {
      id,
      productQuantity,
    };

    const productInventory = await updateProductInventory(
      req.params.id,
      updatedProductInventory
    );
    res.status(303).send({ productInventory });
  } catch (error) {
    next(error);
  }
});

productRouter.delete("/inventory/:id", async (req, res, next) => {
  try {
    const productInventory = await deleteProductInventory(req.params.id);
    res.delete(productInventory);
  } catch (error) {
    next(error);
  }
});
