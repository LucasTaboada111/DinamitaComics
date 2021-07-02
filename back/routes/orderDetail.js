<<<<<<< HEAD
const router = require("express").Router();
const { User, Comic, OrderDetail, Order } = require("../models");

router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user;
  const addedComic = req.body.comic;
  const cantidad = req.body.cantidad;

  //La onda de esto es crear un carrito con el el id de l usuario y cuando se digne a comprar
  // guardamos ese carrrito en algun lugar (para historial, probablemente tabla nueva) y
  //le borramos al carajo la data del carrito de ese usuario, entonces le queda limpia para que pueda seguir
  //agregando y nos quedamos tranka de que la data anterior quedo guardad para mostrar.

  OrderDetail.findOrCreate({ where: { id: LoggedUser.id } }).then((order) => {
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
  });
});

router.delete("/deleteComic", (req, res, next) => {
  const comicId = req.body.comic.id;
  const userId = req.user.id;
  OrderDetail.findByPk(userId).then((order) => {
    const comicPorEliminar = order.products.filter(
      (data) => data.comic.id == comicId
    );
    const index = order.products.indexOf(comicPorEliminar[0]);
    order.products.splice(index, 1);
    OrderDetail.update(
      {
        products: order.products,
      },
      { where: { id: userId } }
    ).then((orderUpdateada) => {
      res.status(200).send({ msg: "eliminado correctamente" });
    });
  });
});

/* router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user;
  const addedComic = req.body.comic;
  const cantidad = req.body.cantidad;

  Order.findAll({ where: { userId: LoggedUser.id } })
    .then((orders) => {
      OrderDetail.findOrCreate({ where: { id: orders.length + 1 } }).then(
        (order) => {
          Comic.findByPk(addedComic.id).then((comic) => {
            
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


 */

module.exports = router;
=======
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
>>>>>>> 4a10b04fd438094f1f5ec848b47db64e2215d3d9
