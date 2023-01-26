const nodemailer = require('nodemailer')
const sendMail = async (req,res) =>{
    let testAccount = await nodemailer.createTestAccount()
    // connect with the smtp server
    let transporter = await nodemailer.createTransport({
        host : "smtp.ethereal.email",
        port: 587,
        secure:false,
        // true for 465 , false for other ports
        auth:{
            user: 'eldridge.lowe3@ethereal.email',
             // generate ethereal user
            pass: 'RVRZGfbQYzZPTeFmKQ'
            // generated ethereal password  
        }
    })

    let info = await transporter.sendMail({
        from: '"Chanchal Verma 👻" <chanchal@gmail.com>', // sender address
        to: "chanchalv2510@gmail.com", // list of receivers
        subject: "Hello Chanchal", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
    res.json(info)
}

module.exports = sendMail ;