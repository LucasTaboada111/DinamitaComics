const router = require("express").Router()
const { Comic, Category } = require("../models")



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


router.get("/comicName",(req,res,next)=>{

    Comic.findAll({where:{name:req.body.comicName}}).then((comics)=>{
        res.status(200).send(comics)
    })
    .catch((err)=>{
        next(err)
    })
})






module.exports = router