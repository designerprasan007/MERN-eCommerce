const nodemailer = require("nodemailer");


const main = async (userdata, created, manageStore, ) =>{
	let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: process.env.SENDINBLUE_SERVER,
	    port: process.env.SENDINBLUE_PORT,
	    secure: false, // true for 465, false for other ports
	    auth: {
	      user: process.env.SENDINBLUE_EMAIL, // generated ethereal user
	      pass: process.env.SENDINBLUE_PASSWORD, // generated ethereal password
	    },
	  });

	  // send mail with defined transport object
	if(userdata.regUser){
		let info = await transporter.sendMail({
			from: process.env.SENDINBLUE_EMAIL, // sender address
			to: userdata.email, // list of receivers
			subject: "I-buy Verify Email", // Subject line
			text: "I-buy Verify Email", // plain text body
			html:require('./VerifyTemplate')({
					userdata
				})
			});
			console.log("Message sent: %s", info.messageId);
				console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		
	} 
	else{
	  	let info = await transporter.sendMail({
			from: process.env.SENDINBLUE_EMAIL, // sender address
			to: !manageStore ? 'designerprasan007@gmail.com' : userdata.ownerEmail, // list of receivers
			subject:!manageStore ? "New Ebay Account" : "Store Accepted", // Subject line
			text: !manageStore ? "New I-bay Account" : "Store Accepted", // plain text body
			html: !manageStore ? require('./RegisterTemplate')({
					userdata, created
				}) : require('./AcceptTemplate')({
					userdata
				})
			});
			console.log("Message sent: %s", info.messageId);
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  }  
}


module.exports = main;