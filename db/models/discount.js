const client = require("../client");

module.exports = {
  createDiscounts,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
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
    const { rows: discounts } = await client.query(`
      SELECT * FROM discount;
    `);
    return discounts;
  } catch (error) {
    throw error;
  }
}

async function getDiscountById(discountId) {
  try {
    const {
      rows: [discount],
    } = await client.query(
      `
        SELECT * FROM discount
        WHERE id=$1;
        `,
      [discountId]
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
       SET name=$1, description=$2, "discountAmount"=$3, active=$4
       WHERE id=$5
       RETURNING *;
       `,
      [name, description, discountAmount, active, id]
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
