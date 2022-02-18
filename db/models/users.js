// grab our db client connection to use with our adapters
const client = require("../client");

const bcrypt = require("bcrypt");

module.exports = {
  getAllUsers,
  createUser,
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
    const saltRounds = 50;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users (username, password, firstName, lastName, email, phoneNumber)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT DO NOTHING
      RETURNING *;
    `,
      [username, hashedPassword, firstName, lastName, email, phoneNumber]
    );

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
    SELECT username FROM users; 
    `);
    return [users];
  } catch (error) {
    throw error;
  }
}
