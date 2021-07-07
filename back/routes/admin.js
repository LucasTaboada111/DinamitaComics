const router = require("express").Router()
const { User } = require("../models")

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) next()
  else res.sendStatus(401)
}
const boolean = false

router.delete(":id", isAdmin, (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.status(200).send({ msg: "eliminado correctamente" })
  })
})

router.get("/users", isAdmin, (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      next(err)
    })
})

router.put("/:id", isAdmin, async (req, res, next) => {
  const user = await User.findByPk(req.params.id)
  await User.update(
    { isAdmin: !user.isAdmin },
    {
      where: {
        id: req.params.id
      }
    }
  )

  const users = await User.findAll()
  console.log(users)
  res.status(200).send(users)
})

module.exports = router
