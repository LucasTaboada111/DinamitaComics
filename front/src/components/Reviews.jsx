import React from "react"
import styles from "../styles/productView.module.css"
import { useSelector, useDispatch } from "react-redux"
import { getReviews } from "../store/reviews"
import { useEffect} from "react"
import { Button } from "react-bootstrap"

const ReviewView = () => {
  const dispatch = useDispatch()

  const comic = useSelector(state => state.comic)

  const reviews = useSelector(state=> state.review)

  useEffect(() => {
    dispatch(getReviews(comic.id))
  }, [dispatch])

  const handleClick = (e)=>{
      console.log("sumbit")
  }

  const  handleChange = (e)=>{
    console.log("cambio")
  }

  return (
    <div className={styles.center}>
      <div className={styles.container}>
          <div className ={styles.boxtop}>
                <div className={styles.title}> {comic.name} </div>

                {reviews.length>0? reviews.map((review) => {
                    return (
                      <div>
                          <div className={styles.description}>User {review?.userId}: Rating:{review?.rating}/5</div>
                          <div className={styles.description}>Review: {review?.content}</div>
                      </div>
                    )
                }):<div className= {styles.description}>No hay reviews de este comic</div>}

                <form>
                    <input
                        className={styles.input}
                        type="text"
                        name="Content"
                        placeholder="Escribi tu review"
                    />
                    <br/>
                    <div><input required onChange={handleChange} placeholder="rating" /></div>
                    <div>
                      <Button onClick={(e)=>handleClick()} className={styles.cartButton}> Add to Cart ! </Button>
                    </div>
                </form>
          </div>
      </div>
    </div>
  )
}

export default ReviewView