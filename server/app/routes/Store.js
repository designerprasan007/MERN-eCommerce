const express = require('express');

const store = express.Router();
const {getAdminData, getStoreOwnerData} = require('../middleware/adminVerify');


const storeController = require('../controller/StoreController');

store.post('/newStore', storeController.createStore)

store.post('/manageStore', getAdminData, storeController.manageStore);

store.post('/StoreLogin', storeController.StoreLogin)
store.post('/storeData', getStoreOwnerData, storeController.StoreData)

module.exports = store;