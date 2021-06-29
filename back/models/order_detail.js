const S = require("sequelize");
const db = require("../config");

class CartDetail extends S.Model {}

CartDetail.init(
  {
    totalPrice: {
      type: S.INTEGER,
    },
    quantity: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "cart_detail" }
);

module.exports = CartDetail;
