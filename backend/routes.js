import express from "express";
import {
  AllProducts,
  CreateProduct,
  SearchProduct,
  DeleteProduct,
  EditProduct
} from "./controllers/productController.js";

const router = express.Router();

router.get("/", AllProducts);
router.post("/", CreateProduct);
router.get("/search", SearchProduct);
router.delete("/:id", DeleteProduct);
router.patch("/:id", EditProduct)

export default router;
