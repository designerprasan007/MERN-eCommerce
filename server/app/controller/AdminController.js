const Admin = require('../models/adminModel');
const Store = require('../models/StoreModel');
const emailService = require('../utils/emailService') 

const moment = require('moment');
const AdminController = {};

AdminController.login = async(req, res) =>{
	const {email, password } = req.body;
	try{
		if(!email || !password) return res.status(400).json({success:false, err:'All Fields required'});

		const admin = await Admin.findOne({email});

		if(!admin) return res.status(403).json({success:false, err:'Invalid email'})

		const isMatch = await admin.Matchpass(password);
	
		if(!isMatch) return res.status(403).json({success:false, err:'Invalid password'})

		const token = admin.getSignedToken();
		const admindata = {
			email: admin.email,
			_id: admin._id,
			token:token
		}	
		AdminController.AdminPages(req, res, admindata)
	}
	catch(err){
		console.log(err);
		AdminController.serverError(err)
	}
}



AdminController.adminPages = async(req, res) =>{
	AdminController.AdminPages(req, res)
}

AdminController.AdminPages = async(req, res, admindata) =>{
	const verified = await Store.find({verified:true});
	const unverified = await Store.find({verified:false});
	// const graphData = await Store.aggregate([
	// 	{$group: {_id : {name : '$storeName', status: '$verified', created:'$created'}, total:{$sum :1}}},
	// 	{$project : {name : '$_id.storeName', status : '$_id.verified', total : '$total', _id : 0}}
	// 	])
	// console.log();

	const pageData = {
		verified,
		unverified,
	}

	res.status(200).json({success:true, admindata, pageData})
}

// AdminController.register = async(req, res) =>{
// 	const {email, password } = req.body;
// 	try{
// 		const user = await Admin.create({email, password});

// 		res.status(200).json({success:true, user: adminemail});
// 	}
// 	catch(err){
// 		console.log(err);
// 		res.status(500).json({success:false, err})
// 	}
// }


AdminController.serverError = (err) =>{
	res.status(500).json({success:false, err})
}

module.exports = AdminController;