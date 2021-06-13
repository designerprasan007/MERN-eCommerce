const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreSchema = Schema({
	ownerName:String,
	ownerEmail:String,
	ownerNum:String,
	storeName:String,
	storePass:String,
	shopCity:String,
	shopCountry:String,
	shopState:String,
	storeAddr:String,
	created:String,
	verified:{
		type:Boolean,
		default:false
	},
})


const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
