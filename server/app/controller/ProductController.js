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
	try{
		Profiles.map((val) =>{
			console.log(val);
			// productColor.map((cle) =>{
		    // 	if(cle.color === val.fieldname ){
		    //   	 	cle.images.push(val.filename)
		    //   	}
		    // })
		})
		console.log(req.body);
		res.send('okay');
	}catch(err){

	}
}

ProductController.serverError = async(err, res) =>{
		res.status(500).json({success:false, err});		
}
module.exports = ProductController