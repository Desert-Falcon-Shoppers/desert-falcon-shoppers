const express = require("express");
const orderRouter = express.Router();
const { OrderItems } = require("../db");
const { createOrderDetails } = require("../db/models/order_details");
<<<<<<< HEAD
const authorizeUser = require("./auth");
module.exports = orderRouter;

orderRouter.post("/", authorizeUser, async (req, res, next) => {
  try {
    const { productId, orderId, quantity, price } = req.body;
    const order = await Order.createOrderItems({
=======
const { deleteProduct } = require("../db/models/product");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = orderRouter;

orderRouter.post("/", async (req, res, next) => {
  try {
    const { productId, orderId, quantity, price } = req.body;
    const order = await OrderItems.createOrderItems({
>>>>>>> 2844493cecd0ee0b19c56d6f42ef5f84d6d75045
      productId,
      orderId,
      quantity,
      price,
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
orderRouter.get("/:id", authorizeUser, async (req, res, next) => {
=======
orderRouter.get("/:id", async (req, res, next) => {
>>>>>>> 2844493cecd0ee0b19c56d6f42ef5f84d6d75045
  try {
    const orderDetails = await createOrderDetails();
    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
orderRouter.delete("/:orderId", authorizeUser, async (req, res, next) => {
=======
orderRouter.delete("/:productId", async (req, res, next) => {
>>>>>>> 2844493cecd0ee0b19c56d6f42ef5f84d6d75045
  try {
    const order = await OrderItems.deleteOrderItem(req.params.orderId);
    res.send(order);
  } catch (error) {
    next(error);
  }
});
