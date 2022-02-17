const client = require('./client');
const models = require('./models');

module.exports = {
  client,
  ...models,
};

console.log("testing")
console.log("error test")