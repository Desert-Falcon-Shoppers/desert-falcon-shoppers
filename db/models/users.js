// grab our db client connection to use with our adapters
const client = require("../client");

const bcrypt = require("bcrypt");
const res = require("express/lib/response");

module.exports = {
  getUser,
  createUser,
  getUser,
  getAllUsers,
  getUserById,
  deleteUser,
  getAddressByUser,
  getPaymentByUser,

};

async function createUser({
  username,
  password,
  firstname,
  lastname,
  email,
  phonenumber,
}) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users (username, password, firstname, lastname, email, phonenumber)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
      RETURNING *;
    `,
      [username, hashedPassword, firstname, lastname, email, phonenumber]
    );

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    const isPasswordMatch = await bcrypt.compare(password, user.Password);

    if (isPasswordMatch) {
      delete user.password;
      return user;
    } else {
      throw new Error("Username and password combination does not match!");
    }
  } catch (err) {
    throw err;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE id=$1;
      `,
      [userId]
    );
    return user;
  } catch (err) {
    throw err;
  }
}

async function deleteUser(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        DELETE FROM users
        WHERE id=$1
        RETURNING *;
      `,
      [userId]
    );
    return user;
  } catch (err) {
    throw err;
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
    SELECT username FROM users; 
    `);
    return users;
  } catch (error) {
    throw error;
  }
}

async function getAddressByUser(userId) {
  try {
    const { rows: address } = await client.query(
      `
    SELECT address FROM users 
    WHERE id=$1;
    `,
      [userId]
    );

    return address;
  } catch (error) {
    next(err);
  }
}

async function getPaymentByUser(userId) {
  try {
    const { rows: payment } = await client.query(
      `
    SELECT payment FROM users 
    WHERE id=$1;
    `,
      [userId]
    );
    return payment;
  } catch (error) {
    next(err);
  }
}
