const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'dinamitacomics@gmail.com',
        pass: 'qvqk plda wlar wfcy'
    }
});

module.exports = transporter;




 




