const S = require("sequelize");
const db = require("../config");




class Comic extends S.Model {}
  
  Comic.init(
    {
      name: {
        type: S.STRING,
        allowNull: false,
      },
      price: {
        type: S.INTEGER,
        allowNull: false,
      },
      category: {
        type: S.STRING,
        // allowNull: false,
      },
      img: {
        type: S.STRING,
        allowNull: false,
      },
      plot: {
        type: S.TEXT,
        allowNull: false,
      },
      rating: {
        type: S.INTEGER,
        allowNull: false,
      },
      stock: {
        type: S.INTEGER,
        allowNull: false,
      },
      age:{
        type: S.INTEGER,
        allowNull: false,
      }
    },
    { sequelize: db, modelName: "comic" }
  );

  module.exports = Comic