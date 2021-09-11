const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_TOKEN;

const Schema = mongoose.Schema;

const UserSchema = Schema({
    email:{
        require:true,
        trim:true,
        lowercase: true
    },
    password:{
        require:true,
        trim:true
    },
    profile:[{
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        contactNum:{
            type:String
        }
    }],
    metaData:[{
        verified:{
            type:Boolean,
            default:false,
        },
        verifiedUrl:{
            type:String,
        },
        deleted:{
            type:Boolean,
            default:false
        }
    }],
    addressData:[{
        country:{
            type:String,
        },
        state:{
            type:String,
        },
        city:{
            type:String,
        },
        address:{
            type:String,
        },
        pincode:{
            type:String
        }
    }],
    createdOn:{
		type: Date,
		required: true,
        default: Date.now
    }

})



UserSchema.pre('save', async function(next){
	if(!this.isModified('storePass')){
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.storePass = await bcrypt.hash(this.storePass, salt)
	next();
})

UserSchema.methods.MatchPass = async function(password){
	return await bcrypt.compare(password, this.storePass);
}

UserSchema.methods.getSignedToken = function(){
	return jwt.sign({id:this._id}, jwtToken);
}


const User = mongoose.model('user', UserSchema);

module.exports = User;
