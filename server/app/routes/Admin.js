const express = require('express');
const admin = express.Router();

const {getAdminData} = require('../middleware/adminVerify');
const adminController = require('../controller/AdminController');

admin.post('/adminlogin', adminController.login);
// admin.post('/adminregister', adminController.register);
admin.post('/newStore', getAdminData, adminController.createStore)


module.exports = admin;