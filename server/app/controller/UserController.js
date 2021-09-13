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
        // emailService(userData, created, '');
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
            "metaData.verified":true
        }
    })
    if(!user){
        res.status(403).json({success:false, error:"Forbidden! You don't have access"})
    }else{
        res.status(200).json({success: true})
    }
}

UserController.serverError = (err, res) =>{
    console.log(err);
    res.status(500).json({success:false, error:err})
}
 
module.exports = UserController