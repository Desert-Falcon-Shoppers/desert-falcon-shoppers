const express = require("express");
const orderRouter = express.Router();
const { OrderItems } = require("../db");
const { createOrderDetails } = require("../db/models/order_details");
const { deleteProduct } = require("../db/models/product");
// const authorizeUser = require("./auth");
authorizeUser = require("./auth");
module.exports = orderRouter;

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

orderRouter.get("/:id", async (req, res, next) => {
  try {
    const orderDetails = await createOrderDetails();
    res.send(orderDetails);
  } catch (error) {
    next(error);
  }
});

orderRouter.delete("/:productId", async (req, res, next) => {
  try {
    const order = await OrderItems.deleteOrderItem(req.params.orderId);
    res.send(order);
  } catch (error) {
    next(error);
  }
});
