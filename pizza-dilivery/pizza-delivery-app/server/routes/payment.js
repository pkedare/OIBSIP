const Razorpay = require("razorpay");
const router = require("express").Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_dummy",
  key_secret: "dummy_secret",
});

router.post("/order", async (req, res) => {
  res.json({
    success: true,
    message: "Dummy payment successful",
  });
});

module.exports = router;
