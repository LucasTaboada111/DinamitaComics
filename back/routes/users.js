const router = require("express").Router()
const { User ,OrderDetail} = require("../models")
const passport = require("passport")
const transporter = require("./emails")


router.get("/cart",(req,res,next)=>{
  const userId = req.user.id
  OrderDetail.findAll({where:{id:userId}})
  .then((data)=>res.send(data))
  })


router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .then(() => {
      // Enviamos el email
      transporter.sendMail(
        {
          from: "dinamitacomics@gmail.com",
          to: req.body.email,
          subject: "Mensaje de DinamitaComics",
          text: "¡Bienvenido a Dinamita Comics!",
        },
        function (error, info) {
          if (error) {
            console.log(error, "tiro error");
            res.status(500).send(error.message);
          } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
          }
        }
      );
    })
    .catch(err => {
      next(err)
    })
})

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user)
})

router.post("/logout", (req, res, next) => {
  req.logout()
  res.status(200).send({})
})

router.put("/edit/:id", (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.status(200).send({ msg: "editado correctamente" })
  })
})

module.exports = router
