const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "String is required"
  },

  password: {
    type: String,
    trim: true,
    required: true,
    validate: [({length}) => length >= 6, "Password must be at least 6 characters"]
  },

  email: {
    type: String,
    unique: true,
    match: [`/.+\@.+\..+/`, "Please enter a valid email"]
  },

  userCreated: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
