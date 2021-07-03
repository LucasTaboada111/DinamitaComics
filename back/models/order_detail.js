const S = require("sequelize")
const db = require("../config/db")

class OrderDetail extends S.Model {}

OrderDetail.init(
  {
    totalPrice: {
      type: S.INTEGER
    },
    quantity: {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "order_detail" }
)

module.exports = OrderDetail
