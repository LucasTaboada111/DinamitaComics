const router = require("express").Router();
const { User } = require("../models");
const passport = require("passport");

router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});



router.post("/logout", (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

router.put("/edit/:id",(req,res,next)=>{
    User.update(req.body,{where:{
        id: req.params.id
    }})
    .then((user)=>{
        res.status(200).send({msg:"editado correctamente"})
    })
})

           


module.exports = router;
