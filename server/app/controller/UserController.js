const User = require('../models/UserModel');
const UserController = {};

UserController.register = async(req, res) =>{
    console.log(req.body);
    res.send('okay');
}