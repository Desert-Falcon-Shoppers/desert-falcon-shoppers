const express = require("express");
const usersRouter = express.Router();
const {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  getAddressByUser,
  getPaymentByUser,
  getAllUsers,
} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
authorizeUser = require("./auth");
module.exports = usersRouter;

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (password.length < 8) {
      throw new Error("Password length must be 8 characters");
    }

    const user = await createUser({ username, password });
    res.send({ user });
  } catch (error) {
    next(err);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await getUser({ username, password });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET
    );

    res.send({ token });
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user", async (req, res, next) => {
  try {
    const user = await getUserById(req.user.id);
    res.send(user);
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user/address", async (req, res, next) => {
  try {
    const address = await getAddressByUser({
      username: req.params.username,
    });

    res.send(address);
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user/payment", async (req, res, next) => {
  try {
    const payment = await getPaymentByUser({
      username: req.params.username,
    });

    res.send(payment);
  } catch (error) {
    next(err);
  }
});

usersRouter.delete("/userid", async (req, res, next) => {
  try {
    const user = await deleteUser(req.user.id);
    res.delete(user);
  } catch (error) {
    next(err);
  }
});
