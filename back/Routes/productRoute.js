// productRoute.js
const express = require('express');
const productRoute = express.Router();
// const isAuth = require('../middleware/isAuth');
const {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
    getOneProduct,
} = require('../Controllers/productController');

// Protect routes that require authentication
// productRoute.use(isAuth);

// Route definitions
productRoute.get('/products', getProducts);
productRoute.get('/products/:id', getOneProduct);
productRoute.post('/products', postProduct);
productRoute.put('/products/:id', putProduct);
productRoute.delete('/products/:id', deleteProduct);

module.exports = productRoute;
