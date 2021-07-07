
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/user";
import { postUser } from "../store/user";
import style from "../styles/form.module.css";


const FormikFormDemo = () => {
  const [countries, setCountries] = useState([])

  const [showMessage, setShowMessage] = useState(false)

  const [registro, setRegistro] = useState({})

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    setCountries(["Select your country", "Argentina", "Uruguay", "Chile", "Bolivia", "Paraguay"])
  }, [])

  const formik = useFormik({
    initialValues: {
      Fullname: "",
      userName: "",
      Adress: "",
      Phone: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false
    },
    validate: data => {
      const errors = {}

      if (!data.name) {
        errors.name = "Name is required."
      }

      if (!data.email) {
        errors.email = "Email is required."
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = "Invalid email address. E.g. example@email.com"
      }

      if (!data.password) {
        errors.password = "Password is required."
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions."
      }

      return errors
    }
  })

  const redirect = () => history.push("/login")

  const onSubmit = e => {
    e.preventDefault()
    setShowMessage(true)
    setTimeout(() => redirect(), 4000)
  }

  const handleRegister = e => {
    e.preventDefault()
    dispatch(userRegister(registro))
  }

  const handleData = e => {
    const key = e.target.name
    const value = e.target.value

    setRegistro({ ...registro, [key]: value })
  }

  const isFormFieldValid = name => !!(formik.touched[name] && formik.errors[name])
  const getFormErrorMessage = name => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>
  }

  const passwordFooter = (
    <React.Fragment>
      <Divider layout="horizontal" />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  )

  return (
    <div className={style.container}>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top-left"
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
        contentStyle={{ backgroundColor: "rgba(1,2,3,.5)", color: "white" }}>
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-30">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--gray-500)" }}></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Su cuenta ha sido registrada con exito! Bienvenid@ <b>{registro.fullname}</b>
          </p>
        </div>
      </Dialog>

      <form
        className={style.form}
        onSubmit={e => {
          handleRegister(e)
          onSubmit(e)
        }}>
        <div className="p-field">
          <span>
            <InputText
              id="Fullname"
              username
              name="fullname"
              value={formik.values.fullname}
              onChange={handleData}
              autoFocus
              className={classNames({
                "p-invalid": isFormFieldValid("fullname")
              })}
              placeholder="Fullname"
              style={{ width: "100%", border: "none" }}
              required = "true"
            />
            <label
              htmlFor="name"
              className={classNames({
                "p-error": isFormFieldValid("name")
              })}></label>
          </span>
          {getFormErrorMessage("name")}
        </div>

        <div className="p-field">
          <span>
            <InputText
              id="Username"
              name="username"
              value={formik.values.username}
              onChange={handleData}
              placeholder="Username"
              className={classNames({
                "p-invalid": isFormFieldValid("username")
              })}
              style={{ margin: "10px 0px", width: "100%" }}
              required = "true"
            />
            <label
              htmlFor="name"
              className={classNames({
                "p-error": isFormFieldValid("name")
              })}></label>
          </span>
          {getFormErrorMessage("name")}
        </div>

        <div className="p-field">
          <span>
            <InputText
              id="Adress"
              name="address"
              value={formik.values.adress}
              onChange={handleData}
              autoFocus
              className={classNames({
                "p-invalid": isFormFieldValid("adress")
              })}
              placeholder="Adress"
              style={{ width: "100%" }}
              required = "true"
            />
            <label
              htmlFor="name"
              className={classNames({
                "p-error": isFormFieldValid("name")
              })}></label>
          </span>
          {getFormErrorMessage("name")}
        </div>

        <div className="p-field">
          <span>
            <InputText
              id="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={handleData}
              autoFocus
              className={classNames({
                "p-invalid": isFormFieldValid("phone")
              })}
              placeholder="Phone"
              style={{ margin: "10px 0px", width: "100%" }}
              required = "true"
            />
            <label
              htmlFor="name"
              className={classNames({
                "p-error": isFormFieldValid("name")
              })}></label>
          </span>
          {getFormErrorMessage("name")}
        </div>

        <div className="p-field">
          <span className=" p-input-icon-right">
            <i className="pi pi-envelope" />
            <InputText
              id="email"
              name="email"
              value={formik.values.email}
              onChange={e => {
                formik.handleChange(e)
                handleData(e)
              }}
              className={classNames({
                "p-invalid": isFormFieldValid("email")
              })}
              placeholder="Email"
              required = "true"
            />
            <label
              htmlFor="email"
              className={classNames({
                "p-error": isFormFieldValid("email")
              })}></label>
          </span>
          {getFormErrorMessage("email")}
        </div>
        <div className="p-field">
          <span name="password" onChange={handleData}>
            <Password
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              toggleMask
              className={classNames({
                "p-invalid": isFormFieldValid("password")
              })}
              placeholder="Password"
              style={{ margin: "10px 0px" }}
              header={passwordFooter}
              required = "true"
            />
            <label
              htmlFor="password"
              className={classNames({
                "p-error": isFormFieldValid("password")
              })}></label>
          </span>
          {getFormErrorMessage("password")}
        </div>
        <div className="p-field">
          <div>
            <select name="country" onChange={e => handleData(e)} className={style.select}>
              {countries.map(country => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <Button
          type="submit"
          label="Register"
          className="p-mt-2"
          style={{
            backgroundColor: "rgba(1,2,3,.5)",
            border: "1px solid white",
            borderRadius: "10px",
            boxShadow: " 0px 1px 2px white",
            width: "50%",
            margin: "10px auto"
          }}
        />
      </form>
    </div>
  )
}

export default FormikFormDemo
