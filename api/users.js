const express = require("express");
const usersRouter = express.Router();
const { createUser, getAllUsers } = require("../db");
//ADD const jwt = require("jsonwebtoken")
//ADD const { JWT_SECRET } = process.env
//ADD authorizeUser = require("./auth")
module.exports = usersRouter;

usersRouter.post("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});

usersRouter.get("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});

usersRouter.delete("", async (req, res, next) => {
  try {
  } catch (error) {
    throw error;
  }
});
