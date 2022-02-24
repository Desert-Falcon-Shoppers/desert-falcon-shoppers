module.exports = {
  // add each model to your exports object here
  // so that you can use them in your express server api routers
  // for example, create a users.js file for a User model
  // and User: require('./user') here
  User: require("./users"),
  Product: require("./product"),
  OrderItems: require("./order_items"),
  OrderDetails: require("./order_details"),
  PaymentDetails: require("./payment_details"),
  ProductCategory: require("./product_category"),
  ProductInventory: require("./product_inventory"),
  UserAddress: require("./user_address"),
  UserPayment: require("./user_payment"),
  Discount: require("./discount"),
  CartItems: require("./cart_items"),
  ShopSession: require("./shop_session"),
};

// then, in your API, you'll require the appropriate model
// and use its database connectors
// ie User.getUserById(), where user.js had a module.exports
// that looked like this: module.exports = { getUserById, ... }
