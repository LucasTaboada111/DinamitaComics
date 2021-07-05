import React, { useState, useEffect } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Rating } from "primereact/rating"
import styles from "../styles/cart.module.css"

const DataTableTemplatingDemo = () => {


const example = [
    {
      name: "Batman: The Killing Joke",
      price: 1.14,
      img: "https://images-na.ssl-images-amazon.com/images/I/91CLsiEAX8L.jpg",
      plot: "Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland. The Killing Joke provides an origin story for the supervillain the Joker, loosely adapted from the 1951 story arc 'The Man Behind the Red Hood!'. The Joker's origin is presented via flashback, while simultaneously depicting his attempt to drive Jim Gordon insane and Batman's desperate attempt to stop him.",
      rating: 5,
      stock: 5,
      year: 2012
    },
    {
      name: "The Dark Knight Returns",
      price: 1.25,
      img: "https://www.ecccomics.com/content/productos/8061/Batman_99_44_1a_cubierta.jpg",
      plot: "The Dark Knight Returns (alternatively titled Batman: The Dark Knight Returns) is a 1986 four-issue comic book miniseries starring Batman, written by Frank Miller, illustrated by Miller, and Klaus Janson, with color by Lynn Varley, and published by DC Comics. It tells an alternative story of Bruce Wayne, who at 55-years-old returns from retirement to fight crime and faces opposition from the Gotham City police force and the United States government. The story also features the return of classic foes such as Two-Face and the Joker, and culminates with a confrontation against Superman, who is now a pawn of the government.",
      rating: 4,
      stock: 6,
      year: 2010
    },
    {
      name: "HARLEY QUINN: VILLAIN OF THE YEAR #1",
      price: 1.69,
      img: "https://www.ecccomics.com/content/productos/5020/HarleyQuinn_22.jpg",
      plot: "Harley Quinn hosts “Villainy’s Biggest Night” as the DCU’s most dastardly gather at the Hall of Doom to do what they do best—congratulate themselves! But one villain has a secret plan, fueled by years of being overlooked by his peers, and the burning desire to receive the praise he so rightly deserves... Don’t miss out on a one-of-a-kind comic book experience, with the winners decided by you, the fans! Who will be crowned DC’s Villain of the Year?",
      rating: 2.25,
      stock: 2,
      year: 2018
    }
  ]
  
const [products, setProducts] = useState([])

useEffect(() => {
    setProducts(example)
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
