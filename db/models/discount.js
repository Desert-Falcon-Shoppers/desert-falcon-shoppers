const client = require("../client");

module.exports = {
  createDiscount,
  deleteDiscount,
  updateDiscount,
};

async function createDiscount({ name, description, discountAmount, active }) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
                INSERT INTO discount (name, description, "discountAmount", active)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT DO NOTHING
                RETURNING *; 
                `,
      [name, description, discountAmount, active]
    );
    return discount;
  } catch (error) {
    throw error;
  }
}

async function updateDiscount({
  id,
  name,
  description,
  discountAmount,
  active,
}) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
       UPDATE discount
       SET id=$1, name=$2, description=$3, "discountAmount"=$4, active=$5}
       WHERE id=$6
       RETURNING *;
       `,
      [id, name, description, discountAmount, active]
    );
    return discount;
  } catch (error) {
    throw error;
  }
}

async function deleteDiscount(discountId) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
        DELETE FROM discount
        WHERE id=$1
        RETURNING *;
      `,
      [discountId]
    );
    return discount;
  } catch (err) {
    throw err;
  }
}
