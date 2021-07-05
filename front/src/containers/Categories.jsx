import React, { useEffect, useState } from "react"

import { getCategories, deleteCategory, editCategory } from "../store/categories"
import { useDispatch, useSelector } from "react-redux"

import { InputText } from "primereact/inputtext"

import AddCategories from "./addCategories"

//primereact
import { OrderList } from "primereact/orderlist"
import { Button } from "primereact/button"

import "../styles/ListCategories.css"
import Swal from "sweetalert2"

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  // ver porq se genera lop infito

  const handleDelete = id => {
    dispatch(deleteCategory(id))
  }

  const handleEdit = async id => {
    const { value: category } = await Swal.fire({
      title: "Enter a new value",
      input: "text",
      inputLabel: "Your category",
      showCancelButton: true,
      inputPlaceholder: "New value",
      inputValidator: value => {
        if (!value) {
          return "You need to write something!"
        }
      }
    })

    if (category) {
      dispatch(editCategory({ id, category }))
    }
  }

  const itemTemplate = item => {
    return (
      <div className="product-item">
        <div className="product-list-detail">
          <h5 className="p-mb-2">{item.name}</h5>
        </div>
        <div className="product-list-action">
          <span className="p-buttonset">
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-outlined p-button-danger"
              onClick={() => handleDelete(item.id)}
            />
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-outlined p-button-info"
              onClick={() => handleEdit(item.id)}
            />
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <AddCategories />
      <div className="orderlist-demo">
        <div className="card">
          <OrderList
            value={categories ? categories : []}
            itemTemplate={itemTemplate}
            header="Categories"></OrderList>
        </div>
      </div>
    </>
  )
}

export default Categories
