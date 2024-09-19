
import productModel from "../models/productModel.js";
import fs from 'fs';

// Add product items
const addProduct = async (req, res) => {
    const image = req.files['image'] ? req.files['image'][0].filename : null;
    const thumbnail1 = req.files['thumbnail1'] ? req.files['thumbnail1'][0].filename : null;
    const thumbnail2 = req.files['thumbnail2'] ? req.files['thumbnail2'][0].filename : null;
    const thumbnail3 = req.files['thumbnail3'] ? req.files['thumbnail3'][0].filename : null;

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: req.body.category,
        image: image,
        thumbnail1: thumbnail1,
        thumbnail2: thumbnail2,
        thumbnail3: thumbnail3
    });

    try {
        await product.save();
        res.status(201).json({ success: true, message: "Product Added Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "ERROR" });
    }
}

// All Product List
const productList = async (req, res) => {
    try {
        const products = await productModel.find({}).sort({ createdAt: -1 }); // Sort by recent addition
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching products" });
    }
};


// Remove Products
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        
        // delete images from upload folder
        if (product.image) fs.unlink(`uploads/${product.image}`, () => {});
        if (product.thumbnail1) fs.unlink(`uploads/${product.thumbnail1}`, () => {});
        if (product.thumbnail2) fs.unlink(`uploads/${product.thumbnail2}`, () => {});
        if (product.thumbnail3) fs.unlink(`uploads/${product.thumbnail3}`, () => {});

        // delete data from DB
        await productModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ success: true, message: "Product Removed Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "An error occurred while removing the product" })
    }
}


// Update product details
const updateProduct = async (req, res) => {
    const { id } = req.body;
    const image = req.files && req.files['image'] ? req.files['image'][0].filename : null;
    const thumbnail1 = req.files && req.files['thumbnail1'] ? req.files['thumbnail1'][0].filename : null;
    const thumbnail2 = req.files && req.files['thumbnail2'] ? req.files['thumbnail2'][0].filename : null;
    const thumbnail3 = req.files && req.files['thumbnail3'] ? req.files['thumbnail3'][0].filename : null;

    const updatedData = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: req.body.category,
    };

    if (image) updatedData.image = image;
    if (thumbnail1) updatedData.thumbnail1 = thumbnail1;
    if (thumbnail2) updatedData.thumbnail2 = thumbnail2;
    if (thumbnail3) updatedData.thumbnail3 = thumbnail3;

    try {
        const product = await productModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (product) {
            res.status(200).json({ success: true, message: "Product Updated Successfully", product });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while updating the product" });
    }
};

export { addProduct, productList, removeProduct, updateProduct };

