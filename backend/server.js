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

//Goal Routes goes here
app.use("/api/goals", require("./routes/goalRoutes"));

//User Routes goes here
app.use("/api/users", require("./routes/userRoutes"));

//Call custom error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server runs on port:${port}`));
