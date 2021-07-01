import React from "react";
import styles from "../styles/navbar.module.css";
import NavbarCategories from "./NavbarCategories";
import logo from "./utils/logo.png";
//https://ibb.co/QbrvrkN

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
      </div>

      <div>Search</div>
      <div>
          Login

      </div>
      <div>
          Register
      </div>
      <div>
      CaRRITO
      </div>
      

    </div>
  );
};

export default Navbar;
