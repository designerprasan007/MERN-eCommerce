const Product = require('../models/ProductModel');
const product = require('../models/ProductModel')
const fs = require('fs');
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
        const maxLength = Math.max(Profiles.length, productimg.length)
        const finalImgset = [];
        let prevproduct = await Product.findById(productId);

        for (let i = 0; i < maxLength; i++) {
            fs.unlink("./productImg/"+prevproduct.productColor[productimg[i].objId].images[productimg[i].keyId], function (err) {            
                if (err) {                                                 
                    console.error(err);                                    
                }                                                          
               console.log(prevproduct.productColor[productimg[i].objId].images[productimg[i].keyId], 'File has been Deleted');                           
            });    
          finalImgset.push({
            ...(Profiles[i] ?? {}),
            ...(productimg[i] ?? {}),
          })
        }

		for(var i=0; i<productColor.length; i++){
			var condition = "productColor."+ productColor[i].objkey +"."+productColor[i].keyname
			await Product.updateOne({_id:productId}, {
				$set:{
					[condition]:productColor[i].textval
				}
			});
		}
        
		for(var i=0; i<finalImgset.length; i++){
            var condition = "productColor."+ finalImgset[i].objId +".images."+finalImgset[i].keyId
			await Product.updateOne({_id:productId}, {
				$set:{
					[condition]:finalImgset[i].filename
				}
			});
		}
        const updated = await Product.findOneAndUpdate({_id:productId}, 
			{$set:{
                productName : productName ? productName : prevproduct.productName,
                productBrand : productBrand ? productBrand : prevproduct.productBrand,
                productSpeci : productSpeci ? productSpeci : prevproduct.productSpeci,
                productCata : productCata ? productCata : prevproduct.productCata,
                productModel : productModel ? productModel : prevproduct.productModel
            }}, {new:true}) 
		console.log(updated.productColor[0].images);
		res.send(updated);
	}catch(err){
        console.log(err);
		ProductController.serverError(err, res);
	}
}

ProductController.serverError = async(err, res) =>{
		res.status(500).json({success:false, err});		
}
module.exports = ProductController