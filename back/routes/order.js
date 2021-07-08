const router = require("express").Router();
const { Order, OrderDetail, User } = require("../models/");
const transporter = require("./emails")



router.get("/historial", (req, res, next) => {
  const userId = req.user.id;
  Order.findAll({ where: { userId: userId } })
    .then((allOrders) =>
      res.status(200).send(allOrders.map((order) => order.products))
    )
    .catch((err) => next(err));
});

router.post("/buy", async (req, res, next) => {

  try {

    const { id, address } = req.user;

    const user = await User.findByPk(id);
    const cartUser = await OrderDetail.findByPk(id);
    const { products } = cartUser;

    

    const orderClient = await Order.create({
      products: products,
      quantity: products.length,
      adress: address,
    })
  
    user.addOrder(orderClient);
    res.status(200).send(orderClient);

    let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        @font-face {
            font-family: "BonVivant-Regular";
            src: url("Sonneta Script.otf");
          }
        h1  {
            font-family: "BonVivant-Regular";
            font-size: 2.5em;
            }
        </style>
        <title>Document</title>
    </head>
    <body>
        <h1>Dinamita Comics Store</h1>
        <hr>
        <h2>${req.body.fullname}, thank you for your order! =)</h2>
    </body>
    </html>
        `

// Enviamos el email
    const mail = {
    from: "dinamitacomics@gmail.com",
    to: user.email,
    subject: "Mensaje de DinamitaComics",
    text: "Muchas gracias por tu compra!",
    html: htmlTemplate
}
   transporter.sendMail(mail, (error, info) => {
          if (error) {
            console.log(error, "tiro error");
            res.status(500).send(error.message);
          } else {
            console.log("email enviado")
            res.status(200).jsonp(req.body);
          }
        }
      );
    
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
