const router = require("express").Router();
const { User, Comic, Order, OrderDetail } = require("../models");

router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user;
  const addedComic = req.body.comic;

  Order.findAll({ where: { userId: LoggedUser.id } })
    .then((orders) => {
      OrderDetail.findOrCreate({ where: { id: orders.length + 1 } }).then(
        (order) => {
          User.findByPk(LoggedUser.id).then((usuario) => {
              usuario.addOrder_detail(order[0]);
            Comic.findByPk(addedComic.id).then((comic) => {
              comic.addOrder_detail(order[0]);
              res.status(200).send(order[0])
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
