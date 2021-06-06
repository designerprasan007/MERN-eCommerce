const mongoose = require('mongoose');

const database = async() =>{
	try{
		mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
		console.log('mongoose connected');
	}
	catch(err){
		console.log(err);
	}
}


module.exports = database;