import React from "react"
import ProductBox from "./ProductBox"
import styles from "../styles/productsContainer"

const ProductsContainer = () => {
  return (
    <div>
      <ProductBox className={styles.container} />
    </div>
  )
}

export default ProductsContainer
