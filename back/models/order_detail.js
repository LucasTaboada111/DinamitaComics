<<<<<<< HEAD
const S = require("sequelize");
const db = require("../config");
const Comic = require("./comic");
=======
const S = require("sequelize")
const db = require("../config/db")
>>>>>>> a2cb8f164279105d818a4c6ea4110c83b5695ed2

class OrderDetail extends S.Model {}

OrderDetail.init(
  {
<<<<<<< HEAD
    products: {
      type: S.ARRAY(S.JSON),
      defaultValue: [],
    },
    totalPrice: {
      type: S.FLOAT,
    },
=======
    totalPrice: {
      type: S.INTEGER
    },
    quantity: {
      type: S.STRING
    }
>>>>>>> a2cb8f164279105d818a4c6ea4110c83b5695ed2
  },
  { sequelize: db, modelName: "order_detail" }
)

<<<<<<< HEAD

/* const pepito = (arr) => {
  let valor = 0;
  const map = arr.map( (x) => {
    Comic.findByPk(x.id).then((comic)=>{

      valor = valor + comic.price * x.cantidad;
    })
  });
  console.log("MAP",map)
  return valor;
}; */



//Anda pero se puede mejorar pasandole el id del comic en vez del comic  entero.
OrderDetail.addHook("beforeUpdate", (orderDetail) => {
  let valor = 0;
  orderDetail.products.map((data)=>{
    console.log(data)
    valor = valor + (data.comic.price * data.cantidad)
  })
  orderDetail.totalPrice = valor
});




module.exports = OrderDetail;
=======
module.exports = OrderDetail
>>>>>>> a2cb8f164279105d818a4c6ea4110c83b5695ed2
