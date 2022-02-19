const express = require("express");
const usersRouter = express.Router();
const { createUser, getAllUsers } = require("../db");
//ADD const jwt = require("jsonwebtoken")
//ADD const { JWT_SECRET } = process.env
//ADD authorizeUser = require("./auth")
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
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user", async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user/address", async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
});

usersRouter.get("/user/payment", async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
});

usersRouter.delete("/userid", async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
});
