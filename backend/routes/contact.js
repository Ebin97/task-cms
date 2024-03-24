const { validateCustomer, Customer } = require("../models/Customer");
const auth = require("../middlewares/auth");

const mongoose = require("mongoose");
const router = require("express").Router();

// create customer.
router.post("/customer", auth, async (req, res) => {
  const { error } = validateCustomer(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, address, email, phone } = req.body;

  try {
    const newCustomer = new Customer({
      name,
      address,
      email,
      phone,
      postedBy: req.user._id,
    });
    const result = await newCustomer.save();

    return res.status(201).json({ ...result._doc });
  } catch (err) {
    console.log(err);
  }
});

// fetch customer.
router.get("/mycustomers", auth, async (req, res) => {
  try {
    const myCustomers = await Customer.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "-password"
    );

    return res.status(200).json({ customers: myCustomers.reverse() });
  } catch (err) {
    console.log(err);
  }
});

// update customer.
router.put("/customer", auth, async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).json({ error: "no id specified." });
  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ error: "please enter a valid id" });

  try {
    const customer = await Customer.findOne({ _id: id });

    if (req.user._id.toString() !== customer.postedBy._id.toString())
      return res
        .status(401)
        .json({ error: "you can't edit other people customers!" });

    const updatedData = { ...req.body, id: undefined };
    const result = await Customer.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    return res.status(200).json({ ...result._doc });
  } catch (err) {
    console.log(err);
  }
});

// delete a customer.
router.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "no id specified." });

  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ error: "please enter a valid id" });
  try {
    const customer = await Customer.findOne({ _id: id });
    if (!customer) return res.status(400).json({ error: "no customer found" });

    if (req.user._id.toString() !== customer.postedBy._id.toString())
      return res
        .status(401)
        .json({ error: "you can't delete other people customers!" });

    const result = await Customer.deleteOne({ _id: id });
    const myCustomers = await Customer.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "-password"
    );

    return res
      .status(200)
      .json({ ...customer._doc, myCustomers: myCustomers.reverse() });
  } catch (err) {
    console.log(err);
  }
});

// to get a single customer.
router.get("/customer/:id", auth, async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "no id specified." });

  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ error: "please enter a valid id" });

  try {
    const customer = await Customer.findOne({ _id: id });

    return res.status(200).json({ ...customer._doc });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
