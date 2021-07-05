const router = require("express").Router()
const {Category } = require("../models")


const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) next()
    else res.sendStatus(401)
  }

router.post("/add",isAdmin,(req,res,next)=>{
    Category.create(req.body).then((cat)=>{
        res.status(201).send(cat)
    })
    .catch((err)=>{
        next(err)
    })
})


router.delete("/delete/:id",isAdmin,(req,res,next)=>{
    const id = req.params.id
    Category.destroy({where:{id}}).then((data)=>{
        res.status(200).send({ msg: "eliminado correctamente" })
    })
    .catch((err)=>{
        next(err)
    })
})


router.put("/edit/:id",isAdmin,(req,res,next)=>{
    const id = req.params.id
    Category.update(req.body,{where:{id}}).then((cat)=>{
        res.status(200).send(cat)
    })
    .catch((err)=>{
        next(err)
    })
})












module.exports = router;