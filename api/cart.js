const express = require("express");
const cartRouter = express.Router();
const { CartItems, ShopSession } = require("../db");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = cartRouter;

cartRouter.get("/", async (req, res, next) => {
  try {
    const cartItems = await CartItems.getAllCartItems();
    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});

cartRouter.post("/", async (req, res, next) => {
  try {
    const { sessionId, productId, quantity, price } = req.body;

    const cartItems = await CartItems.createCartItems({
      sessionId,
      productId,
      quantity,
      price,
    });
    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});

cartRouter.get("/:id", async (req, res, next) => {
  try {
    // first, we need to leverage this req.params.id
    // to grab a shop_session
    // next, we need to get all cart_item records associated with that
    // shop_session.id
    // finally, we need to build an object that looks like this

    /* 
    const cartItemRecords = [
        { id: 1, shop_sessionId: 1, productId: 1, quantity: 1 },
        { id: 2, shop_sessionId: 1, productId: 2, quantity: 4 }
    ]

    const cartItemsByShopSessionId = {
        cartId: shop_session.id,
        items: [
            { id: 1, productId: 1, quantity: 1 }, // this is a cart_item record
            { id: 2, productId: 2, quantity: 4 }  // this is also a cart_item record
        ]
    }
    */

    const cart = await ShopSession.buildCart(req.params.id);
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

cartRouter.patch("/items/:id", async (req, res, next) => {
  try {
    const { sessionId, productId, quantity, price } = req.body;
    const cartItems = await CartItems.updateCartItems({
      id: req.params.id,
      sessionId,
      productId,
      quantity,
      price,
    });
    res.status(303).send(cartItems);
  } catch (error) {
    next(error);
  }
});

cartRouter.delete("/items/:id", async (req, res, next) => {
  try {
    const cart = await CartItems.deleteCartItems(req.params.id);
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
