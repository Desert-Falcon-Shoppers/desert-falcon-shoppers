const express = require("express")
const shopRouter = express.Router();

const { ShopSession } = require("../db")
module.exports = shopRouter


shopRouter.get("/", async (req, res, next) => {
    try {
        const shopSession = await ShopSession.getAllShoppingSessions()
        res.send(shopSession)
    } catch (error) {
        next(error)
    }
})

shopRouter.post("/", async (req, res, next) => {
  try {
    const { userId, total } = req.body;
    const shopSession = await ShopSession.createShopSession({ userId, total });
    res.send({ shopSession });
  } catch (error) {
    next(error);
  }
});

