const client = require("../client");

module.exports = {
  createDiscount,
};

async function createDiscount({ name, description, discountamount, active }) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
                INSERT INTO discount (name, description, discountamount, active)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
                `,
      [name, description, discountamount, active]
    );
    return discount;
  } catch (error) {
    throw error;
  }
}
