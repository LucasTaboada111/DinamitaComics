import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import NavbarCategories from "./NavbarCategories";
import logo from "./utils/logo.png";
import { Button, Input, FormControl } from "react-bootstrap"; 
import {GrCart} from 'react-icons/gr'



//https://ibb.co/QbrvrkN

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
          <Link to='/'>
        <img className={styles.logo} src={logo} alt="" />
        </Link>
      </div>

      <div className={styles.boxCenter}>  
          <FormControl
          type="text"
          placeholder="Buscar"
          //value={input}
          //onChange={handleChange}
          className="mr-sm-2"
        />
        </div>

        <div className={styles.boxRight}>
      <div>
          <Link to="/login">
          <Button>
          Login
              </Button>
              </Link>
      </div>
      <div>
          <Link to="/register">
          <Button>
          Register
          </Button>
          </Link>
      </div>

      <div>
      <GrCart />
      0
      </div>
      </div>


    </div>
  );
};

export default Navbar;
