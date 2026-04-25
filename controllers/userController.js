const userModel = require("../models/userModel");

const addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "All fields required" });
  }

  userModel.createUser({ name, email }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({
      message: "User added successfully",
      userId: result.insertId,
    });
  });
};

module.exports = {
  addUser,
};