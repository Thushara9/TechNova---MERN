import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    thumbnail1: {type: String, required: false},
    thumbnail2: {type: String, required: false},
    thumbnail3: {type: String, required: false},
    category: {type: String, required: true},
    createdAt: { type: Date, default: Date.now } 
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;