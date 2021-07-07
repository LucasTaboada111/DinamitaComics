
// create reusable transporter object using the default SMTP transport
 export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  transporter.verify()
  .then(() => {
      console.log("ready for send email")
  })
 