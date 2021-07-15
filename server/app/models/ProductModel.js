const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const producSchema = Schema({
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
	created:{
		type: Date,
		required: true,
        default: Date.now
    },
})

const Product = mongoose.model('product', producSchema);

module.exports = Product;