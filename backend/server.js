import express from "express";
import products from "./data/products.js"; // Correct path to products.js
import cors from "cors";
const app = express();
const port = 5000;

// Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON bodies (for POST and PUT requests)
app.use(express.json());

// Default route to show all product data in JSON
app.get("/", (req, res) => {
  res.json(products); // Return the products data as JSON
});

let productList = [...products]; // Initialize with the product list

// GET all products
app.get("/api/products", (req, res) => {
  res.json(productList);
});

// GET a single product by ID
app.get("/api/products/:id", (req, res) => {
  const product = productList.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// POST - Add a new product
app.post("/api/products", (req, res) => {
  const newProduct = {
    _id: String(productList.length + 1), // Generate a new ID
    ...req.body, // Spread incoming data
  };
  productList.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT - Update a product by ID
app.put("/api/products/:id", (req, res) => {
  const productIndex = productList.findIndex((p) => p._id === req.params.id);
  if (productIndex !== -1) {
    const updatedProduct = { ...productList[productIndex], ...req.body };
    productList[productIndex] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE - Remove a product by ID
app.delete("/api/products/:id", (req, res) => {
  const productIndex = productList.findIndex((p) => p._id === req.params.id);
  if (productIndex !== -1) {
    productList.splice(productIndex, 1);
    res.json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
