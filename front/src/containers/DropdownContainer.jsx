import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/category";

const DropdownCont = () => {

    const [dropDown, setDropdown] = useState(false)
    const dispatch = useDispatch()
    
    const toggle = () => setDropdown(!dropDown)


    const SelectCategory = (category) => {
        categories(category)
        .then(({data}) => dispatch(setCategory(data)))
    }

    const categories = [
      "All", "Adventures", "Humor", "Terror", "Fantastic"
    ]

    return (

        <div>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    categorie
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {categories.map(categorie => 
                
                <Dropdown.Item onClick={() => SelectCategory(categorie)}
                 className="drop-color"><Link to={`/category/${categorie}`}> {categorie} </Link>  </Dropdown.Item> 
                  )}
                </Dropdown.Menu>
                
            </Dropdown> 
        </div>
    )

}

export default DropdownCont

/* 
    <div >
      <Dropdown >
        <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.categories}>
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Aventuras</Dropdown.Item>

          <Dropdown.Item href="#/action-2">Humoristico</Dropdown.Item>

          <Dropdown.Item href="#/action-3">Terror</Dropdown.Item>

          <Dropdown.Item href="#/action-3">Fantastico</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>
      
*/