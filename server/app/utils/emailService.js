const nodemailer = require("nodemailer");


const main = async (userdata, created, manageStore) =>{
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
	  if(!manageStore){
	  	let info = await transporter.sendMail({
	    from: process.env.SENDINBLUE_EMAIL, // sender address
	    to: 'designerprasan007@gmail.com', // list of receivers
	    subject: "New Ebay Account", // Subject line
	    text: "New Ebay Account", // plain text body
	    html:require('./RegisterTemplate')({
	    		userdata, created
            })
	    });
	  }
	  else{
		let info = await transporter.sendMail({
	    from: process.env.SENDINBLUE_EMAIL, // sender address
	    to: userdata.ownerEmail, // list of receivers
	    subject: "Store Accepted", // Subject line
	    text: "Store Accepted", // plain text body
	    html:require('./AcceptTemplate')({
	    		userdata
            })
	    });
	  }
      console.log("Message sent: %s", info.messageId);
  	  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	
}


module.exports = main;