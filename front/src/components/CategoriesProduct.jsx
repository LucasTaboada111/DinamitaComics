import React, { useEffect } from "react";
import FilterCategoryProducts from "./FilterCategoryProducts";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/filterCategory";



const CategoriesProduct = () => {
  const dispatch = useDispatch()
  const {CategoriesProduct} = useParams()
  const productsCategory = useSelector(state=>state.filterCat)



  useEffect(() => {
    dispatch(getCategories(CategoriesProduct))
  }, [dispatch,CategoriesProduct])



  return (

    <div >
      <FilterCategoryProducts products={productsCategory} />
    </div>

  );
};

export default CategoriesProduct;
