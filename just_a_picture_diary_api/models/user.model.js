const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: Number,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
