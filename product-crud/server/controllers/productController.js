import Product from "../models/product.js";

export const createProduct = async (req, res) => {
    try {
        let newProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }
        //Product exists or not
        let product = await Product.findOne({name: newProduct.name});
        if(product){
            return res.status(401).json({
                msg: 'Product Already Exists'
            })
        }
        product = new Product(newProduct);
        product = await product.save(); //insert the product to database
        res.status(200).json({
            result: 'Product Created',
            product: product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const getSingleProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    let productId = req.params.id;
    try {
        let updateProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }
        //Prodcut exists or not
        let product = await Product.findById(productId);

        if(!product){
            return res.status(401).json({
                msg: 'No Product Found'
            })
        }

        //update
        product = await Product.findByIdAndUpdate(productId, {
            $set: updateProduct
        }, { new : true});

        res.status(200).json({
            result: 'Product Updated',
            product: product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        let productId = req.params.id;

        //product exist or not
        let product = await Product.findById(productId);

        if(!product){
            return res.status(401).json({
                msg: 'No Product Found'
            })
        }
        //delete
        product = await Product.findByIdAndDelete(productId);
        res.status(200).json({
            result: `Product Deleted`,
            product: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

