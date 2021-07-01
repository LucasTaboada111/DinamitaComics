const router = require("express").Router();
const { User, Comic, Order, OrderDetail } = require("../models");

router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user;
  const addedComic = req.body.comic;
  const cantidad = req.body.cantidad;

  Order.findAll({ where: { userId: LoggedUser.id } })
    .then((orders) => {
      OrderDetail.findOrCreate({ where: { id: orders.length + 1 } }).then(
        (order) => {
          Comic.findByPk(addedComic.id).then((comic) => {
            /* const id = comic.id */
            order[0]
              .update({
                products: [...order[0].products, { comic, cantidad }],
              })
              .then((orderActualizada) => {
                User.findByPk(LoggedUser.id).then((usuario) => {
                  usuario.addOrder_detail(order[0]);
                  res.status(200).send(orderActualizada);
                });
              });
          });
        }
      );
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
