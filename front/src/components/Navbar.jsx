import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.css"
// import NavbarCategories from "./NavbarCategories"
import logo from "./utils/logo.png"
import { Button, FormControl } from "react-bootstrap"
import { GrCart } from "react-icons/gr"

import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../store/user"

const Navbar = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const handleLogout = e => {
    if (user.id) dispatch(userLogout())
  }
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
      </div>

      <div className={styles.boxCenter}>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      </div>

      <div className={styles.boxRight}>
        <div>
          <Link to={`/${user.id ? "" : "login"}`}>
            <Button onClick={handleLogout}>{user.id ? "Log out" : "Log in"}</Button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>

        <div>
          <GrCart />0
        </div>
      </div>
    </div>
  )
}

export default Navbar
