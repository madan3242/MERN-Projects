import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productController.js";
const router = express.Router();

/*
    USAGE: Create a Product
    URL: http://127.0.0.1:4000/api/products
    Method: POST
    Fields: name, image, price, qty, info
*/

router.post('/products').route(createProduct);

/*
    USAGE: Get all Products
    URL: http://127.0.0.1:4000/api/products
    Method: GET
    Fields: no-fields
*/

router.get('/products').route(getAllProducts);

/*
USAGE: Get single Products
URL: http://127.0.0.1:4000/api/products/:id
Method: GET
Fields: no-fields
*/

router.get('/products/:id').route(getSingleProduct);

/*
    USAGE: Update Product
    URL: http://127.0.0.1:4000/api/products/:id
    Method: PUT
    Fields: name, image, price, qty, info
*/

router.put('/products/:id').route(updateProduct);

/*
    USAGE: Delete Product
    URL: http://127.0.0.1:4000/api/products/:id
    Method: DELETE
    Fields: no-fields
*/

router.delete('/products/:id').route(deleteProduct);

export default router;