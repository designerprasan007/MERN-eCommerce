const express = require('express');

const user = express.Router();
const UserController = require('../controller/UserController');

user.post('/register', UserController.register)
user.post('/verifyemail', UserController.verifyEmail)
user.post('/login', UserController.LoginUser)

module.exports = user