const S = require("sequelize");
const db = require("../config");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validPassword(password) {
    return this.password === User.hash(password, this.salt);
  }
}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    username: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fullname: {
      type: S.STRING,
      allowNull: false,
    },
    address: {
      type: S.STRING,
      allowNull: false,
    },
    phone: {
      type: S.INTEGER,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);


User.addHook("beforeCreate", async user => {
    user.salt = await bcrypt.genSalt(6)
    user.password = await user.hash(user.password, user.salt)
  })


module.exports = User;
