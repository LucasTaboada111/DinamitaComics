const router = require("express").Router();
const { User, Comic, OrderDetail, Order } = require("../models");


router.post("/addComic", (req, res, next) => {
  const LoggedUserId = req.body.userId;
  const addedComic = req.body.comic;
  const cantidad = req.body.cantidad;

  console.log("cantidad",cantidad)
  console.log("comic",addedComic)
console.log(LoggedUserId)
  //La onda de esto es crear un carrito con el el id de l usuario y cuando se digne a comprar
  // guardamos ese carrrito en algun lugar (para historial, probablemente tabla nueva) y
  //le borramos al carajo la data del carrito de ese usuario, entonces le queda limpia para que pueda seguir
  //agregando y nos quedamos tranka de que la data anterior quedo guardad para mostrar.

  OrderDetail.findOrCreate({ where: { id: LoggedUserId } }).then((order) => {
    Comic.findByPk(addedComic.id).then((comic) => {
      /* const id = comic.id */
      console.log("Orden",order[0])
      order[0]
        .update({
          products: [...order[0].products, { comic, cantidad }],
        })
        .then((orderActualizada) => {
          User.findByPk(LoggedUserId).then((usuario) => {
            usuario.addOrder_detail(order[0]);
            console.log(orderActualizada)
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

router.put("/updateComic", (req, res, next) => {
  const cant = req.body.cant;
  const comicId = req.body.comic.id;
  const userId = req.body.userId;
  OrderDetail.findByPk(userId).then((order) => {
    order.products.map((data) => {
      if (data.comic.id == comicId) {
        data.cantidad = cant;
      }
    });

    OrderDetail.update(
      {
        products: order.products,
      },
      { where: { id: userId } }
    );
  }).then((orderUpdateada)=>{
    res.status(200).send({ msg: "editado correctamente" });
  }).catch((err)=>{
    next(err)
  })
});



module.exports = router;
