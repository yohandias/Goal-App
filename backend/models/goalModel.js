const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "Please enter the text filed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
