const express = require('express');

const product = express.Router();
const {getAdminData} = require('../middleware/adminVerify');


const ProductController = require('../controller/ProductController');

product.post('/newproduct', ProductController.createproduct)

// product.post('/manageproduct', getAdminData, ProductController.manageproduct);

// product.post('/productLogin', productController.productLogin)

module.exports = product;