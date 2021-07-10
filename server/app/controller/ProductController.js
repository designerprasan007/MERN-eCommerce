const ProductController = {};

ProductController.createproduct = async(req, res) =>{
	console.log(req.body);
	res.status(200).json(req.body);
}

module.exports = ProductController