const client = require("../client");

module.exports = {
  createUserAddress,
  getAllUserAddresses,
  getUserAddressById,
  updateUserAddress,
  deleteUserAddress
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
      [userid, addressLine1, addressLine2, city, state, country, postalCode, phone,
      ]
    );
    return userAddress;
  } catch (error) {
    throw error;
  }
}

async function getAllUserAddresses() {
  try {
    const {
      rows: userAddress
    } = await client.query(`
        SELECT * FROM user_address;
     `)
    return userAddress
  } catch (error) {
    throw error
  }
}

async function getUserAddressById(userAddressId) {
  try {
    const {
      rows: [userAddress]
    } = await client.query(`
      SELECT * FROM user_address
      WHERE id=$1;
    `, [userAddressId])
    return userAddress
  } catch (error) {
    throw error
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
      rows: [updateUserAddress]
    } = await client.query(`
      UPDATE user_address
      SET id=$1, userId=$2, addressLine1=$3, addressLine2=$4, city=$5, state=$6, country=$7, postalCode=$8, phone=$9
      WHERE id=$10
      RETURNING *;
    `, [id, userId, addressLine1, addressLine2, city, state, country, postalCode, phone])
    return updateUserAddress
  } catch (error) {
    throw error
  }
}

async function deleteUserAddress(userAddressId) {
  try {
    const {
      rows: [deleteUserAddress]
    } = await client.query(`
      DELETE * user_address
      WHERE id=$1
      RETURING *;
    `, [userAddressId])
    return deleteUserAddress
  } catch (error) {
    throw error
  }
}