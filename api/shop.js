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