const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("admin", UserSchema);

module.exports = UserModel;
