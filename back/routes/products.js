const router = require("express").Router()
const { Comic, Category } = require("../models")
const { Op } = require("sequelize");



router.get("/category/:category", (req, res, next) => {
    const category = req.params.category
    Comic.findAll({
      include: [
        {
          model: Category,
          where: { name: category }
        }]
    })
      .then(comics => {
        res.status(200).send(comics)
      })
      .catch(err => {
        next(err)
      })
  })

router.post("/comicName",(req,res,next)=>{

   Comic.findAll({
       where:{
           name:{
               [Op.like] : `%${req.body.comicName}%`
           }
       }
   }).then((comics)=>{

       res.status(200).send(comics)
   })
   .catch((err)=>{
       next(err)
   })
})


module.exports = router

/* {include:[{
        model: Category,
        where:{name:cate}
    }]} */

    //{[Op.iLike] : `%${cate}%`}