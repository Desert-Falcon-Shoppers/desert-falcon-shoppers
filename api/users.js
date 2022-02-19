const express = require('express');
const usersRouter = express.Router();
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
authorizeUser = require('./auth');
module.exports = usersRouter;

// get a list of currently active customer for KPI overview
usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.send({ users });
  } catch (err) {
    next(err);
  }
});

usersRouter.post('/register', async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, phoneNumber } =
      req.body;

    if (password.length < 8) {
      throw new err('Password length must be 8 characters');
    }

    const user = await User.createUser({
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    console.log('created user!', user);

    res.status(201).send({ user });
  } catch (err) {
    next(err);
  }
});

usersRouter.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.getUser({ username, password });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET
    );

    res.send({ token });
  } catch (err) {
    next(err);
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

usersRouter.get('/:id/address', async (req, res, next) => {
  try {
    const address = await User.getAddressByUserId(req.params.id);
    res.send(address);
  } catch (err) {
    next(err);
  }
});

usersRouter.get('/:username/payment', async (req, res, next) => {
  try {
    const payment = await getPaymentByUser({
      username: req.params.username,
    });

    res.send(payment);
  } catch (err) {
    next(err);
  }
});

usersRouter.delete('/:id', async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.delete(user);
  } catch (err) {
    next(err);
  }
});
