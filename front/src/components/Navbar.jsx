import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import logo from "../utils/logoSvg.svg"
import { Button, FormControl } from "react-bootstrap"
import { userLogout } from "../store/user"
import DropdownCont from "../containers/DropdownContainer"

import styles from "../styles/navbar.module.css"
import { setSearch } from "../store/search"
import { useState } from "react"

const Navbar = () => {
  const [inputValue, setInputValue] = useState("")

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    if (user.id) dispatch(userLogout())
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setSearch(inputValue))
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <Link to="/" onClick={() => dispatch(setSearch([]))}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.boxCenter}>
        <FormControl
          onChange={e => setInputValue(e.target.value)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <div className={styles}>
          <Button id="search" onClick={handleSubmit}>
            Search
          </Button>
        </div>
        <DropdownCont />
      </div>

      <div className={styles.boxRight}>
        {user.isAdmin && (
          <div className={styles.btns}>
            <Link to="/categories">
              <Button>Categories</Button>
            </Link>

            <Link to="/users">
              <Button>Users</Button>
            </Link>

            <Link to="/comics">
              <Button>Comics</Button>
            </Link>
          </div>
        )}

        <div className={styles.btns}>
          <Link to={`/${user.id ? "" : "login"}`}>
            <Button onClick={handleLogout}>{user.id ? "Log out" : "Log in"}</Button>
          </Link>
        </div>
        <div className={styles.btns}>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>

        <div className={styles.btns}>
          <Link to="/cart">
            <Button>
              <i className="pi pi-shopping-cart"></i>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
