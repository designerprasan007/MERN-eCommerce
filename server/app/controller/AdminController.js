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
		res.status(200).json({success:true, admindata})
	}
	catch(err){
		console.log(err);
		AdminController.serverError(err)
	}
}

AdminController.createStore = async(req, res) =>{
	const {storeName, ownerEmail, ownerName, ownerNum, storePass} = req.body;
	let created = moment().unix();
	try{
		const store = await Store.create({storeName, storePass, ownerName, ownerEmail, ownerNum, created})
		const password = storePass;
		const email = ownerEmail;
		emailService(email, password);
		res.status(200).json({store});
	}
	catch(err){
		console.log(err);
		AdminController.serverError(err)
	}
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


AdminController.serverError = () =>{
	res.status(500).json({success:false, err})
}

module.exports = AdminController;