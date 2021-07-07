const nodemailer = require("nodemailer");

const router = require("express").Router();
const { Order, OrderDetail, User } = require("../models/");

const S = require("sequelize");
/* 
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    }
}) */

router.get("/historial", (req, res, next) => {
  const userId = req.user.id;
  Order.findAll({ where: { userId: userId } })
    .then((allOrders) =>
      res.status(200).send(allOrders.map((order) => order.products))
    )
    .catch((err) => next(err));
});

router.post("/buy", async (req, res, next) => {

    //TRANSPORTER QUEDA EN STAND BY


/*   let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const mailOption = {
    from: "Dinamita Comic",
    to: req.user.email,
    subject: "Compra realizada",
    text: "Felicidades por su compra!! Tiene 15 dias de garantia, que lo disfrute. Atte: Dinamita Comics",
  }; */


  try {
    const { id, address } = req.user;

    const user = await User.findByPk(id);
    const cartUser = await OrderDetail.findByPk(id);
    const { products } = cartUser;

    const orderClient = await Order.create({
      products: products,
      quantity: products.length,
      adress: address,
    });

    user.addOrder(orderClient);
    
/*     transporter.sendMail(mailOption, (err,info)=>{
        if(err) res.status(500)  
    }) */
    res.status(200).send(orderClient);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
