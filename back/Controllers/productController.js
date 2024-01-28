
const Product = require("../models/Product");

const getProducts = async (requset, response) => {
        try {
            const products = await Product.find(); 
            console.log(products);
            response.status(200).json({ products: products });
        } catch (error) {
            response.status(500).json({ msg: "error on getting products" });
        }
};

const getOneProduct = async (req, res) => {
        const id = req.params.id;
        try {
            const foundProduct = await Product.findById(id);
        if (foundProduct) {
            res.status(200).json({ product: foundProduct });
        } else {
            res.status(404).json({ msg: "No product found with the given ID" });
        }
        } catch (error) {
            res.status(500).json({ msg: "error on retrieving the product" });
        }
};

const postProduct = async (request, response) => {
        const product = request.body;
        try {
            const foundProduct = await Product.findOne({ productID: product.ProductID });
        if (foundProduct) {
            response.status(400).json({ msg: "Product already exist" });
        } else {
            const newProduct = new Product(product)
            console.log(newProduct)
            await newProduct.save();
            response.status(200).json({ product: newProduct, msg: " Product successfully added"
        });
        }}
        catch (error) {
            console.error(error);
            response.status(500).json({ msg: "error on adding product" });
        }
};

const putProduct = async (req, res) => {
    const id=req.params.id;
    const product=req.body
    console.log(product)
    try {
        await product.findByIdAndUpdate(id,product)
        res.status(200).json({ msg: "update success" });
    } catch (error) {
        res.status(500).json({ msg: "error on updating product" });
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ msg: "delete done" });
    } catch (error) {
        res.status(500).json({ msg: "error on deleting product" });
    }
};

module.exports = { getProducts, postProduct, putProduct, deleteProduct, getOneProduct };
