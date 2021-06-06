const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const StoreSchema = Schema({
	storeName:String,
	storePass:String,
	ownerName:String,
	ownerEmail:String,
	ownerNum:String,
	created:String,
	verified:{
		type:Boolean,
		default:false
	},
})


const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
