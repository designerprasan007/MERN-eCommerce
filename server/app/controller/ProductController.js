const Product = require('../models/ProductModel');
const product = require('../models/ProductModel')
const ProductController = {};

ProductController.createproduct = async(req, res) =>{
	let {productName, productModel, productCata, productSpeci, productBrand, productColor} = req.body;
	const Profiles =  req.files;
	const ownerID = req.owner._id; 
	productColor = JSON.parse(productColor);
	try{
		productColor.map((res) =>{
			res.images = [];
		})
		Profiles.map((val) =>{
			console.log(val);
			productColor.map((cle) =>{
		    	if(cle.color === val.fieldname ){
		      	 	cle.images.push(val.filename)
		      	}
		    })
		})
		const productId = Math.random().toString(36).substring(2);
		let data = {
			productId,
			productName,
			productBrand,
			productSpeci,
			productCata,
			productModel,
			productColor,
			ownerID 
		}
		const store = await product.create(data)

		res.status(200).json({success:true, message:'Stored'});		
	}catch(err){
		ProductController.serverError(err, res);
	}

}

ProductController.Editproduct = async(req, res) =>{
	const Profiles =  req.files;
	let { productId,
		productName,
		productBrand,
		productSpeci,
		productCata,
		productModel,
		productimg,
		productColor} = req.body;
	try{
		productColor = JSON.parse(productColor);
		productimg = JSON.parse(productimg)
		const finalImgset = [];
		Profiles.map((val) =>{
			productimg.map((img) =>{
				finalImgset.push({
					src: val.filename,
					objkey: img.objId,
					keyId: img.keyId,

				})
			})
		})
		console.log(finalImgset);

		// console.log(req.body);
		for(var i=0; i<=productColor.length; i++){
			var condition = "productColor."+ productColor[i].objkey +"."+productColor[i].keyname
			console.log(condition, 'conditoasa');
			const updateproduct = await Product.updateOne({_id:productId}, {
				$set:{
					[condition]:productColor[i].textval
				}
			});
		}
		for(var i=0; i<=finalImgset.length; i++){
			var condition = "productColor"+ finalImgset[i].images +"."+finalImgset[i].keyname
			console.log(condition, 'conditoasa');
			const updateproduct = await Product.updateOne({_id:productId}, {
				$set:{
					[condition]:finalImgset[i].textval
				}
			});
		}
		// const pro = await Product.findById(productId)
		// console.log(pro);
		res.send('okay');
	}catch(err){

	}
}

ProductController.serverError = async(err, res) =>{
		res.status(500).json({success:false, err});		
}
module.exports = ProductController