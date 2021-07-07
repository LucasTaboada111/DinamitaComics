import React, { useState } from "react"

import { Link, useLocation, useHistory } from "react-router-dom"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"

import { useDispatch } from "react-redux"
import { updateComic } from "../store/comics"
import success from "../utils/message/success"
const EditComicForm = () => {
  const history = useHistory()
  const { state } = useLocation()
  const dispatch = useDispatch()
  const comic = state.item

  const [name, setname] = useState(comic.name)
  const [price, setprice] = useState(comic.price)
  const [img, setimg] = useState(comic.img)
  const [rating, setrating] = useState(comic.rating)
  const [stock, setstock] = useState(comic.stock)
  const [year, setyear] = useState(comic.year)

  const newComic = {
    id: comic.id,
    name,
    price,
    img,
    rating,
    stock,
    year
  }

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
    dispatch(updateComic(newComic))
    success()
    setTimeout(() => {
      history.push("/comics")
    }, 1000)
  }

  const title = <h2>{comic.name}</h2>

  return (
    <form onSubmit={handleSubmit}>
      <Card
        title="Advanced Card"
        title={title}
        style={{ width: "25em", margin: "auto", marginTop: "10px" }}
        footer={footer}>
        <div className="p-field p-fluid">
          <label htmlFor="name" className="p-col-fixed" style={{ width: "100px" }}>
            Name
          </label>
          <div className="p-col">
            <InputText
              id="name"
              value={name}
              onChange={e => setname(e.target.value)}
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
              value={price}
              onValueChange={e => setprice(e.target.value)}
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
            <InputText id="img" value={img} onChange={e => setimg(e.target.value)} type="text" />
          </div>
        </div>

        <div className="p-field p-fluid">
          <label htmlFor="rating" className="p-col-fixed" style={{ width: "100px" }}>
            Rating
          </label>
          <div className="p-col">
            <InputNumber
              inputId="rating"
              value={rating}
              onValueChange={e => setrating(e.target.value)}
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
              inputId="stock"
              value={stock}
              onValueChange={e => setstock(e.target.value)}
            />
          </div>
        </div>
        <div className="p-field p-fluid">
          <label htmlFor="year" className="p-col-fixed" style={{ width: "100px" }}>
            Year
          </label>
          <div className="p-col">
            <InputNumber
              inputId="year"
              value={year}
              onValueChange={e => setyear(e.target.value)}
            />
          </div>
        </div>
      </Card>
    </form>
  )
}

export default EditComicForm
