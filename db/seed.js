const client = require("./client");
const { buildTables } = require("./seedData");

buildTables()
  //  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
