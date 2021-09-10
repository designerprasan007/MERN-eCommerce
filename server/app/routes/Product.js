const express = require('express');
const multer  = require('multer');

const product = express.Router();
const {getStoreOwnerData} = require('../middleware/adminVerify');


const ProductController = require('../controller/ProductController');

const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './productImg');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +'color'+Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });




product.post('/newproduct', getStoreOwnerData, upload.any('productImg'), ProductController.createproduct)

product.patch('/editProduct', getStoreOwnerData, upload.any('productImg'), ProductController.Editproduct)
product.delete('/deleteProduct', getStoreOwnerData, ProductController.Deleteproduct)
// product.post('/manageproduct', getAdminData, ProductController.manageproduct);

// product.post('/productLogin', productController.productLogin)

module.exports = product;