const router = require("express").Router()
const { User , OrderDetail } = require("../models")
const passport = require("passport")

router.get("/cart",(req,res,next)=>{
const userId=req.user.id
OrderDetail.findAll({where:{id:userId}})
.then((data)=>res.send(data))
})

router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user)
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
