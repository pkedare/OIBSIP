const express = require("express");
const Pizza = require("../module/pizza");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Pizza.find());
});

router.post("/custom", auth, async (req, res) => {
  const pizza = await Pizza.create(req.body);
  res.json(pizza);
});

module.exports = router;
