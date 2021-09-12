const express = require('express');

const user = express.Router();
const UserController = require('../controller/UserController');

user.post('/register', UserController.register)

module.exports = user