const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => { 
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                service:'gmail',
                // host:process.env.MAIL_HOST,
                host:'smtp.gmail.com',
                port:587,
                secure:false,
                auth:{
                    // user: process.env.MAIL_USER ,
                    // pass: process.env.MAIL_PASS,
                    user:'baroonjha14@gmail.com',
                    pass:'inmr xlfq wbjw gpsz',
                }
            })

 
            let info = await transporter.sendMail({
                from: 'Learnyverse', 
                to:`${email}`, 
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    } 
}


module.exports = mailSender;