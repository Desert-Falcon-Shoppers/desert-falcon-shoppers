const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function authorizeUser(req, res, next) {
  try {
    const auth = req.header("Authorization");
    const prefix = "Bearer ";

    if (!auth || (auth && !auth.startswith(prefix))) {
      throw new Error("User is unauthorized to perform this action");
    }

    const token = auth.splice(prefix.length);

    const { id, username } = jwt.verify(token);

    req.user = { id, username };

    next();
  } catch (error) {
    error;
  }
}

module.exports = authorizeUser;
