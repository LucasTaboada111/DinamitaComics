const S = require("sequelize");
const db = require("../config/db");

class OrderDetail extends S.Model {}

OrderDetail.init(
  {
    products: {
      type: S.ARRAY(S.JSON),
      defaultValue: [],
    },
    totalPrice: {
      type: S.FLOAT,
    },
  },
  { sequelize: db, modelName: "order_detail" }
)


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
//no funca cuando quitamos o updateamos cantidad pero si cuando agregamos comics nuevos.
OrderDetail.addHook("beforeUpdate", (orderDetail) => {
  let valor = 0;
  orderDetail.products.map((data)=>{
    console.log(data)
    valor = valor + (data.comic.price * data.cantidad)
  })
  orderDetail.totalPrice = valor
});




module.exports = OrderDetail;
