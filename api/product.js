const express = require("express");
const productRouter = express.Router();
const { Product, ProductInventory, ProductCategory } = require("../db");
const { updateProduct, deleteProduct } = require("../db/models/product");

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

productRouter.get("/category", async (req, res, next) => {
  try {
    // Needs some work
    const product = await ProductCategory.getAllProductsByCategory();
    res.send(product);
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

productRouter.post("/inventory", async (req, res, next) => {
  try {
    const { productQuantity } = req.body;

    const inventory = await ProductInventory.createProductInventory({
      productQuantity,
    });

    res.send({ inventory });
  } catch (error) {
    next(error);
  }
});

productRouter.post("/category", async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const category = await ProductCategory.createProductCategory({
      name,
      description,
    });

    res.send({ category });
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

    const product = await Product.updateProduct(req.params.id, updatedProduct);
    res.status(303).send({ product });
  } catch (error) {
    next(error);
  }
});

productRouter.delete("/:id", async (req, res, next) => {
  try {
    const product = await deleteProduct(req.params.id);
    res.delete(product);
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

    const productInventory = await Product.updateProductInventory(
      req.params.id,
      updatedProductInventory
    );
    res.status(303).send({ productInventory });
  } catch (error) {
    next(error);
  }
});
