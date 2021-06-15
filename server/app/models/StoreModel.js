const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;


const StoreSchema = Schema({
	ownerName:String,
	ownerEmail:String,
	ownerNum:String,
	storeName:String,
	storePass:String,
	storeCity:String,
	storeCountry:String,
	storeState:String,
	storeAddr:String,
	created:String,
	verified:{
		type:Boolean,
		default:false
	},
})


StoreSchema.pre('save', async function(next){
	if(!this.isModified('storePass')){
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.storePass = await bcrypt.hash(this.storePass, salt)
	next();
})


const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
