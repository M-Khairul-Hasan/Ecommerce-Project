const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

     let  transport= nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false, // true for port 465, false for other ports
         auth: {
             user: "khairul.hx@gmail.com",
             pass: "hbha zlih fyce mqbq",
         },
        })


    let mailOption={
         from:'MERN Ecommerce Solution <info@teamrabbil.com>',
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    }
    console.log(mailOption)
    let res = await transport.sendMail(mailOption)
    console.log(res)
    return res
}

module.exports=EmailSend;