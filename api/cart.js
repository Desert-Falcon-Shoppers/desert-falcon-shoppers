const express = require("express");
const cartRouter = express.Router();

const { CartItems } = require("../db");
const { createCartItems } = require("../db/models/cart_items");

module.exports = cartRouter;

cartRouter.get("/", async (req, res, next) => {
  try {
    const cartItems = await CartItems.getAllCartItems();
    res.send({ cartItems });
  } catch (error) {
    next(error);
  }
});

cartRouter.post("/", async (req, res, next) => {
  try {
    const { sessionId, productId, quantity } = req.body;

    const cartItems = await CartItems.createCartItems({
      sessionId,
      productId,
      quantity,
    });
    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});

cartRouter.get("/:id", async (req, res, next) => {
  try {
    const cartItems = await CartItems.getCartItemsById(req.params.id);
    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});
