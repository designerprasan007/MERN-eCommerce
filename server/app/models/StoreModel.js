const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_TOKEN;

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
	verified:{
		type:Boolean,
		default:false
	},
	created:{
		type: Date,
		required: true,
        default: Date.now
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

StoreSchema.methods.MatchPass = async function(password){
	return await bcrypt.compare(password, this.storePass);
}

StoreSchema.methods.getSignedToken = function(){
	return jwt.sign({id:this._id}, jwtToken);
}


const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
