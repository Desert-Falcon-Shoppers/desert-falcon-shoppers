module.exports = {
  // add each model to your exports object here
  // so that you can use them in your express server api routers
  // for example, create a users.js file for a User model
  // and User: require('./user') here
  ...require("./users"),
  ...require("./product"),
  ...require("./order_items"),
  ...require("./order_details"),
  ...require("./payment_details"),
  ...require("./product_category"),
  ...require("./product_inventory"),
  ...require("./user_address"),
  ...require("./user_payment"),
  ...require("./discount"),
  ...require("./cart_items"),
};

// then, in your API, you'll require the appropriate model
// and use its database connectors
// ie User.getUserById(), where user.js had a module.exports
// that looked like this: module.exports = { getUserById, ... }
