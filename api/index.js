const apiRouter = require("express").Router();
const usersRouter = require("./users");
const productRouter = require("./product");
const orderRouter = require("./order");
const discountRouter = require("./discount");
const paymentDetailsRouter = require("./payment");
const cartRouter = require("./cart");

apiRouter.use("/users", usersRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/order", orderRouter);
apiRouter.use("/discount", discountRouter);
apiRouter.use("/paymentdetails", paymentDetailsRouter);
apiRouter.use("/cart", cartRouter);

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});
apiRouter.post("/hello", (req, res, next) => {
  res.send({
    message: "hello world",
  });
});

// place your routers here

module.exports = apiRouter;
