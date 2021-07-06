import React, { useState } from "react"

import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

import { editCategory } from "../store/categories"

import { addCategory } from "../store/categories"
import { useDispatch } from "react-redux"

import "../styles/addCategories.css"

const AddCategories = () => {
  const [category, setcategory] = useState("")
  const dispatch = useDispatch()

  const addCategories = () => {
    dispatch(addCategory({ category }))
    setcategory("")
  }

  return (
    <div className="add-container">
      <span className="p-input-icon-left">
        <InputText
          onChange={e => setcategory(e.target.value)}
          value={category}
          placeholder="Add categories"
        />
        <Button icon="pi pi-plus" className="p-button-success" onClick={() => addCategories()} />
      </span>
    </div>
  )
}

export default AddCategories
