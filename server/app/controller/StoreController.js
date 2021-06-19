const Store = require('../models/StoreModel');
const moment = require('moment');
const StoreController = {};
const emailService = require('../utils/emailService') 

StoreController.createStore = async(req, res) =>{
	const {storeName, ownerEmail, ownerName, ownerNum, storePass, storeCountry, storeState, storeCity, storeAddr} = req.body;
	let created = moment().format('MMMM Do YYYY, h:mm:ss a');
	try{
		const preStore = await Store.findOne({ownerEmail});
		if(preStore) return res.status(400).json({success:false, err:'Email already taken'})
		const store = await Store.create({storeName, storePass, ownerName, ownerEmail, storeCountry, storeState, storeCity, storeAddr, ownerNum, created})
		const manageStore = false;
		emailService(req.body, created, manageStore);
		res.status(200).json({store});
	}
	catch(err){
		console.log(err);
		StoreController.serverError(err)
	}
}

StoreController.StoreLogin = async(req, res) =>{
	const {email, password} = req.body;
	try{
		const user = await Store.findOne({ownerEmail:email});

		if(!user) return res.status(401).json({success:false, err:'Email not Found'});

		const isMatch = await user.MatchPass(password);

		if(!isMatch) return res.status(401).json({success:false, err:'Password not match'});
		
		let token = user.getSignedToken();

		token = 'StoreOwner ' + token;

		const ownerdata = {
			_id: user._id,
			storeName:  user.storeName, 
			ownerName:  user.ownerName, 
			ownerEmail:  user.ownerEmail,
			storeCountry:  user.storeCountry, 
			storeState:  user.storeState, 
			storeCity:  user.storeCity, 
			storeAddr:  user.storeAddr, 
			ownerNum:  user.ownerNum, 
			created:  user.created,
			token 
		}
		res.status(200).json({success:true, ownerdata})
	}catch(err){
		console.log(err);
		StoreController.serverError(res, err)
	}
}

StoreController.manageStore = async(req, res) =>{
	const {id, action} = req.body;
	try{
		if(action == 'Accept'){
			const store = await Store.findByIdAndUpdate(id,{
				verified: true
			})
			const manageStore = true;
			emailService(store, ' ', manageStore);
		}	
		else{
			await Store.findByIdAndRemove(id)
		}	
		res.send('okay');
	}catch(err){
		console.log(err);
		StoreController.serverError(err)
	}
} 

StoreController.serverError = (res, err) =>{
	console.log(err);
	res.status(500).json({success:false, err})
}

module.exports = StoreController
