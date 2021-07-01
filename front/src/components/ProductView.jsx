import React from "react";
import styles from "../styles/productView.module.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getComic } from "../store/comic";
import { useEffect, useState } from "react";


const ProductView = ({comicId}) => {

  const dispatch = useDispatch();
  

  const comic = useSelector((state => state?.comic[1]? state.comic[1] : null ))
  console.log(comic, "soy comic")

  useEffect(()=>{
    dispatch(getComic(Number(comicId.split('')[1])));   

  },[]);
    
 

  return (
      <div className={styles.center}>
    <div className={styles.container}>
        <div className={styles.boxTop} >
          <div className={styles.boxLeft}>
            <img
              className={styles.image}
              src={comic?.img }
            />
          </div>
          <div className={styles.boxRight}>
            <div className={styles.title}> {comic?.name} </div>
            <div className={styles.price}> ${comic?.price} </div>
            <div>
              <Button className={styles.cartButton}> Add to Cart</Button>
            </div>
            <div>
              <Button className={styles.cartButton}> Add to Favorites</Button>
            </div>
            <div>
                +10 (Quantity)
            </div>
          </div>

        </div>
        <div className={styles.description}>{comic?.plot}</div>
      </div>
    </div>
  );
};

export default ProductView;
