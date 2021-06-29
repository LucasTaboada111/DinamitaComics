const router = require("express").Router()
const users= require("./users")
const admin = require("./admin")

router.use("/users",users)
router.use("/admin",admin)

router.get("/me", (req, res) => {
    if (!req.user) res.sendStatus(401)
    else res.send(req.user)
  })

module.exports = router