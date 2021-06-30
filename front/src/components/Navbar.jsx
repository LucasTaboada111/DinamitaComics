import React from 'react'
import styles from '../styles/navbar.module.css'
import NavbarCategories from './NavbarCategories'


const Navbar = () => {




    return (
        <>

        <div className={styles.container}>
            Soy la Navbar
        </div>
        

        <div>
            <NavbarCategories />
        </div>

        </>
    )
}

export default Navbar
