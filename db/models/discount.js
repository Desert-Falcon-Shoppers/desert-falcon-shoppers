const client = require("../client");

module.exports = {
  createDiscount,
};

async function createDiscount({ name, description, discountAmount, active }) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
                INSERT INTO discount (name, description, "discountAmount", active)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
                `,
      [name, description, discountAmount, active]
    );
    return discount;
  } catch (error) {
    throw error;
  }
}
