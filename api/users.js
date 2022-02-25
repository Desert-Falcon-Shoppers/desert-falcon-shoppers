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
// user all user payments
usersRouter.get('/userpayments', async (req, res, next) => {
  try {
    const userPayments = await UserPayment.getAllUserPayments()
    res.send({ userPayments })
  } catch (error) {
    next(error)
  }
})
//user all user addresses
usersRouter.get('/useraddress', async (req, res, next) => {
  try {
    const userAddress = await UserAddress.getAllUserAddresses()
    res.send({ userAddress })
  } catch (error) {
    next(error)
  }
})

//user address by id
usersRouter.get('/useraddress/:id', async (req, res, next) => {
  try {
    const userAdress = await UserAddress.getUserAddressById(req.params.id)
    res.send(userAdress)
  } catch (error) {
    next(error)
  }
})
//user payment by id
usersRouter.get("/userpayment/:id", async (req, res, next) => {
  try {
    const userPayment = await UserPayment.getUserPaymentById(req.params.id)
    res.send(userPayment)
  } catch (error) {
    next(error)
  }
})

//update payment by id
usersRouter.patch("/userpayment/:id", async (req, res, next) => {
  try {
    const { id, userId, paymentType, provider, accountNo, expiry } = req.body
    const updateUserPayment = {
      id,
      userId,
      paymentType,
      provider,
      accountNo,
      expiry
    }
    const userPayment = await updateUserPayment(req.params.id, updateUserPayment)
    res.status(303).send(userPayment)
    return updatePayment
  } catch (error) {
    next(error)
  }
})

//update user address by id
usersRouter.patch("/useraddress/:id", async (req, res, next) => {
  try {
    const { id, userId, addressLine1, addressLine2, city, state, country, postalCode, phone } = req.body
    const updateUserAddress = {
      id,
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone
    }
    const userAddress = await updateUserAddress(req.params.id, updateUserAddress)
    res.status(303).send(userAddress)
    return updatePayment
  } catch (error) {
    next(error)
  }
})


// register a new user
usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, phoneNumber } =
      req.body;
    console.log("your username is", username)
    console.log("your password is", password)
    if (password.length < 8) {
      throw new Error("Password length must be 8 characters");
    }
    console.log("your password", password)
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

    res.send({ token });
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
    const address = await User.getAddressByUser(req.params.id);
    res.send(address);
  } catch (error) {
    next(error);
  }
});

// get payment by username
usersRouter.get("/:username/payment", async (req, res, next) => {
  try {
    const payment = await getPaymentByUser({
      username: req.params.username,
    });

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

    const updateFields = {
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    const user = await updateUser(req.params.id, updateFields);

    res.status(303).send({ user });
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
    const userAddress = await UserAddress.deleteUserAddress(req.params.id)
    res.send(userAddress)
  } catch (error) {
    next(error)
  }
})

//delete a user payment by id
usersRouter.delete("/userpayment/:id", async (req, res, next) => {
  try {
    const userPayment = await UserPayment.deleteUserPayment(req.params.id)
    res.send(userPayment)
  } catch (error) {
    next(error)
  }
})

