const client = require("../client");

module.exports = {
  createUserAddress,
  getAllUserAddresses,
  getUserAddressById,
  updateUserAddress,
  deleteUserAddress,
};

async function createUserAddress({
  userid,
  addressLine1,
  addressLine2,
  city,
  state,
  country,
  postalCode,
  phone,
}) {
  try {
    const {
      rows: [userAddress],
    } = await client.query(
      `
           INSERT INTO user_address ("userId", "addressLine1", "addressLine2", city, state, country, "postalCode", phone)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
           RETURNING *;
           `,
      [
        userid,
        addressLine1,
        addressLine2,
        city,
        state,
        country,
        postalCode,
        phone,
      ]
    );
    return userAddress;
  } catch (error) {
    throw error;
  }
}

async function getAllUserAddresses() {
  try {
    const { rows: userAddress } = await client.query(`
        SELECT * FROM user_address;
     `);
    return userAddress;
  } catch (error) {
    throw error;
  }
}

async function getUserAddressById(userAddressId) {
  try {
    const {
      rows: [userAddress],
    } = await client.query(
      `
      SELECT * FROM user_address
      WHERE id=$1;
    `,
      [userAddressId]
    );
    return userAddress;
  } catch (error) {
    throw error;
  }
}
async function updateUserAddress({
  id,
  userId,
  addressLine1,
  addressLine2,
  city,
  state,
  country,
  postalCode,
  phone,
}) {
  try {
    const {
      rows: [updateUserAddress],
    } = await client.query(
      `
      UPDATE user_address
      SET "userId"=$1, "addressLine1"=$2, "addressLine2"=$3, city=$4, state=$5, country=$6, "postalCode"=$7, phone=$8
      WHERE id=$9
      RETURNING *;
    `,
      [
        userId,
        addressLine1,
        addressLine2,
        city,
        state,
        country,
        postalCode,
        phone,
        id,
      ]
    );
    return updateUserAddress;
  } catch (error) {
    throw error;
  }
}

async function deleteUserAddress(userAddressId) {
  try {
    const {
      rows: [deleteUserAddress],
    } = await client.query(
      `
      DELETE FROM user_address
      WHERE id=$1
      RETURNING *;
    `,
      [userAddressId]
    );
    return deleteUserAddress;
  } catch (error) {
    throw error;
  }
}
