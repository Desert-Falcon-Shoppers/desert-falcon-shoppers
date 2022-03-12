const express = require("express");
const discountRouter = express.Router();
const { Discount } = require("../db");

module.exports = discountRouter;

discountRouter.get("/", async (req, res, next) => {
  try {
    const discounts = await Discount.getAllDiscounts();
    res.send(discounts);
  } catch (error) {
    next(error);
  }
});

// ask about why we cant post data it comes back as
discountRouter.post("/", async (req, res, next) => {
  try {
    const { name, description, discountAmount, active } = req.body;

    const discount = await Discount.createDiscounts({
      name,
      description,
      discountAmount,
      active,
    });
    res.send(discount);
  } catch (error) {
    next(error);
  }
});

discountRouter.get("/:id", async (req, res, next) => {
  try {
    const discount = await Discount.getDiscountById(req.params.id);
    res.send(discount);
  } catch (error) {
    next(error);
  }
});

discountRouter.patch("/:id", async (req, res, next) => {
  try {
    const { name, description, discountAmount, active } = req.body;

    const discount = await Discount.updateDiscount({
      id: req.params.id,
      name,
      description,
      discountAmount,
      active,
    });

    res.send(discount);
  } catch (error) {
    next(error);
  }
});

discountRouter.delete("/:id", async (req, res, next) => {
  try {
    const discount = await Discount.deleteDiscount(req.params.id);
    res.send(discount);
  } catch (err) {
    next(err);
  }
});
