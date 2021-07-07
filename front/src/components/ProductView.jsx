import React, { useEffect, useState } from "react"
import styles from "../styles/productView.module.css"
import { Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getComic } from "../store/comic"
import { GrFavorite } from "react-icons/gr"
import { Link } from "react-router-dom"
import {setDataCart} from "../store/cart"

const ProductView = ({ comicId,handleClick }) => {
  const dispatch = useDispatch()
  const [cantidad, setCantidad] = useState(1)

  const comic = useSelector(state => state.comic)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getComic(comicId))
  }, [dispatch, comicId])

  console.log("object")
  const handleClicks = (e, comic, cantidad) => {
    const userId = user.id
    e.preventDefault()
    dispatch(setDataCart({ comic, cantidad, userId })).then(res => console.log(res))
  }
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.boxTop}>
          <div className={styles.boxLeft}>
            <img className={styles.image} alt={comic.name} src={comic.img} />
          </div>
          <div className={styles.boxRight}>
            <div className={styles.title}> {comic.name} </div>
            <div className={styles.price}> ${comic.price} </div>
            <div>
              <Button className={styles.cartButton}>
                <GrFavorite />
              </Button>
              <Button onClick={(e)=>handleClicks(e,comic,cantidad)} className={styles.cartButton}> Add to Cart ! </Button>
            </div>
            <div>
              <Link to= {`/review/${comicId}`}>
                Ir a las reviews
              </Link>
              <Button
                onClick={e => handleClick(e, comic, cantidad)}
                className={styles.cartButton}>
                {" "}
                Add to Cart !{" "}
              </Button>
            </div>
            <div>
              <input required onChange={handleChange} placeholder="cantidad" />
            </div>
          </div>
        </div>
        <div className={styles.description}>{comic.plot}</div>
      </div>
    </div>
  )
}

export default ProductView
