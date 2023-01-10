import { Product } from "../models/product.js"

/*
    USAGE: Create a Product
    URL: http://127.0.0.1:4000/api/products
    Method: POST
    Fields: name, image, price, qty, info
*/
export const createProduct = async (req, res) => {
    try{
        let newProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }

        //Product exist or not
        let product = await Product.findOne({ name: newProduct.name });

        if(product){
            return res.status(401).json({
                msg: "Product Already Exists",
            })
        }

        //save the product
        product = new Product(newProduct);
        product = await product.save(); //insert the product to database

        res.status(200).json({
            result: 'Product Created',
            product: product
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    USAGE: Get All Products
    URL: http://127.0.0.1:4000/api/products
    Method: GET
    Fields: no-fields
*/
export const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    USAGE: Get All Products
    URL: http://127.0.0.1:4000/api/products/:id
    Method: GET
    Fields: no-fields
*/
export const getSingleProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    USAGE: Update a Product
    URL: http://127.0.0.1:4000/api/products
    Method: PUT
    Fields: name, image, price, qty, info
*/
export const updateProduct = async (req, res) => {
    try{
        let productId = req.params.id;
        let updateProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }

        //Product exist or not
        let product = await Product.findById(productId);

        if(!product){
            return res.status(401).json({
                msg: "No Product Found",
            })
        }

        //update
        product = await Product.findByIdAndUpdate(productId, {
            $set: updateProduct
        }, { new: true });

        res.status(200).json({
            result: 'Product Updated',
            product: product
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    USAGE: Delete a Product
    URL: http://127.0.0.1:4000/api/products
    Method: DELETE
    Fields: no-fields
*/
export const deleteProduct = async (req, res) => {
    try{
        let productId = req.params.id;

        //Product exist or not
        let product = await Product.findById(productId);

        if(!product){
            return res.status(401).json({
                msg: "No Product Found",
            })
        }

        //delete
        product = await Product.findByIdAndDelete(productId);

        res.status(200).json({
            result: 'Product Deleted',
            product: product
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}