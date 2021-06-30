import React, { useEffect, useState } from "react";
import { useFormik, setValue } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { useDispatch } from "react-redux";
import { postUser } from "../store/user";
import CountryService from "../configs/CountryService";
//import '../Configs/countries.json'
import style from "../styles/form.module.css";

const FormikFormDemo = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries, "soy countries");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const [registro, setRegistro] = useState({});

  const dispatch = useDispatch();
  //const countryservice = new CountryService();

  useEffect(() => {
    // countryservice.prototype.getCountries().then(data => setCountries(data));
    setCountries(["Argentina", "Uruguay", "Chile", "Bolivia"]);
  }, []);

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
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },

    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const handlePost = (e) => {
    e.preventDefault();

    dispatch(postUser(registro));
    console.log(registro, "soy registro");
  };

  const handleData = (e) => {
    e.preventDefault();

    const key = e.target.name;
    const value = e.target.value;

    setRegistro({ ...registro, [key]: value });
    console.log(registro);
  };

  const handleCountry = (e) => {
    console.log(formik.values.country);

    const value = e.target.value;

    formik.values.country = value;

    // const key = e.target.name;
    // const value = e.target.value;

    // setRegistro({ ...registro, [key]: value });
  };
  /*  name: userName,
            email: email,
            password: password,
            Fullname: Fullname, */

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className={style.form}>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h5 className="p-text-center">Register</h5>
          <form
            className={style.form}
            /* onSubmit={formik.handleSubmit}*/
            onSubmit={handlePost}
            className="p-fluid"
          >
            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="Fullname"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={handleData}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("fullname"),
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    "p-error": isFormFieldValid("name"),
                  })}
                >
                  fullname*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>

            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="Username"
                  name="username"
                  value={formik.values.username}
                  onChange={handleData}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("username"),
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    "p-error": isFormFieldValid("name"),
                  })}
                >
                  username*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>

            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="Adress"
                  name="adress"
                  value={formik.values.adress}
                  onChange={handleData}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("adress"),
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    "p-error": isFormFieldValid("name"),
                  })}
                >
                  adress*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>

            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="Phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={handleData}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("phone"),
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    "p-error": isFormFieldValid("name"),
                  })}
                >
                  phone
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>

            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  //onChange={handleData}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleData(e);
                  }}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={handleData}
                  onChange={formik.handleChange}
                  toggleMask
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
                  header={passwordHeader}
                  footer={passwordFooter}
                />
                <label
                  htmlFor="password"
                  className={classNames({
                    "p-error": isFormFieldValid("password"),
                  })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <div>
                  <select>
                    {countries.map((countrysito) => {
                      return <option key={countrysito}>
                          {countrysito}
                      </option>;
                    })}
                  </select>
                </div>
              </span>
            </div>
            <Button type="submit" label="Registrarse" className="p-mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormikFormDemo;
