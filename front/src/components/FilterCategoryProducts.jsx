import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const FilterCategoryProducts = ({products}) => {

    const Categories = () => {
        const category = useSelector((state) => state.category)
        console.log("soy category", category)
    }

return (

        <div>

            {products && products.map(comic => {
                return(
                    <div key={products}>
                        <Link to={'/category'}>
                            <img src={comic.img} alt="" />
                        </Link>    
                    <div> 
                    {comic.title.slice(0, 21)}</div>
                    <div> Price: {comic.price} </div>
                    <div> <button>   </button> </div>{/* onCLick= {() => addOrder{comic.id}}  */}
                    <br />
                    </div>
                )
            })}

        </div>
        
    )
}

export default FilterCategoryProducts
