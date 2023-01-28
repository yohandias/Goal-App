const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      require: [true, "Please enter the text filed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
