import React, { useState, useEffect } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Rating } from "primereact/rating"
import "../styles/cart.module.css"
import styles from "../styles/cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import {getDataCart } from "../store/cart"



const DataTableTemplatingDemo = () => {

  const dispach = useDispatch()
  const cartUser = useSelector(state => state.cart)
  
  const [products, setProducts] = useState([])

  useEffect(() => {
dispach(getDataCart())
setProducts(cartUser)
console.log("pero",cartUser)
  }, []) 

  const formatCurrency = value => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  const imageBodyTemplate = rowData => {
    return (
      <img
        src={rowData.img}
        onError={e =>
          (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className={styles.imgProduct}
      />
    )
  }

  const priceBodyTemplate = rowData => {
    return formatCurrency(rowData.price)
  }

  const ratingBodyTemplate = rowData => {
    return <Rating value={rowData.rating} readOnly cancel={false} />
  }

  const quantityBodyTemplate = () => {
    return (
      <div style={{ display: "flex" }}>
        {/*   <Button className={styles.boton} icon="pi pi-plus"></Button> */} <h6>1</h6>
        {/*  <Button className={styles.boton} icon="pi pi-minus"></Button>{" "} */}
      </div>
    )
  }

  const header = `In total there are ${products ? products.length : 0} products in your cart.`

  const footer = (
    <div className={styles.divFooter}>
      {" "}
      <Button
        icon="pi pi-wallet"
        className={styles.buttonBuy}
        style={{ width: "20%", margin: "0 auto" }}>
        {" "}
        Buy Cart{" "}
      </Button>
    </div>
  )

  return (
    <div className="datatable-templating-demo">
      <div className="card">
        <DataTable value={products} header={header} footer={footer}>
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="rating" header="Rating" body={ratingBodyTemplate}></Column>
          <Column header="Price" body={priceBodyTemplate}></Column>
          <Column header="Quantity" body={quantityBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  )
}

export default DataTableTemplatingDemo
