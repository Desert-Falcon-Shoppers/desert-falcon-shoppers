const client = require("../client");

module.exports = {
  createUserAddress,
};

async function createUserAddress({
  userid,
  addressline1,
  addressline2,
  city,
  state,
  country,
  postalcode,
  telephone,
  mobile,
}) {
  try {
    const {
      rows: [userAddress],
    } = await client.query(
      `
           INSERT INTO user_address (userid, addressline1, addressline2, city, state, countr, postalcode, telephone, mobile)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
           RETURNING *;
           `,
      [
        userid,
        addressline1,
        addressline2,
        city,
        state,
        countr,
        postalcode,
        telephone,
        mobile,
      ]
    );
    return userAddress;
  } catch (error) {
    throw error;
  }
}
