const S = require("sequelize")
const db = require("../config/db")

class Comic extends S.Model {}

Comic.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    price: {
      type: S.FLOAT,
      allowNull: false
    },
    img: {
      type: S.STRING,
      allowNull: false
    },
    plot: {
      type: S.TEXT,
      allowNull: false
    },
    rating: {
      type: S.FLOAT,
      allowNull: false
    },
    stock: {
      type: S.INTEGER,
      allowNull: false
    },
    year: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "comic" }
)

module.exports = Comic
