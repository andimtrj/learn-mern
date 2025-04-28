import mongoose from "mongoose";
import Product from "../models/product.model.js";

const AllProducts = async (req, res) => {
  const product = await Product.find({}).sort({ createdAt: -1 });

  try {
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const SearchProduct = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    res.status(400).json({ message: "Query is required" });
  }

  try {
    const foundProduct = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    if (foundProduct.length === 0) {
      // .length = array (0 = not found)
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ success: true, data: foundProduct });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const CreateProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
    console.log("product created");
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const EditProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if(mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ success: false, message: "Invalid product ID"})
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); //langsung ngasih object after update
    res.status(200).json({ success: true, data: updatedProduct })
  } catch (error) {
    res.status(500).json({success: false, message: "Server error"})
  }
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Product not found" });
  }
};

export { AllProducts, CreateProduct, SearchProduct, DeleteProduct, EditProduct };
