const nodemailer = require("nodemailer");


const main = async (email, password) =>{
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
	  let info = await transporter.sendMail({
	    from: process.env.SENDINBLUE_EMAIL, // sender address
	    to: email, // list of receivers
	    subject: "Login password for E-buy account", // Subject line
	    text: "Login password for E-buy account", // plain text body
	    html:require('./emailTemplate')({
	    		email, password
            })
	    });
	  console.log("Message sent: %s", info.messageId);
  	  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


module.exports = main;