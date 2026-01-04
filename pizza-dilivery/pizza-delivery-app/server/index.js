const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Pizza Delivery API is running 🚀");
});

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/pizza-delivery")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
