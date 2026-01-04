const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: String,
  base: String,
  sauce: String,
  cheese: String,
  veggies: [String],
  price: Number
});

module.exports = mongoose.model("Pizza", pizzaSchema);
