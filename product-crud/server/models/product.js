import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const Product = mongoose.model('product', productSchema);

export default Product;