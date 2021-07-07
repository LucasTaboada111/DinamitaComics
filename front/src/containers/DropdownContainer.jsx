import React, { useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "react-router-dom"

const DropdownCont = () => {
  const [state, setstate] = useState("All")

  const categories = ["Aventuras", "Humorístico", "Terror", "Fantástico"]

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {state}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map(categorie => (
            <Dropdown.Item onClick={() => setstate(categorie)} className="drop-color">
              <Link to={`/category/${categorie}`}>{categorie}</Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownCont
