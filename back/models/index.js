const User = require("./user")
const Comic = require("./comic")
const Category = require("./category")
const Cart = require("./cart")
const CartDetail = require("./cart_detail")
const Review = require("./review")
const Payment = require("./payment")

//Un usuario tiene carritos
User.hasMany(Cart,{foreignKey: 'userId'})





CartDetail.belongsTo(Cart)    


module.exports = {User ,Comic,Category,Cart,CartDetail,Review,Payment}