const express = require('express');

const store = express.Router();
const {getAdminData} = require('../middleware/adminVerify');


const storeController = require('../controller/StoreController');

store.post('/newStore', storeController.createStore)

store.post('/manageStore', getAdminData, storeController.manageStore)

module.exports = store;