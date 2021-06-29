const S = require("sequelize");
const db = require("../config");




class Review extends S.Model {}
  
Review.init(
    {
      content: {
        type: S.TEXT,
      },
    },
    { sequelize: db, modelName: "review" }
  );

  module.exports = Review