import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.css"
import logo from "../utils/logo.png"
import { Button, FormControl } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../store/user"
import DropdownCont from "../containers/DropdownContainer"

import { setSearch } from "../store/search"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [inputValue, setInputValue] = useState({})

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    if (user.id) dispatch(userLogout())
  }

  const handleChange = e => {
    e.preventDefault()
    const value = e.target.value
    setInputValue({ comicName: value })
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
          onChange={e => handleChange(e)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button onClick={handleSubmit}>Search</Button>
      </div>

      <DropdownCont />

      <div className={styles.boxRight}>
        {user.isAdmin && (
          <div className={styles.btns}>
            <Link to="/categories">
              <Button>Categories</Button>
            </Link>
            <Link to="/users">
              <Button>Users</Button>
            </Link>
          </div>
        )}
        <div className={styles.btns}>
          <Link to="/comics">
            <Button>Comics</Button>
          </Link>
        </div>

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
          <Button href="/cart">
            <FaShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
