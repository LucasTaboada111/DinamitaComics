import React from "react";
import styles from "../styles/productView.module.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getComic } from "../store/comic";
import { useEffect, useState } from "react";
import {GrFavorite} from 'react-icons/gr'
import {FiPlus} from 'react-icons/fi'


const ProductView = ({comicId}) => {

  const dispatch = useDispatch();
  

  const comic = useSelector((state => state.comic))

 
  useEffect(()=>{
    dispatch(getComic(comicId));   

  },[dispatch]);
    
  
  return (
      <div className={styles.center}>
    <div className={styles.container}>
        <div className={styles.boxTop} >
          <div className={styles.boxLeft}>
            <img
              className={styles.image}
              src={comic.img }
            />
          </div>
          <div className={styles.boxRight}>
            <div className={styles.title}> {comic.name} </div>
            <div className={styles.price}> ${comic.price} </div>
            <div>
              <Button className={styles.cartButton} > Add to Cart ! </Button>
            </div>
            <div>
              <Button className={styles.cartButton}> <GrFavorite /> </Button>
            </div>
            <div>
                +10 (Quantity)
            </div>
          </div>

        </div>
        <div className={styles.description}>{comic.plot}</div>
      </div>
    </div>
  );
};

export default ProductView;


