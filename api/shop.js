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
    const { userId, total } = req.body;
    const shopSession = await ShopSession.createShopSession({ userId, total });
    res.send({ shopSession });
  } catch (error) {
    next(error);
  }
});

shopRouter.get("/:id", async (req, res, next) => {
  try {
    const shopSession = await ShopSession.getShopSessionById(req.params.id);
    res.send(shopSession);
  } catch (error) {
    next(error);
  }
});

shopRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id, userId, total } = req.body;
    const updatedShop = { id, userId, total };
    const shop = await ShopSession.updateShopSession(
      req.params.id,
      updatedShop
    );
    res.status(303).send({ shop });
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
