const express = require("express");
const productRouter = express.Router();
const { Product, ProductInventory, ProductCategory } = require("../db");

authorizeUser = require("./auth");
module.exports = productRouter;

productRouter.get("/", async (req, res, next) => {
  try {
    const products = await Product.getAllProducts();
    res.send({ products });
  } catch (error) {
    next(error);
  }
});

productRouter.get("/category", async (req, res, next) => {
  try {
    // Needs some work
    const product = await ProductCategory.getAllProductsByCategory();
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
    const {
      name,
      description,
      imageUrl,
      inventoryId,
      categoryId,
      discountId,
      price,
    } = req.body;

    const product = await Product.createProducts({
      name,
      description,
      imageUrl,
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
    const { productQuantity, brands, size, colors } = req.body;

    const inventory = await ProductInventory.createProductInventory({
      productQuantity,
      brands,
      size,
      colors,
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

productRouter.get("/inventory/:id", async (req, res, next) => {
  try {
    const productInventory = await ProductInventory.getProductInventoryById(
      req.params.id
    );
    res.send(productInventory);
  } catch (error) {
    next(error);
  }
});

productRouter.patch("/:id", async (req, res, next) => {
  try {
    const {
      name,
      description,
      imageUrl,
      inventoryId,
      categoryId,
      discountId,
      price,
    } = req.body;

    const product = await Product.updateProduct({
      id: req.params.id,
      name,
      description,
      imageUrl,
      inventoryId,
      categoryId,
      discountId,
      price,
    });

    res.send(product);
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

productRouter.patch("/inventory/:id", async (req, res, next) => {
  try {
    const { productQuantity, brands, size, colors } = req.body;

    const productInventory = await ProductInventory.updateProductInventory({
      id: req.params.id,
      productQuantity,
      brands,
      size,
      colors,
    });

    res.status(303).send({ productInventory });
  } catch (error) {
    next(error);
  }
});
