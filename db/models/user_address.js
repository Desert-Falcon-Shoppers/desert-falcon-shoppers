const client = require("../client");

module.exports = {
  createUserAddress,
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
