import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/prduct.controller.js";

const router = express.Router();

router.get("/hello", getProducts)
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;