const router = require("express").Router()
const { Comic, Category } = require("../models")

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) next()
  else res.sendStatus(401)
}

// "/api/comics"
router.get("/", async (req, res, next) => {
  try {
    const comics = await Comic.findAll()
    res.status(200).send(comics)
  } catch (error) {
    next(error)
  }
})

router.get("/:id", (req, res, next) => {
  Comic.findByPk(req.params.id)
    .then(comic => {
      res.status(200).send(comic)
    })
    .catch(err => {
      next(err)
    })
})

router.post("/", (req, res, next) => {
  Comic.create(req.body).then(comic => {
    Category.findOne({ where: { name: category } })
      .then(category => {
        comic.addCategory(category)
        res.status(201).send(comic)
      })
      .catch(err => {
        next(err)
      })
  })
})

router.put("/:id", async (req, res, next) => {
  const id = req.params.id
  try {
    await Comic.update(req.body, { where: { id } })
    const newComics = await Comic.findAll()
    res.status(200).send(newComics)
  } catch (error) {
    next(error)
  }
})

router.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id
  try {
    await Comic.destroy({ where: { id } })
    const comics = await Comic.findAll()
    res.status(200).send(comics)
  } catch (error) {
    next(error)
  }
})

module.exports = router
