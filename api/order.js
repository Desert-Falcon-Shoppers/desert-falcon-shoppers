const express = require("express");
const orderRouter = express.Router();
const { OrderDetails } = require("../db");
const { OrderItems } = require("../db");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = orderRouter;

orderRouter.get("/details", async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.getAllOrderDetails();
    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/items", async (req, res, next) => {
  try {
    const orderItems = await OrderItems.getAllOrderItems();
    res.send(orderItems);
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/items/:id", async (req, res, next) => {
  try {
    const orderItems = await OrderItems.getOrderItemsById(req.params.id);
    res.send(orderItems);
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/details/:id", async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.getOrderDetailsById(req.params.id);
    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

orderRouter.post("/items", async (req, res, next) => {
  try {
    const { productId, orderId, quantity } = req.body;
    const order = await OrderItems.createOrderItems({
      productId,
      orderId,
      quantity,
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

orderRouter.post("/details", async (req, res, next) => {
  try {
    const { paymentId, userId, discount, total } = req.body;
    const order = await OrderDetails.createOrderDetails({
      paymentId,
      userId,
      discount,
      total,
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/items/:id", async (req, res, next) => {
  try {
    const { productId, orderId, quantity } = req.body;

    const orderItems = await OrderItems.updateOrderItems({
      id: req.params.id,
      productId,
      orderId,
      quantity,
    });

    res.send(orderItems);
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/details/:id", async (req, res, next) => {
  try {
    const { paymentId, userId, discount, total } = req.body;

    const orderDetails = await OrderDetails.updateOrderDetails({
      id: req.params.id,
      paymentId,
      userId,
      discount,
      total,
    });

    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

orderRouter.delete("/items/:id", async (req, res, next) => {
  try {
    const order = await OrderItems.deleteOrderItem(req.params.id);
    res.send(order);
  } catch (error) {
    next(error);
  }
});

orderRouter.delete("/details/:id", async (req, res, next) => {
  try {
    const order = await OrderDetails.deleteOrderDetails(req.params.id);
    res.send(order);
  } catch (error) {
    next(error);
  }
});
