import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { InputTextarea } from "primereact/inputtextarea"

import success from "../utils/message/success"
import { addComic } from "../store/comics"

const NewComicForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [newComic, setnewComic] = useState({
    name: "",
    price: 0,
    img: "",
    plot: "",
    rating: 0,
    stock: 0,
    year: 0
  })

  const footer = (
    <span className="p-field p-fluid">
      <Button label="Save" icon="pi pi-check" className="mb-1" />
      <Link to="/comics">
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
      </Link>
    </span>
  )

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addComic(newComic))
    success()
    setTimeout(() => {
      history.push("/comics")
    }, 1000)
  }

  const handleChange = ({ target }) => {
    setnewComic(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const title = <h2>Add a new comic!</h2>

  return (
    <form onSubmit={handleSubmit}>
      <Card
        title={title}
        style={{ width: "25em", margin: "auto", marginTop: "10px" }}
        footer={footer}>
        <div className="p-field p-fluid">
          <label htmlFor="name" className="p-col-fixed" style={{ width: "100px" }}>
            Name
          </label>
          <div className="p-col">
            <InputText
              placeholder="Complete with comic name"
              id="name"
              name="name"
              value={newComic.name}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>

        <div className="p-field p-fluid">
          <label htmlFor="price" className="p-col-fixed" style={{ width: "100px" }}>
            Price
          </label>
          <div className="p-col">
            <InputNumber
              inputId="currency-us"
              name="price"
              value={newComic.price}
              onValueChange={handleChange}
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </div>
        </div>
        <div className="p-field p-fluid">
          <label htmlFor="img" className="p-col-fixed" style={{ width: "100px" }}>
            Image url
          </label>
          <div className="p-col">
            <InputText
              name="img"
              id="img"
              value={newComic.img}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>

        <div className="p-field p-fluid">
          <label htmlFor="rating" className="p-col-fixed" style={{ width: "100px" }}>
            Rating
          </label>
          <div className="p-col">
            <InputNumber
              inputId="rating"
              name="rating"
              value={newComic.rating}
              onValueChange={handleChange}
              mode="decimal"
              minFractionDigits={1}
              maxFractionDigits={1}
            />
          </div>
        </div>

        <div className="p-field p-fluid">
          <label htmlFor="stock" className="p-col-fixed" style={{ width: "100px" }}>
            Stock
          </label>
          <div className="p-col">
            <InputNumber
              name="stock"
              inputId="stock"
              value={newComic.stock}
              onValueChange={handleChange}
            />
          </div>
        </div>
        <div className="p-field p-fluid">
          <label htmlFor="year" className="p-col-fixed" style={{ width: "100px" }}>
            Year
          </label>
          <div className="p-col">
            <InputNumber
              name="year"
              inputId="year"
              value={newComic.year}
              onValueChange={handleChange}
            />
          </div>
        </div>
        <div className="p-field p-fluid">
          <label htmlFor="plot" className="p-col-fixed" style={{ width: "100px" }}>
            Descripction
          </label>
          <div className="p-col">
            <InputTextarea
              rows={5}
              cols={30}
              name="plot"
              value={newComic.plot}
              onChange={handleChange}
              autoResize
            />
          </div>
        </div>
      </Card>
    </form>
  )
}

export default NewComicForm
