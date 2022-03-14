const express = require("express");
const usersRouter = express.Router();
const { User, UserPayment, UserAddress } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const authorizeUser = require("./auth");
module.exports = usersRouter;

// get a list of currently active customer for KPI overview
usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.send({ users });
  } catch (error) {
    next(error);
  }
});

// me object

usersRouter.get("/me", authorizeUser, async (req, res, next) => {
  try {
    const user = await User.getUserById(req.user.id);
    res.send({ user });
  } catch (err) {
    next(err);
  }
});

// user all user payments
usersRouter.get("/userpayment", async (req, res, next) => {
  try {
    const userPayments = await UserPayment.getAllUserPayments();
    res.send({ userPayments });
  } catch (error) {
    next(error);
  }
});
//user all user addresses
usersRouter.get("/useraddress", async (req, res, next) => {
  try {
    const userAddress = await UserAddress.getAllUserAddresses();
    res.send({ userAddress });
  } catch (error) {
    next(error);
  }
});

//user address by id
usersRouter.get("/useraddress/:id", async (req, res, next) => {
  try {
    const userAdress = await UserAddress.getUserAddressById(req.params.id);
    res.send(userAdress);
  } catch (error) {
    next(error);
  }
});
//user payment by id
usersRouter.get("/userpayment/:id", async (req, res, next) => {
  try {
    const userPayment = await UserPayment.getUserPaymentById(req.params.id);
    res.send(userPayment);
  } catch (error) {
    next(error);
  }
});

//update payment by id
usersRouter.patch("/userpayment/:id", async (req, res, next) => {
  try {
    const { userId, paymentType, provider, accountNo, expiry } = req.body;

    const userPayment = await UserPayment.updateUserPayment({
      id: req.params.id,
      userId,
      paymentType,
      provider,
      accountNo,
      expiry,
    });
    res.status(303).send(userPayment);
    return updatePayment;
  } catch (error) {
    next(error);
  }
});

//update user address by id
usersRouter.patch("/useraddress/:id", async (req, res, next) => {
  try {
    const {
      id,
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone,
    } = req.body;

    const userAddress = await UserAddress.updateUserAddress({
      id: req.params.id,
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone,
    });
    res.status(303).send(userAddress);
    return updatePayment;
  } catch (error) {
    next(error);
  }
});

// register a new user
usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, phoneNumber } =
      req.body;
    console.log(
      "Username:",
      username,
      "First Name:",
      firstName,
      "Last Name:",
      lastName,
      "Email:",
      email,
      "Phone Number:",
      phoneNumber
    );
    if (password.length < 8) {
      throw new Error("Password length must be 8 characters");
    }
    const user = await User.createUser({
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    console.log("created user!", user);

    res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
});

// login as user
usersRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.getUser({ username, password });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET
    );

    console.log({ user });

    res.send({ token });
  } catch (error) {
    next(error);
  }
});

//create user address
usersRouter.post("/useraddress", async (req, res, next) => {
  try {
    const {
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone,
    } = req.body;
    const userAddress = await UserAddress.createUserAddress({
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone,
    });
    res.send({ userAddress });
  } catch (error) {
    next(error);
  }
});

//create user payment
usersRouter.post("/userpayment", async (req, res, next) => {
  try {
    const { userId, paymentType, provider, accountNo, expiry } = req.body;
    const userPayment = await UserPayment.createUserPayment({
      userId,
      paymentType,
      provider,
      accountNo,
      expiry,
    });
    res.send({ userPayment });
  } catch (error) {
    next(error);
  }
});

// get user by id
usersRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// get user address by id
usersRouter.get("/useraddress/:id", async (req, res, next) => {
  try {
    const address = await UserAddress.getUserAddressById(req.params.id);
    res.send(address);
  } catch (error) {
    next(error);
  }
});

// get payment by username
usersRouter.get("/username/payment", async (req, res, next) => {
  try {
    const payment = await UserPayment.getUserPaymentByUsername(req.params.id);

    res.send(payment);
  } catch (error) {
    next(error);
  }
});

//update a current user by id
usersRouter.patch("/:id", async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, phoneNumber } =
      req.body;

    const users = await User.updateUser({
      id: req.params.id,
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    res.send(users);
  } catch (error) {
    next(error);
  }
});

//delete a current user by id
usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.deleteUser(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//delete a user address by id
usersRouter.delete("/useraddress/:id", async (req, res, next) => {
  try {
    const userAddress = await UserAddress.deleteUserAddress(req.params.id);
    res.send(userAddress);
  } catch (error) {
    next(error);
  }
});

//delete a user payment by id
usersRouter.delete("/userpayment/:id", async (req, res, next) => {
  try {
    const userPayment = await UserPayment.deleteUserPayment(req.params.id);
    res.send(userPayment);
  } catch (error) {
    next(error);
  }
});
