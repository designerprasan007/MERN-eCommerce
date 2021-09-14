const User = require('../models/UserModel');
const moment = require('moment');
const emailService = require('../utils/emailService'); 

const UserController = {};

UserController.register = async(req, res) =>{
    const {firstname, lastname, email, phone, password} = req.body;
	let created = moment().format('MMMM Do YYYY, h:mm:ss a');
    let emailUrl = process.env.VERIFY_EMAIL_URL;
    try{
        const preUser = await User.findOne({email});
        if (preUser) return res.status(409).json({success:false, error:"email already exist"});
        const randomtext = (Math.random() + 1).toString(36).substring(2);
        const verifyUrl = `${emailUrl}/?email=${email}&verifyid=${randomtext}`
        const userData = {
            email,
            name: firstname +' ' + lastname,
            regUser:true,
            verifyUrl,
        }
        emailService(userData, created, '');
        let data = {
            email,
            password,
            profile:{
                firstname,
                lastname,
                contactNum:phone
            },
            metaData:{
                verifiedUrl: randomtext
            }
        }
        let createUser = await new User(data)
        await createUser.save()
        res.status(200).json({success: true})
    }
    catch(err){
        console.log(err);
        UserController.serverError(err, res)
    }

}
UserController.verifyEmail = async(req, res) =>{
    const {email, verifyid} =  req.body;
    const user = await User.findOneAndUpdate({$and: [{email: email}, {"metaData.verifiedUrl": verifyid}] }, {
        $set:{
            "metaData.verified":true,
            "metaData.verifiedUrl":'',

        }
    })
    if(!user){
        res.status(403).json({success:false, error:"Forbidden! You don't have access"})
    }else{
        res.status(200).json({success: true})
    }
}

UserController.LoginUser = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({success:false, error:"Invalid Email"});
        const isMatch = await user.MatchPass(password);
        if(!isMatch) return res.status(403).json({success:false, error:"Forbidden!"})
        
        const token = user.getSignedToken();

        let userdata = {
            token,
            name: user.profile.firstname + ' ' + user.profile.lastname,
            email: user.email,
            phone: user.profile.contactNum,
            address: user.addressData
        }
        console.log(userdata)
        res.status(200).json({success:true, userdata})
    }
    catch(err){
        UserController.serverError(err, res)
    }
}
UserController.serverError = (err, res) =>{
    console.log(err);
    res.status(500).json({success:false, error:err})
}
 
module.exports = UserController