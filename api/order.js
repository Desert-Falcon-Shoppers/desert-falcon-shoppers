const express = require("express");
const orderRouter = express.Router();
const { OrderDetails } = require("../db");
const { OrderItems } = require("../db");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = orderRouter;

orderRouter.get("/", async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.getAllOrderDetails();
    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

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

orderRouter.post("/", async (req, res, next) => {
  try {
    const { productId, orderId, quantity, price } = req.body;
    const order = await OrderItems.createOrderItems({
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

orderRouter.patch("/items/:id", async (req, res, next) => {
  try {
    const { productId, orderId, quantity, price } = req.body;

    const updateOrderItems = {
      productId,
      orderId,
      quantity,
      price,
    };

    const orderItems = await OrderItems.updateOrderItems(
      req.params.orderItemsId,
      updateOrderItems
    );
    res.status(303).send({ orderItems });
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/details/:id", async (req, res, next) => {
  try {
    const { paymentId, userId, discount, total } = req.body;

    const updateOrder = {
      paymentId,
      userId,
      discount,
      total
    };

    const orderDetails = await OrderDetails.updateOrderDetails(
      req.params.id,
      updateOrder
    );
    res.status(303).send({ orderDetails });
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