const S = require("sequelize");
const db = require("../config");

class OrderDetail extends S.Model {}

OrderDetail.init(
  {
    products:{
      type: S.ARRAY(S.TEXT),
      defaultValue: []
    },
    totalPrice: {
      type: S.INTEGER,
      defaultValue: 0
    },
  },
  { sequelize: db, modelName: "order_detail" }
);

module.exports = OrderDetail;