import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

console.log("MONGO_URI =", process.env.MONGO_URI);

// MongoDB Connect
connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Kapile Jewellers Backend Running...");
});


// User Routes
app.use("/api/users", userRoutes);


// Product Routes
app.use("/api/products", productRoutes);


// Invalid Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
  });
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`✅ Server Running on Port ${PORT}`);
});