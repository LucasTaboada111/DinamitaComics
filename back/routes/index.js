const router = require("express").Router()
const users= require("./users")

router.use("/users",users)

router.get("/me", (req, res) => {
    if (!req.user) res.sendStatus(401)
    else res.send(req.user)
  })

module.exports = router