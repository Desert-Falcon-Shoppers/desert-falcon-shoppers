const express = require("express")
const discountRouter = express.Router()
const { Discount } = require("../db")

module.exports = discountRouter

discountRouter.get("/", async (req, res, next) => {
    try {
        const discounts = await Discount.getAllDiscounts()
        res.send(discounts)
    } catch (error) {
        next(error)
    }

})
// ask about why we cant post data it comes back as
discountRouter.post("/", async (req, res, next) => {
    try {
        const { name, description, discountAmount, active } = req.body
        const discounts = await Discount.createDiscounts({
            name,
            description,
            discountAmount,
            active
        });

        res.send({ discounts })
    } catch (error) {
        next(error)
    }
})
