
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import axios  from "axios"





export const getCategories = createAsyncThunk("GET CATEGORIES",(CategoriesProduct)=>{
    return axios.get(`/api/products/category/${CategoriesProduct}`).then((res)=>{
        return res.data
    })
})


const filterCatReducer = createReducer([],{
    [getCategories.fulfilled] : (state,action) => action.payload
})


export default filterCatReducer;



