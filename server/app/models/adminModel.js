const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_TOKEN;

const AdminSchema = new Schema ({
	email:String,
	password:String,
	time: { type: Date, default: Date.now },
})


AdminSchema.methods.getSignedToken = function(){
	return jwt.sign({id:this._id}, jwtToken);
}

AdminSchema.pre('save', async function(next){
	if(!this.isModified('password')){
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt)
	next();
})

AdminSchema.methods.Matchpass = async function(password){
	return await bcrypt.compare(password, this.password);
}

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;