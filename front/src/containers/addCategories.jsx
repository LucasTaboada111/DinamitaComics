import React, { useState } from "react"
import { useDispatch } from "react-redux"

//components
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { addCategory } from "../store/categories"

// messages
import success from "../utils/message/success"
import warningNoText from "../utils/message/warningNoText"

import "../styles/addCategories.css"

const AddCategories = () => {
  const [category, setcategory] = useState("")
  const dispatch = useDispatch()

  const addCategories = () => {
    if (!category.length) {
      warningNoText()
      return
    } else {
      dispatch(addCategory({ category }))
      setcategory("")
      success()
    }
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
