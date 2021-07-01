import React from "react";
import styles from "../styles/productView.module.css";
import { Button } from "react-bootstrap";

const ProductView = () => {
  return (
      <div className={styles.center}>
    <div className={styles.container}>
        <div className={styles.boxTop} >
          <div className={styles.boxLeft}>
            <img
              className={styles.image}
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1314677626l/12472406.jpg"
            />
          </div>
          <div className={styles.boxRight}>
            <div className={styles.title}> Product Name </div>
            <div className={styles.price}> Product Price </div>
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
        <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione dolorum neque cupiditate at reprehenderit minima perspiciatis accusamus molestiae? Excepturi, quibusdam? Minus iure est debitis eum beatae sequi recusandae enim.</div>
      </div>
    </div>
  );
};

export default ProductView;
