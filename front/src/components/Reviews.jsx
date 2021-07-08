import React from "react"
import styles from "../styles/productView.module.css"
import { useSelector, useDispatch } from "react-redux"
import { getReviews, postReviews } from "../store/reviews"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const ReviewView = () => {
  const [content, setContent] = useState("")
  const [rating, setRating] = useState("")

  const dispatch = useDispatch()

  const comic = useSelector(state => state.comic)

  const reviews = useSelector(state => state.review)

  useEffect(() => {
    dispatch(getReviews(comic.id))
  }, [dispatch, comic.id])

  const handleClick = e => {
    dispatch(postReviews({ id: comic.id, content: content, rating: rating })).then(res => {
      if (typeof res.payload == "string") {
        alert("ya publicaste una review de este comic")
      }
      dispatch(getReviews(comic.id))
    })
  }

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.boxtop}>
          <div className={styles.title}> {comic.name} </div>

          {reviews.length > 0 ? (
            reviews.map(review => {
              return (
                <div>
                  <div className={styles.description}>
                    User {review?.userId}: Rating:{review?.rating}/5
                  </div>
                  <div className={styles.description}>Review: {review?.content}</div>
                </div>
              )
            })
          ) : (
            <div className={styles.description}>No hay reviews de este comic</div>
          )}

          <form>
            <input
              className={styles.input}
              type="text"
              name="Content"
              placeholder="Escribi tu review"
              onChange={e => setContent(e.target.value)}
            />
            <br />
            <div>
              <input required onChange={e => setRating(e.target.value)} placeholder="rating" />
            </div>
            <div>
              <Button onClick={e => handleClick()} className={styles.cartButton}>
                {" "}
                Add to Cart !{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewView
