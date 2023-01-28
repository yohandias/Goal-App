const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

// Call DB connection
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Call Routes
const goal = require("./routes/goalRoutes");

//@desc Routes goes here
app.use("/api/goals", goal);

app.use(errorHandler);

app.listen(port, () => console.log(`Server runs on port:${port}`));
