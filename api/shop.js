const express = require("express");
const shopRouter = express.Router();

const { ShopSession } = require("../db");
module.exports = shopRouter;

shopRouter.get("/:id", async (req, res, next) => {
  try {
    const shopSession = await ShopSession.getShopSessionById(req.params.id);
    res.send(shopSession);
  } catch (error) {
    next(error);
  }
});
