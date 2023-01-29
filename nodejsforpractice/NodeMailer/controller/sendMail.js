const nodemailer = require('nodemailer')
// For more detail :https://nodemailer.com/about/
// For more detail :https://ethereal.email/

const sendMail = async (req,res) =>{
    let testAccount = await nodemailer.createTestAccount()
    // connect with the smtp server
    let transporter = await nodemailer.createTransport({
        host : "smtp.ethereal.email",
        port: 587,
        secure:false,
        // true for 465 , false for other ports
        auth:{
            user: 'cora66@ethereal.email',
             // generate ethereal user
            pass: 'XWM3qem74dR6P9WU2R'
            // generated ethereal password  
        }
    })

    let info = await transporter.sendMail({
        from: '"Chanchal Verma 👻" <afreen@gmail.com>', // sender address
        to: "sahunishaji1220@gmail.com", // list of receivers
        subject: "Job Offer letter", // Subject line
        text: "You are hired", // plain text body
        html: "<b>You are hired</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
    res.json(info)
}

module.exports = sendMail ;