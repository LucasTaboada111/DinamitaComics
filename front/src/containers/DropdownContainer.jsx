import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "react-router-dom"



const DropdownCont = () => {

  const categories = ["Aventuras", "Humorístico", "Terror", "Fantástico"]

  
  return (

    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map(categorie => (
            <Dropdown.Item onClick={() => categorie} className="drop-color">
              <Link to={`/category/${categorie}`}> {categorie} </Link>
            </Dropdown.Item>
          ))}
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
