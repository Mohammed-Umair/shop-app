const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthrization,
  verifyTokenAndAdmin,
} = require("./verifyToekn");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update PORDUCT
router.put("/:id", verifyTokenAndAuthrization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PORDUCT

router.delete("/:id", verifyTokenAndAuthrization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json("Cart Has been Deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET User Cart

router.get("/find/:userId", verifyTokenAndAuthrization,async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.userId});

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET All PRODUCT

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts= await Cart.find()
    res.status(200).json(carts);

  } catch (err) {
    res.status(500).json(err);
    
  }
});



module.exports = router;
