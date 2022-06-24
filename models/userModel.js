const mongoose = require("mongoose");

// create an schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  type: String,
});

var UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
