const router = require("express").Router()
const { defaults } = require("pg")
const { Comic, User, Review } = require("../models")
const { response } = require("../server")

router.post("/:comicId", (req, res, next) => {
  const { content, rating } = req.body
  const comicId = req.params.comicId
  const loggedUser = req.user

  Review.findAll({ where: { comicId: comicId, userId: loggedUser.id } })
    .then(response => {
      if (response.length == 0) {
        Review.create({ content, rating }).then(review => {
          Comic.findByPk(comicId)
            .then(comic => {
              User.findByPk(loggedUser.id).then(user => {
                comic.addReview(review)
                user.addReview(review)
                res.status(201).send(review)
              })
            })
            .catch(err => {
              next(err)
            })
        })
      } else {
        res.send(response)
      }
    })
    .catch(err => {
      next(err)
    })
})

//"/api/review/comicid"
router.get("/:comicId", (req, res, next) => {
  const comicid = req.params.comicId
  Review.findAll({ where: { comicId: comicid } })
    .then(comicReviews => {
      res.status(200).send(comicReviews)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router
