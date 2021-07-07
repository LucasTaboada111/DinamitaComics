import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/productBox.module.css";
import containerStyles from '../styles/productsContainer.module.css'
import { Button } from "react-bootstrap";

const FilterCategoryProducts = ({ products }) => {

  const category = useSelector((state) => state.comicsFilter);

  return (
    <div className={containerStyles.container}>
      {products.length && products.map(comic => {
        return (
          <div className={styles.container} key={comic.id}>
            <Link to={`/comic/${comic.id}`} products={products}>
              <div>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={comic.img} alt="comic" />
                </div>
                <div className={styles.boxBottom}>
                  <div className={styles.productName}>{comic.name}</div>
                  <div className={styles.price}>{comic.price} $</div>
                  <div>
                    <Button className={styles.addToCart}>Add to Cart</Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )


  /* return (

    <div>
      {products &&
        products.map((comic) => {
          return (
            <div key={products}>
              <Link to={"/category"}>
                <img src={comic.img} alt="" />
              </Link>
              <div>
                  
              </div>
              <div> Price: {comic.price} </div>
              <div>
                {" "}
                <button> </button>{" "}
              </div>
               onCLick= {() => addOrder{comic.id}}  
              <br />
            </div>
          );
        })}
    </div>
    ) */
};

export default FilterCategoryProducts;
