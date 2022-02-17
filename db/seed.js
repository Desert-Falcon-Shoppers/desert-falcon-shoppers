const client = require("./client");
const { rebuildDB } = require("./seedData");

rebuildDB()
  //  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
