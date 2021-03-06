const express = require("express");
const paymentDetailsRouter = express.Router();
const { PaymentDetails } = require("../db");
const {
  updatePaymentDetails,
  deletePaymentDetails,
} = require("../db/models/payment_details");

module.exports = paymentDetailsRouter;

paymentDetailsRouter.get("/", async (req, res, next) => {
  try {
    const paymentDetails = await PaymentDetails.getAllPaymentDetails();
    console.log("your payment details", paymentDetails);
    res.send({ paymentDetails });
  } catch (error) {
    next(error);
  }
});

paymentDetailsRouter.get("/:id", async (req, res, next) => {
  try {
    const paymentDetails = await PaymentDetails.getPaymentDetailsById(
      req.params.id
    );
    res.send(paymentDetails);
  } catch (error) {
    next(error);
  }
});

paymentDetailsRouter.post("/", async (req, res, next) => {
  try {
    const { amount, provider, status } = req.body;
    const paymentDetails = await PaymentDetails.createPaymentDetails({
      amount,
      provider,
      status,
    });
    res.send({ paymentDetails });
  } catch (error) {
    next(error);
  }
});

paymentDetailsRouter.patch("/:id", async (req, res, next) => {
  try {
    const { amount, provider, status } = req.body;
    const payment = await PaymentDetails.updatePaymentDetails({
      id: req.params.id,
      amount,
      provider,
      status,
    });

    res.status(303).send({ payment });
  } catch (error) {
    next(error);
  }
});

paymentDetailsRouter.delete("/:id", async (req, res, next) => {
  try {
    const paymentDetails = await deletePaymentDetails(req.params.id);
    res.send(paymentDetails);
  } catch (error) {
    next(error);
  }
});
