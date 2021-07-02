const router = require("express").Router()
const { User, Comic, Order, OrderDetail } = require("../models")

router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user
  const Comic = req.Comic

  Order.findAll({ where: { userId: LoggedUser.id } }).then(orders => {
    OrderDetail.findOrCreate({ where: { id: orders.length + 1 } }).then(order => {
      User.findByPk(LoggedUser.id).then(usuario => {
        usuario.addOrder_detail(order[0])
        res.send(order)
      })
    })
  })
})

module.exports = router
