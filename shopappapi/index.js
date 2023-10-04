const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const ordersRoute = require("./routes/payment");
const verifyRoute = require("./routes/payment");



const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection succesfull"))
  .catch((err) => console.log(err));

app.use(cors(
  {
    origin:[""],
    methods:["POST","GET"],
    credentails:true
  }
));
app.use(express.json());
//   app.get("/api/test", () => console.log("test is successfull"));
app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.post("/order",ordersRoute.orders);
app.post("/verify",verifyRoute.verify);


app.listen(process.env.PORT || 5000, () => {
  console.log("back server running");
});
