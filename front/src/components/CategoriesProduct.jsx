import React, { useEffect, useState } from "react";
import FilterCategoryProducts from "./FilterCategoryProducts";
import {useParams} from 'react-router-dom'
import axios from "axios";


const CategoriesProduct = () => {

  const {CategoriesProduct} = useParams()
  const [productsCategory, setProductsCategory] = useState([])


  useEffect(() => {
  axios.get(`/api/products/category/${CategoriesProduct}`).then(res => setProductsCategory(res.data))

  }, [CategoriesProduct])



  return (

    <div >
      <FilterCategoryProducts products={productsCategory} />
    </div>

  );
};

export default CategoriesProduct;
