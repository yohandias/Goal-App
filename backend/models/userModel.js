const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter the first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter the last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
