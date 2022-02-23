const express = require("express");
const cartRouter = express.Router();
const { cart } = require("../db");

module.exports = {
  cartRouter,
};

cartRouter.get("/", async (req, res, next) => {
  try {
    const cartItems = await cart.getAllItems();
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});
