const router = require("express").Router()

const { Category } = require("../models")

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) next()
  else res.sendStatus(401)
}

router.get("/", isAdmin, async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.status(200).send(categories)
  } catch (err) {
    next(err)
  }
})

router.post("/", isAdmin, (req, res, next) => {
  Category.create({ name: req.body.category })
    .then(cat => {
      res.status(201).send(cat)
    })
    .catch(err => {
      next(err)
    })
})

router.delete("/:id", isAdmin, (req, res, next) => {
  Category.destroy({ where: { id: req.params.id } })
    .then(async () => {
      const categories = await Category.findAll()
      res.status(200).send(categories)
    })
    .catch(err => {
      next(err)
    })
})

router.put("/:id", isAdmin, (req, res, next) => {
  const id = req.params.id
  Category.update({ name: req.body.category }, { where: { id } })
    .then(async () => {
      const categories = await Category.findAll()
      res.status(200).send(categories)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router
