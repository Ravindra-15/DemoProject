const db = require("../config/db");

const createUser = (user, callback) => {
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [user.name, user.email], callback);
};

module.exports = {
  createUser,
};