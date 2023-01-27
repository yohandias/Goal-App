const asyncHandler = require("express-async-handler");

//@desc Get all goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Find all Goals" });
});

//@desc Create goal
//@route POST /api/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter the text filed");
  }

  res.status(200).json({ message: `Create Goal Route ${req.body.text}` });
});

//@desc Update goal
//@route PUT /api/goals
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal Route ${req.params.id}` });
});

//@desc Delete goal
//@route DELETE /api/goals
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal Route ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
