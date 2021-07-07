const router = require("express").Router();
const {Order , OrderDetail, User} = require ("../models/")

const S = require ("sequelize")

router.get("/historial",(req,res,next)=>{
    const userId = req.user.id
    Order.findAll({where:{userId:userId}})
    .then(allOrders=>res.status(200).send(allOrders.map(order=>order.products)))
    .catch((err)=>next(err))
})

router.post("/buy", async(req,res,next)=>{
try{ 
const {id,address}=req.user

const user = await User.findByPk(id)
const cartUser = await OrderDetail.findByPk(id)
const {products}= cartUser

const orderClient = await Order.create({products:products , quantity:products.length , adress : address})
  
user.addOrder(orderClient)

res.status(200).send(orderClient)
}
catch(err){
return next(err)
}

})

module.exports= router;