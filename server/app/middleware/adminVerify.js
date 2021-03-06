const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const Store = require('../models/StoreModel');


exports.getAdminData = async(req, res, next) =>{
	let token;
	if(req.headers.authorization && req.headers.authorization.startsWith('Admin')){
		token = req.headers.authorization.split(" ")[1];
	}
	if(!token) return res.status(403).json({success:false, err: 'Not Authorized'})

	try{
		const decoded = jwt.verify(token, process.env.JWT_TOKEN);
		const admin = await Admin.findById(decoded.id);

		if(!admin)  return res.status(403).json({success: false, message:"Not Authorized"});
		req.admin = admin;
		next();
	}	
	catch(err){
		console.log(err)
		return res.status(500).json({success:false, err});
	}
}

exports.getStoreOwnerData = async(req, res, next) =>{
		let token;
		if(req.headers.authorization && req.headers.authorization.startsWith('StoreOwner')){
			token = req.headers.authorization.split(" ")[1];
		}
		if(!token) return res.status(401).json({success:false, err:'Forbidden'})
		try{
			const decoded = jwt.verify(token, process.env.JWT_TOKEN);
			const owner = await Store.findById(decoded.id);

			if(!owner)  return res.status(403).json({success: false, message:"Not Authorized"});
			req.owner = owner;
			next();
		}	
		catch(err){
			console.log(err)
			return res.status(500).json({success:false, err});
		}
}