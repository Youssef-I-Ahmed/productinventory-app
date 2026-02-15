require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

async function dbConnect() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
dbConnect();
const Product = require("./models/Product");
// create Port
const port = process.env.PORT || 3000;
// POST
app.post("/products", async (req, res) => {
  try {
    const {name, category, price} = req.body;
    if (!name || !category || !price) {
      return res.status(400).json({ message: "Error: Missed Data. All fields are required" });
    }
    const product = await Product.create({ name, category, price });
    console.log("Received product data:", product);

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
});
// GET
app.get("/products", async (req, res) => {
  const products = await Product.find(req.query);
  res.json({ success: true, count: products.length, data: products });
});

// Run the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});