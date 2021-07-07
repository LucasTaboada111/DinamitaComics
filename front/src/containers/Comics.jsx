import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { OrderList } from "primereact/orderlist"
import { Button } from "primereact/button"
import Swal from "sweetalert2"

import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getComics, deleteComic } from "../store/comics"

const Comics = () => {
  const dispatch = useDispatch()
  const comics = useSelector(state => state.comics)

  useEffect(() => {
    dispatch(getComics())
  }, [dispatch])

  const handleDeleteComic = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteComic(id))
        Swal.fire({ title: "Deleted!", timer: 1000, icon: "success" })
      }
    })
  }

  const itemTemplate = item => {
    return (
      <div className="product-item" id="products">
        <div className="image-container">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="product-list-detail">
          <h5 className="p-mb-2">{item.name}</h5>
          <h6 className="p-mb-2">${item.price}</h6>
        </div>

        <span className="p-buttonset">
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-outlined p-button-danger"
            onClick={() => handleDeleteComic(item.id)}
          />
          <Link to={{ pathname: `/comics/edit/${item.id}`, state: { item } }}>
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-outlined p-button-info"
            />
          </Link>
        </span>
      </div>
    )
  }

  return (
    <div className="orderlist-demo">
      <div className="card">
        <OrderList
          value={comics}
          header="List of Comics"
          dataKey="id"
          itemTemplate={itemTemplate}></OrderList>
      </div>
    </div>
  )
}

export default Comics
