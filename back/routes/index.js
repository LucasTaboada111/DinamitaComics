const router = require("express").Router()
const users = require("./users")
const admin = require("./admin")
const orderDetail = require("./orderDetail")
const comics = require("./comics")
const products = require("./products")
const review = require("./reviews")
const categorys = require("./categorys")

router.use("/users", users)
router.use("/admin", admin)
router.use("/orderDetails", orderDetail)
router.use("/comics", comics)
router.use("/products",products)
router.use("/review", review)
router.use("/categorys",categorys)

router.get("/me", (req, res) => {
  if (!req.user) res.sendStatus(401)
  else res.send(req.user)
})

module.exports = router
