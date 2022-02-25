
const express = require("express");
const productRouter = express.Router();
const { Product, ProductInventory, ProductCategory } = require("../db");

authorizeUser = require("./auth");
module.exports = productRouter;

productRouter.get("/", async (req, res, next) => {
  try {
    const product = await Product.getAllProducts();
    res.send({ product });
  } catch (error) {
    next(error);
  }
});

productRouter.get("/inventory", async (req, res, next) => {
  try {
    const productInventory = await ProductInventory.getAllProductInventory();
    res.send({ productInventory });
  } catch (error) {
    next(error);
  }
});

productRouter.post("/", async (req, res, next) => {
  try {
    const { name, inventoryId, categoryId, discountId, price } = req.body;

    const product = await Product.createProducts({
      name,
      inventoryId,
      categoryId,
      discountId,
      price,
    });

    res.send({ product });
  } catch (error) {
    next(error);
  }
});

productRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.getProductById(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// PATCH IS WORK IN PROGRESS
// CAN'T RUN CURL BECAUSE OF A SYNTAX ERROR

productRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id, name, inventoryId, categoryId, discountId, price } = req.body;

    const updatedProduct = {
      id,
      name,
      inventoryId,
      categoryId,
      discountId,
      price,
    };

    const product = await updateProduct(req.params.id, updatedProduct);
    res.status(303).send({ product });
  } catch (error) {
    next(error);
  }
});

productRouter.delete("/:id", async (req, res, next) => {
  try {
    const deleteProduct = await Product.deleteProduct(req.params.id);
    res.send(deleteProduct);
  } catch (error) {
    next(error);
  }
});

productRouter.get("/category", async (req, res, next) => {
  try {
    // Needs some work
    const product = await ProductCategory.getAllProductsByCategory();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

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
