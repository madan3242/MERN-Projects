import express from "express";
import { 
    createProduct, 
    deleteProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct 
} from "../controllers/productController.js";
const router = express.Router();

/*
    USAGE: Create a Product
    URL: http://127.0.0.1:4000/api/products
    Method: POST
    Fields: name, image, price, qty, info
*/

router.route('/products').post(createProduct);

/*
    USAGE: Get all Products
    URL: http://127.0.0.1:4000/api/products
    Method: GET
    Fields: no-fields
*/

router.route('/products').get(getAllProducts);

/*
USAGE: Get single Products
URL: http://127.0.0.1:4000/api/products/:id
Method: GET
Fields: no-fields
*/

router.route('/products/:id').get(getSingleProduct);

/*
    USAGE: Update Product
    URL: http://127.0.0.1:4000/api/products/:id
    Method: PUT
    Fields: name, image, price, qty, info
*/

router.route('/products/:id').put(updateProduct);

/*
    USAGE: Delete Product
    URL: http://127.0.0.1:4000/api/products/:id
    Method: DELETE
    Fields: no-fields
*/

router.route('/products/:id').delete(deleteProduct);

export default router;