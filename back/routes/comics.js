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

//si buscas un  id que no existe no tira un error
router.get("/:id", (req, res, next) => {
  Comic.findByPk(req.params.id)
    .then(comic => {
      res.status(200).send(comic)
    })
    .catch(err => {
      next(err)
    })
})

//router.put("/edit/:id",async (req,res,next)=>{
//creemos que es para admins nada mas
router.post("/", isAdmin, (req, res, next) => {
  const { name, price, category, img, plot, rating, stock, year } = req.body
  Comic.create({ name, price, img, plot, rating, stock, year }).then(comic => {
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
