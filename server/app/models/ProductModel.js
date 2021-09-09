const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types

const producSchema = Schema({
	productId:{
		type:String,
		required:true
	},
	productName:{
		type:String,
		required:true
	},
	productModel:{
		type:String,
		required:true
	},
	productCata:{
		type:String,
		required:true
	},
	productSpeci:{
		type:String,
		required:true
	},
	productBrand:{
		type:String,
		required:true
	},
	productColor:{
		type:Array,
		required:true
	},
	ownerID:{
		type:ObjectId,
		ref:'store'	
	},
	deleted:{
		type:Boolean,
		default:false	
	},
	created:{
		type: Date,
		required: true,
        default: Date.now
    },
})

const Product = mongoose.model('product', producSchema);

module.exports = Product;