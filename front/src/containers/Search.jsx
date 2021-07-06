import React, { useState } from "react"

import { useDispatch , useSelector} from "react-redux"

import ProductBox from "../components/ProductBox"

const Search = ()=>{


const comics = useSelector((state)=>state.search) 

console.log("aca esta el comic search",comics)

    return(
        <div>
              <ProductBox comics={comics} />
        </div>
    )
}
export default Search;
