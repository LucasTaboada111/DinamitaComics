const S = require("sequelize")
const db = require("../config/db")

class CreditCard extends S.Model {}

CreditCard.init(
  {
    csNumber: {
      type: S.STRING,
      allowNull: false
    },
    expMonth: {
      type: S.INTEGER,
      allowNull: false
    },
    expYear: {
      type: S.INTEGER,
      allowNull: false
    },
    type: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "creditCard" }
)

module.exports = CreditCard
