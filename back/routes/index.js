const router = require("express").Router()
const users = require("./users")
const admin = require("./admin")
const orderDetail = require("./orderDetail")
const comics = require("./comics")
const products = require("./products")
const review = require("./reviews")
const categories = require("./categories")
const order = require ("./order")

router.use("/users", users)
router.use("/admin", admin)
router.use("/orderDetails", orderDetail)
router.use("/comics", comics)
router.use("/products", products)
router.use("/review", review)
router.use("/categories", categories)
router.use("/order",order)

router.get("/me", (req, res) => {
  if (!req.user) res.sendStatus(401)
  else res.send(req.user)
})

module.exports = router
