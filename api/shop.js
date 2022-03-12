const express = require("express");
const shopRouter = express.Router();

const { ShopSession } = require("../db");

const { deleteShopSession } = require("../db/models/product");
module.exports = shopRouter;

shopRouter.get("/", async (req, res, next) => {
  try {
    const shopSession = await ShopSession.getAllShoppingSessions();
    res.send(shopSession);
  } catch (error) {
    next(error);
  }
});

shopRouter.post("/", async (req, res, next) => {
  try {
    const { userId } = req.body;
    const shopSession = await ShopSession.createShopSession({ userId });
    res.send({ shopSession });
  } catch (error) {
    next(error);
  }
});

// since "checkout" is a defined value
// we need to list it BEFORE any wildcards
// that might override that defined value
shopRouter.get("/:id/checkout", async (req, res, next) => {
  try {
    const checkoutCart = await ShopSession.buildCheckoutCart(req.params.id);
    res.send(checkoutCart);
  } catch (err) {
    next(err);
  }
});

shopRouter.get("/:id", async (req, res, next) => {
  try {
    const shopSession = await ShopSession.getCartByUserId(req.params.id);
    res.send(shopSession);
  } catch (error) {
    next(error);
  }
});

shopRouter.patch("/:id", async (req, res, next) => {
  try {
    const { userId } = req.body;

    const shopSession = await ShopSession.updateShopSession({
      id: req.params.id,
      userId,
    });
    res.status(303).send({ shopSession });
  } catch (err) {
    next(err);
  }
});

shopRouter.delete("/:id", async (req, res, next) => {
  try {
    const shopSession = await ShopSession.deleteShopSession(req.params.id);
    res.send(shopSession);
  } catch (error) {
    next(error);
  }
});
