const nodemailer=require('nodemailer');
const sendmail=async(req,res)=>{
    let testaccount =await nodemailer.createTestAccount();
    // connect with the smtp server
    let transporter= await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'mozell12@ethereal.email',
          pass: 'RkR13eQxySNCFyPZvC'
        }
    })
    let info=await transporter.sendMail({
        from: '"Bilalqamar 👻" <mozell12@ethereal.email>', // sender address
        to: "bilalqamar2000gmail.com", // list of receivers
        subject: "Hello Bilal✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
};
module.exports=sendmail;