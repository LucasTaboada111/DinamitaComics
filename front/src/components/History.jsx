import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch , useSelector } from "react-redux";
import { getCheckout } from '../store/checkout';
import styles from "../styles/cart.module.css";
const History = () => {

const  dispatch = useDispatch()
const orderList = useSelector(state=>state.checkout)


const [comicBought , setcomicBought] = useState([])    


    useEffect(() => {
dispatch(getCheckout())
.then(data=>data.payload.map(arrayCompra=>arrayCompra.map(objComic=>setcomicBought(comics => ([... comics, objComic.comic])))))
    }, [dispatch])

    const imageBodyTemplate = rowData => {
        console.log("imagen",rowData)
        return (
          <img
            src={rowData.img}
            onError={e =>
              (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={rowData.img}
            className={styles.imgProduct}
          />
        )
      }
const dateBodyTemplate = rowData => {
const date = new Date()
    return "hoy"
}

    return (
        <div>
            <div className="card">
                <DataTable value={comicBought}>
                    <Column field="code" header="" body={imageBodyTemplate}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="price" header="Price"></Column>
                    <Column  header="Date" body={dateBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default History;




