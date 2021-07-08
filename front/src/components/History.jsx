import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch , useSelector } from "react-redux";

const History = () => {

const  dispatch = useDispatch()
const orderList = useSelector(state=>state.order)
    const [products, setProducts] = useState([]);
  

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className="card">
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default History;
