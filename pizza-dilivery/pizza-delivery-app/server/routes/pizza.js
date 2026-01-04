const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { name: "Margherita", price: 199 },
    { name: "Farmhouse", price: 299 },
    { name: "Peppy Paneer", price: 349 }
  ]);
});

module.exports = router;
