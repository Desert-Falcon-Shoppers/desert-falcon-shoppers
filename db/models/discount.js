const client = require("../client");

module.exports = {
  createDiscounts,
  getAllDiscounts,
};

async function createDiscounts({ name, description, discountAmount, active }) {
  try {
    const {
      rows: [discounts],
    } = await client.query(
      `
                INSERT INTO discount (name, description, "discountAmount", active)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT DO NOTHING
                RETURNING *;
                `,
      [name, description, discountAmount, active]
    );
    return discounts;
  } catch (error) {
    throw error;
  }
}

async function getAllDiscounts() {
  try {
    const {
      rows: discounts
    } = await client.query(`
      SELECT * FROM discount
    `)
    return discounts
  } catch (error) {
    throw error
  }
}
