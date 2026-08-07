import express from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Get All Products & Create Product
router.route("/")
  .get(getProducts)
  .post(createProduct);

// Get Single Product, Update & Delete
router.route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;