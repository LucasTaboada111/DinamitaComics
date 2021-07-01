const router = require("express").Router();
const { User, Comic, Order, OrderDetail } = require("../models");
const S = require("sequelize");

router.post("/addComic", (req, res, next) => {
  const LoggedUser = req.user;
  const addedComicId = req.body.comic.id; 
  const cantidad = req.body.cant; 



  Order.findAll({ where: { userId: LoggedUser.id } })
    .then((orders) => {
      OrderDetail.findOrCreate({ where: { id: orders.length + 1 } }).then(
        (order) => {
          console.log(order)
       
          
          order[0].update({
            products : [...order[0].products, addedComicId] /* S.fn('array_append',S.col('products'),addedComicId) */
          }).then((orderActualizada)=>{
            console.log(orderActualizada)
            res.status(200).send(orderActualizada)
          })
         /*  User.findByPk(LoggedUser.id).then((usuario) => {
              usuario.addOrder_detail(order[0]);
            Comic.findByPk(addedComic.id).then((comic) => {
              order
              comic.addOrder_detail(order[0]); 
              res.status(200).send(order[0])
            });
          }); */
        }
      );
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
