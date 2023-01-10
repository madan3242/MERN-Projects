import express from "express";
import { 
    createProduct, 
    getAllProducts, 
    getSingleProduct,
    updateProduct, 
    deleteProduct } from "../controllers/products.js";

let router = express.Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;