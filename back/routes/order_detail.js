const router = require("express").Router();
const { Order,OrderDetail } = require("../models");


router.post("/",(req,res,next)=>{
    const userLogged = req.user
    const producto = req.comic
    Order.findAll({where:{userId:userLogged.id}}).then((orders)=>{
        const cantOrders = orders.length
        OrderDetail.findOrCreate({where: { id: cantOrders+1 }}).then((order)=>{
            //hacer cosas con la order creada (order detail deberia tener metodos o hooks
            //para calcular el precio total y al cantidad)
        })
    })
})







module.exports = router