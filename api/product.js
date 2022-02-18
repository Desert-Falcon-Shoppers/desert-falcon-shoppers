const express = require("express");
const productRouter = express.Router();
const {
  /* Functions of the db/product.js */
} = require("../db");
module.exports = productRouter;

productRouter.post("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});

productRouter.get("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});

productRouter.delete("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});
