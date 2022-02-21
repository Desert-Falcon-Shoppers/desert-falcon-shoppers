const express = require("express");
const productRouter = express.Router();
const { Product } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
authorizeUser = require('./auth');

module.exports = productRouter;

productRouter.get("/", async (req, res, next) => {
  try {
    const product = await Product.getAllProducts()
    res.send({ product })
  } catch (error) {
    next(error)
  }
});

productRouter.post("/", async (req, res, next) => {
  try {
    const { name, inventoryId, categoryId, discountId, price } = req.body

    const product = await Product.createProducts({
      name,
      inventoryId,
      categoryId,
      discountId,
      price
    })

    res.send({ product })

  } catch (error) {
    next(error)
  }
})
