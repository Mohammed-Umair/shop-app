const Razorpay = require("razorpay");

const ROZOPAY_ID_KEY = "rzp_test_SvsBsCg2rCpsbG";
const ROZOPAY_SEC_KEY = "6L2WPwXYdsEAqyUtXkp0xZ2U";

const crypto = require("crypto");

module.exports.orders = (req, res) => {
  let instance = new Razorpay({
    key_id: ROZOPAY_ID_KEY,
    key_secret: ROZOPAY_SEC_KEY,
  });

  var options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "receipt#1",
  };
  instance.orders.create(options, (err, order) => {
    if (err) {
      return res.send({ code: 500, message: "Server Error!" });
    }
    return res.send({ code: 200, message: "order created", data: order });
  });
};
module.exports.verify = (req,res) => {
  let body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", ROZOPAY_SEC_KEY)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === req.body.response.razorpay_signature) {
    res.send({ code: 200, message: "Sign Valid" });
  }else{
    res.send({ code: 500, message: "Sign Invalid!" });

  }
};
