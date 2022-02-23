const express = require("express");
const cartRouter = express.Router();
const { CartItems } = require("../db");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = cartRouter;


cartRouter.get("/", async (req, res, next) => {
    try {
        const cartItems = await CartItems.getAllCartItems()
        res.send({ cartItems })
    } catch (error) {
        next(error)
    }
})

cartRouter.post("/", async (req, res, next) => {
    try {
        const { sessionId, productId, quantity } = req.body

        const cartItems = await CartItems.createCartItems({
            sessionId,
            productId,
            quantity,
        })
        res.send(cartItems)
    } catch (error) {
        next(error)
    }
})

cartRouter.get("/:id", async (req, res, next) => {
    try {
        const cartItems = await CartItems.getCartItemsById(req.params.id)
        res.send(cartItems)
    } catch (error) {
        next(error)
    }
})

cartRouter.patch("/items/:id", async (req, res, next) => {
    try {
        const { sessionId, productId, quantity } = req.body;

        const updateCartItems = {
            sessionId,
            productId,
            quantity,
        };
        const cartItems = await updateCartItems(
            req.params.cartItemsId,
            updateCartItems
        );
        res.status(303).send({ cartItems });
    } catch (error) {
        next(error);
    }
});

cartRouter.delete("/:itemsId", async (req, res, next) => {
    try {
        const cart = await CartItems.deleteCartItems(req.params.cartItemsId);
        res.send(cart);
    } catch (error) {
        next(error);
    }
});
