const router = require("express").Router()
const { Comic, Category } = require("../models")
const { Op } = require("sequelize");



router.get("/category",(req,res,next)=>{
    const cate = req.body.category
    Comic.findAll({include:[{
        model: Category,
        where:{name:cate}
    }]}).then((comics)=>{
        res.status(200).send(comics)
    })
    .catch((err)=>{
        next(err)
    })
})

router.post("/comicName",(req,res,next)=>{
console.log("soy body",req.body)
   Comic.findAll({
       where:{
           name:{
               [Op.like] : `%${req.body.comicName}%`
           }
       }
   }).then((comics)=>{
       console.log("soy el comic",comics)
       res.status(200).send(comics)
   })
   .catch((err)=>{
       next(err)
   })
})


module.exports = router