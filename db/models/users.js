// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt = require('bcrypt');

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUser,
  getUserById,
  getUserByUsername,
  deleteUser,
  getAddressByUserId,
  getPaymentByUser,
};

async function createUser({
  username,
  password,
  firstName,
  lastName,
  email,
  phoneNumber,
}) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users (username, password, "firstName", "lastName", email, "phoneNumber")
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
      RETURNING *;
    `,
      [username, hashedPassword, firstName, lastName, email, phoneNumber]
    );

    if (!user) {
      throw new Error(
        'Username already exists, please choose a different username'
      );
    }

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      delete user.password;
      return user;
    } else {
      throw new Error('Username and password combination does not match!');
    }
  } catch (err) {
    throw err;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE username=$1;
      `,
      [username]
    );

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
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

    delete user.password;

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
      SELECT id, username, "firstName", "lastName", "phoneNumber" FROM users; 
    `);
    return users;
  } catch (error) {
    throw error;
  }
}

async function getAddressByUserId(userId) {
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
