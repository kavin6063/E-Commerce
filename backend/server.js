import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = 5000;

app.use(cors());

connectDB();

// app.use(express.json());

app.get("/", (req, res, next) => {
  console.log("Home Page");
  res.send("Home Page");
  next();
});

app.get("/users", auth, (req, res) => {
  console.log("User Page");
  res.send("User Page");
});

function auth(req, res, next) {
  console.log("Auth ");
  next();
}
function log(req, res, next) {
  console.log("LOG");
  next();
}
app.use("/api/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
