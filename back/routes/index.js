const router = require("express").Router()
const users= require("./users")
const admin = require("./admin")
const order_detail = require("./order_detail")
 
router.use("/users",users)
router.use("/admin",admin)
router.use("/order_detail",order_detail)

router.get("/me", (req, res) => {
    if (!req.user) res.sendStatus(401)
    else res.send(req.user)
  })

module.exports = router