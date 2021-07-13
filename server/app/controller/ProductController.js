const ProductController = {};

ProductController.createproduct = async(req, res) =>{
	let {productImg} = req.body;
	console.log(req.files);
	try{
		console.log(productImg);
		res.status(200).json(req.body);		
	}catch(err){
		console.log(err);
		res.status(500).json(err);		
	}

}

module.exports = ProductController