const express = require('express');
const admin = express.Router();

const {getAdminData} = require('../middleware/adminVerify');
const adminController = require('../controller/AdminController');

admin.post('/adminlogin', adminController.login);
// admin.post('/adminregister', adminController.register);
admin.post('/newStore', adminController.createStore)

admin.post('/adminPages', getAdminData, adminController.adminPages)

module.exports = admin;