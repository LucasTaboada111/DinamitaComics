const S = require("sequelize");
const db = require("../config");




class Order extends S.Model {}
  
Order.init(
    {
      status: {
        type: S.BOOLEAN,
        defaultValue: false,
      },
      totalPrice: {
        type: S.INTEGER,
      },
      quantity: {
        type: S.STRING,
      },
      adress: {
        type: S.STRING,
        allowNull: false,
      },
      date: {
        type: S.DATE,
        defaultValue: S.NOW,
      },
    },
    { sequelize: db, modelName: "order" }
  );

  module.exports = Order