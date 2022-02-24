const express = require("express");
const cartRouter = express.Router();
const { cart } = require("../db");
const { deleteCartItems } = require("../db/models/cart_items");
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

cartRouter.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

cartRouter.delete("/:id", async (req, res, next) => {
  try {
    const cart = await deleteCartItems(req.params.id);
    res.send(cart);
  } catch (err) {
    next(err);
  }
});
