const S = require("sequelize");
const db = require("../config");




class Payment extends S.Model {}
  
Payment.init(
    {
      csNumber: {
        type: S.STRING,
        allowNull: false,
      },
      expMonth:{
          type: S.INTEGER,
          allowNull: false,
      },
      expYear:{
        type: S.INTEGER,
        allowNull: false,
      },
      type:{
        type: S.STRING,
        allowNull: false,
      },
    },
    { sequelize: db, modelName: "payment" }
  );

  module.exports = Payment